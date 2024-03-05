const jsPsychTripletAudioSortChart = (function (jspsych) {
    'use strict';
  
    const info = {
        name: "triplet-audio-sort-chart",
        parameters: {
            stimulus: {
                type: jspsych.ParameterType.AUDIO,
                pretty_name: "Stimulus",
                default: undefined,
            },
            probe1: {
                type: jspsych.ParameterType.AUDIO,
                pretty_name: "Probe 1",
                default: undefined,
            },
            probe2: {
                type: jspsych.ParameterType.AUDIO,
                pretty_name: "Probe 2",
                default: undefined,
            },
            probe3: {
                type: jspsych.ParameterType.AUDIO,
                pretty_name: "Probe 3",
                default: undefined,
            },
            tile_order: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Tile order",
                default: ['tile1', 'tile2', 'tile3'],
            },
            order_annotation: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Order annotation",
                default: ["more tense", "more stable"],
            },
            tile_colours: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Tile colours",
                default: ["red", "green", "blue"],
            },
            button_label: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Button label",
                default: "Continue",
            },
            tile_counts: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Tile counts",
                default: null,
            },
        },
    };
    /**
     * **triplet-audio-sort**
     *
     * jsPsych plugin specifically created for the 'Tonic' experiment, involving playing sequences of 
     * audio files corresponding to 'tiles' on the screen, which can then be dragged into different orders
     * to facilitate a 'sort task' behavioural input. 
     *
     * @author Courtney Hilton
     */
    class TripletAudioSortChartPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            let html = "";


            // ------------- //
            // 1. CSS styles //
            // ------------- //


            // inject CSS for trial
            html += '<style id="jspsych-triplet-audio-sort-css">';
            // CSS for tile animations
            html += '@keyframes wiggle { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); }}';
            html += '.wiggle { animation: wiggle 0.5s ease-in-out;}';
            // CSS for the annotations
            html += '#jspsych-triplet-audio-sort-order-annotation {display: flex; align-items: center; width: 100%}';
            html += '.arrow {height: 2px; background-color: black; flex-grow: 1; position: relative;}';
            html += '.arrow::after, .arrow::before {content: " "; position: absolute; top: -5px; height: 0; width: 0;}';
            html += '.arrow::after {right: -10px; border-left: 10px solid black; border-top: 7px solid transparent; border-bottom: 7px solid transparent}';
            html += '.arrow::before {left: -10px; border-right: 10px solid black; border-top: 7px solid transparent; border-bottom: 7px solid transparent}';
            html += '.text {margin-right: 20px;}';
            html += '.text2 {margin-left: 20px;}';
            // other layout CSS
            html += '#jspsych-triplet-audio-container { justify-content: center; }';
            html += '#jspsych-triplet-audio-container { display: flex; }';
            html += '.jspsych-audio-tile { flex: 1; padding: 20px; margin: 10px; border: 1px solid black}';
            html += '.jspsych-tile-container { display: inline-block; margin: 10px; cursor: move;}';
            html += '#jspsych-overall-container { display: flex; flex-direction: row; transition: transform 1s ease; }';
            html += '#jspsych-triplet-audio-bigContainer { display: flex; align-items: center; justify-content: center; flex-direction: column; margin-right: 50px; }';
            html += '#jspsych-chart-container { margin-left: 50px; }';
            // set the colours of the tiles
            html += `#tile1 { background-color: ${trial.tile_colours[0]}; }`;
            html += `#tile2 { background-color: ${trial.tile_colours[1]}; }`;
            html += `#tile3 { background-color: ${trial.tile_colours[2]}; }`;
            // close CSS
            html += "</style>";


            // ----------------------- //
            // 2. construct basic HTML //
            // ----------------------- //


            // add a container to hold probe navigator plus the chart
            html += '<div id="jspsych-overall-container">';

            // add a container for all the tiles plus the annotations
            html += '<div id="jspsych-triplet-audio-bigContainer">';

            // add a container for all the tiles
            html += '<div id="jspsych-triplet-audio-container">';
        
            // add tiles for each audio example
            for (let scale = 0; scale < 3; scale++) {
                html += '<div class="jspsych-tile-container">';
                // add button for replaying audio
                html += `<button id="replay-audio-btn${scale+1}" type="button">Replay Audio</button>`;

                // add tile
                html += `<div class="jspsych-audio-tile" id="tile${scale+1}">${scale+1}</div>`;
        
                html += '</div>'; // Closing tile container
            }
        
            html += '</div>'; // Closing the main container

            // add annotation explaining ordering
            if (trial.order_annotation !== null) {
                html +=
                '<div id="jspsych-triplet-audio-sort-order-annotation" class="jspsych-triplet-audio-sort-order-annotation">' +
                `<div class="text">${trial.order_annotation[0]}</div>` +
                '<div class="arrow"></div>' +
                `<div class="text2">${trial.order_annotation[1]}</div>` +
                '</div>';
            }
            
            html += '</div>'; // Closing the big main container

            // adding chart
            html += '<div id="jspsych-chart-container">' + 
                '<canvas id="pieChartCanvas" width="400" height="250"></canvas>' + 
                '</div>';

            html += '</div>'; // Closing the overall container

            html += '<br><br>';
        
            // add submit button
            html += `<button type="button" id="jspsych-triplet-audio-sort-submit" class="jspsych-btn">${trial.button_label}</button>`;
        
            display_element.innerHTML = html;

            // make sure all opacities are normal
            document.querySelectorAll('.jspsych-audio-tile').forEach((tile) => {
                tile.style.opacity = '1';
            });


            // ----------------------- //
            // 3. make tiles draggable //
            // ----------------------- //


            // function for re-arranging tiles to specific order
            function rearrangeTiles(tileOrder) {
                const container = document.getElementById('jspsych-triplet-audio-container');
                const tileContainers = Array.from(container.querySelectorAll('.jspsych-tile-container'));
            
                // create a map of tile IDs to their respective container elements
                const tileMap = tileContainers.reduce((map, container) => {
                    const tileId = container.querySelector('.jspsych-audio-tile').id;
                    map[tileId] = container;
                    return map;
                }, {});
            
                // rearrange the tiles based on the provided order
                tileOrder.forEach(tileId => {
                    const tileContainer = tileMap[tileId];
                    if (tileContainer) {
                        container.appendChild(tileContainer);
                    } else {
                        console.error('Tile with ID "' + tileId + '" not found.');
                    }
                });
            }
            
            // set tiles to the specified order
            rearrangeTiles(trial.tile_order);

            // version of the tile-rearrange function that facilitates the animation of their movement
            function rearrangeTilesAnimated(tileOrder) {
                const container = document.getElementById('jspsych-triplet-audio-container');
                const tileContainers = Array.from(container.querySelectorAll('.jspsych-tile-container'));
            
                // store the original positions of the tiles
                const originalPositions = tileContainers.map(tile => {
                    return {
                        element: tile,
                        position: tile.getBoundingClientRect()
                    };
                });
            
                // rearrange tiles in DOM as per the new order
                tileOrder.forEach(tileId => {
                    const tileContainer = originalPositions.find(tile => tile.element.querySelector('.jspsych-audio-tile').id === tileId)?.element;
                    if (tileContainer) {
                        container.appendChild(tileContainer);
                    } else {
                        console.error('Tile with ID "' + tileId + '" not found.');
                    }
                });
            
                // apply transformations to move tiles to their new positions
                originalPositions.forEach(tile => {
                    const newPosition = tile.element.getBoundingClientRect();
                    const deltaX = tile.position.left - newPosition.left;
                    const deltaY = tile.position.top - newPosition.top;
            
                    requestAnimationFrame(() => {
                        tile.element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                        tile.element.style.transition = 'transform 0s';
            
                        requestAnimationFrame(() => {
                            tile.element.style.transform = '';
                            tile.element.style.transition = 'transform 1s ease';
                        });
                    });
                });
            }
            
            
            // ------------------------------ //
            // 4. stimulus playback functions //
            // ------------------------------ //


            // tracking all audio sources so they can be stopped at the end of the trial
            let activeAudioSources = [];
            // tracking whether to end current probe sequence (e.g., when response is made)
            let endCurrentSequence = false;

            function playAudio(audioContext, audioSource, this_, startTimeOffset = 0) {
                return new Promise((resolve, reject) => {
                    this_.jsPsych.pluginAPI.getAudioBuffer(audioSource)
                        .then((buffer) => {
                            if (audioContext !== null) {
                                this_.audio = audioContext.createBufferSource();
                                this_.audio.buffer = buffer;
                                this_.audio.connect(audioContext.destination);
                                const startTime = audioContext.currentTime;
                                this_.audio.start(startTime, startTimeOffset);
                                this_.audio.onended = () => {
                                    resolve();
                                    activeAudioSources = activeAudioSources.filter(src => src !== this_.audio);
                                };
                                activeAudioSources.push(this_.audio);
                            } else {
                                reject("Error: Audio context is null.");
                            }
                        })
                        .catch((error) => {
                            reject("Error playing audio: " + error);
                        });
                });
            }
            
            async function playSequence(melody_context, probe_context, trial, this_, probe, active_tile, other_tiles) {
                if (endCurrentSequence) return

                // fade-out non-active tiles
                display_element.querySelector(`#tile${other_tiles[0]}`).style.opacity = '0.4';
                display_element.querySelector(`#tile${other_tiles[1]}`).style.opacity = '0.4';

                // 'wiggle' the active tile with a CSS animation
                let tile = display_element.querySelector(`#tile${active_tile}`);
                tile.classList.add('wiggle');

                tile.addEventListener('animationend', () => {
                    tile.classList.remove('wiggle');
                });

                // play the melody then the probe in sequence
                await playAudio(melody_context, trial.stimulus, this_);
                if (!endCurrentSequence) {
                    await playAudio(probe_context, probe, this_);
                    // return the non-active tiles back to full opacity
                    display_element.querySelector(`#tile${other_tiles[0]}`).style.opacity = '1';
                    display_element.querySelector(`#tile${other_tiles[1]}`).style.opacity = '1';
                }
            }
            
            async function handleReplay(melody_context, probe_context, trial, this_, probe, active_tile, other_tiles) {
                if (!isAudioPlaying) {
                    isAudioPlaying = true;
                    await playSequence(melody_context, probe_context, trial, this_, probe, active_tile, other_tiles);
                    isAudioPlaying = false;
                }
            }

            // --------------------------- //
            // 5. allow replay of examples //
            // --------------------------- //


            const melody_context = this.jsPsych.pluginAPI.audioContext();
            const probe_context = this.jsPsych.pluginAPI.audioContext();
            let isAudioPlaying = false;
            

            display_element.querySelector("#replay-audio-btn1").addEventListener("click", () => {
                handleReplay(melody_context, probe_context, trial, this, trial.probe1, 1, [2,3]);
            });
            
            display_element.querySelector("#replay-audio-btn2").addEventListener("click", () => {
                handleReplay(melody_context, probe_context, trial, this, trial.probe2, 2, [1,3]);
            });
            
            display_element.querySelector("#replay-audio-btn3").addEventListener("click", () => {
                handleReplay(melody_context, probe_context, trial, this, trial.probe3, 3, [1,2]);
            });
            

            // ------------------ //
            // 6. rendering chart //
            // ------------------ //


            // compute percentages 
            function findPermutationIndex(inputArray) {
                for (let i = 0; i < tile_permutations.length; i++) {
                    if (arraysEqual(inputArray, tile_permutations[i])) {
                        return i;
                    }
                }
                return -1; // return -1 if no match is found
            }
            
            function arraysEqual(arr1, arr2) {
                if (arr1.length !== arr2.length) return false;
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) return false;
                }
                return true;
            }

            const response_idx = findPermutationIndex(trial.tile_order);
            let chart_data = trial.tile_counts;
            chart_data[response_idx] += 1 // add participants response

            function renderPieChart(tile_data, user_choice) {
                // colours
                const defaultColour = '#bfd7ea' + "90"; // colour + alpha
                const highlightColour = '#4361ee' + "90"; // colour + alpha
            
                // Setting default colour for all bars, then changing the value user chose as different colour
                const colours = Array(6).fill(defaultColour);
                colours[user_choice] = highlightColour;
            
                // fake data for testing
                const data = {
                    datasets: [{
                        data: tile_data,
                        backgroundColor: colours,
                        hoverOffset: 4
                    }]
                };
            
                // configuration for the pie chart
                const config = {
                    type: 'pie',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            }
                        },
                        onClick: (event, elements) => {
                            if (elements.length > 0) {
                                const clickedIndex = elements[0].index;
                                rearrangeTilesAnimated(tile_permutations[clickedIndex]);
                            }
                        }
                    }
                };
            
                // render the pie chart
                const ctx = document.getElementById('pieChartCanvas').getContext('2d');
                const chart = new Chart(ctx, config);
            }

            renderPieChart(chart_data, response_idx);


            // -------------------------------- //
            // 7. submit button and data saving //
            // -------------------------------- //
        

            const end_trial = () => {
                // make sure all current sequences end
                endCurrentSequence = true;

                // stop all active audio sources
                activeAudioSources.forEach(audioNode => {
                    if (audioNode) {
                        audioNode.stop();
                    }
                });
            
                // clear the array of active audio sources
                activeAudioSources = [];
            
                // set audio is playing flag back to false
                isAudioPlaying = false;
            };

            display_element.querySelector("#jspsych-triplet-audio-sort-submit").addEventListener("click", (e) => {
                e.preventDefault();

                display_element.innerHTML = "";
                // make sure all audio is stopped playing
                end_trial();
                // next trial
                this.jsPsych.finishTrial();
            });
        }
    }
    TripletAudioSortChartPlugin.info = info;
  
    return TripletAudioSortChartPlugin;
  
  })(jsPsychModule);
  