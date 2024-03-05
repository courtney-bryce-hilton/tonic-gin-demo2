const jsPsychTripletAudioSort = (function (jspsych) {
    'use strict';
  
    const info = {
        name: "triplet-audio-sort",
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
            prompt: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Prompt",
                default: null,
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
                default: "Submit",
            }
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
    class TripletAudioSortPlugin {
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
            // set the colours of the tiles
            html += `#tile1 { background-color: ${trial.tile_colours[0]}; }`;
            html += `#tile2 { background-color: ${trial.tile_colours[1]}; }`;
            html += `#tile3 { background-color: ${trial.tile_colours[2]}; }`;
            // close CSS
            html += "</style>";


            // ----------------------- //
            // 2. construct basic HTML //
            // ----------------------- //


            // show preamble text
            if (trial.prompt !== null) {
                html +=
                    '<div id="jspsych-triplet-audio-sort-preamble" class="jspsych-triplet-audio-sort-preamble">' +
                    trial.prompt + 
                    '</div>' + 
                    '<br>';
            }

            // add a container for all the tiles plus the annotations
            html += '<div id="jspsych-triplet-audio-bigContainer">';

            // add a container for all the tiles
            html += '<div id="jspsych-triplet-audio-container">';
        
            // add tiles for each audio example
            for (let scale = 0; scale < 3; scale++) {
                html += '<div class="jspsych-tile-container" draggable="true">';
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

            html += '<br><br>';
        
            // add submit button
            html += `<button type="button" id="jspsych-triplet-audio-sort-submit" class="jspsych-btn">${trial.button_label}</button>`;
        
            display_element.innerHTML = html;

            // disable submit button (until all trials have been played at least once)
            document.querySelector("#jspsych-triplet-audio-sort-submit").disabled = true;

            // make sure all opacities are normal
            document.querySelectorAll('.jspsych-audio-tile').forEach((tile) => {
                tile.style.opacity = '1';
            });


            // ----------------------- //
            // 3. make tiles draggable //
            // ----------------------- //


            let dragged;

            document.querySelectorAll('.jspsych-tile-container').forEach((container) => {
                container.addEventListener('dragstart', (e) => {
                    dragged = container;
                    e.target.style.opacity = 0.5;
                });

                container.addEventListener('dragend', (e) => {
                    e.target.style.opacity = "";
                });
            });

            document.querySelector('#jspsych-triplet-audio-container').addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            document.querySelector('#jspsych-triplet-audio-container').addEventListener('drop', (e) => {
                e.preventDefault();
                if (e.target.closest('.jspsych-tile-container')) {
                    let targetContainer = e.target.closest('.jspsych-tile-container');
                    if (dragged !== targetContainer) {
                        let allContainers = Array.from(document.querySelectorAll('.jspsych-tile-container'));
                        let draggedIndex = allContainers.indexOf(dragged);
                        let targetIndex = allContainers.indexOf(targetContainer);

                        if (draggedIndex > targetIndex) {
                            targetContainer.before(dragged);
                        } else {
                            targetContainer.after(dragged);
                        }
                    }
                }
            });


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
            
            async function firstPlayThrough(melody_context, probe_context, trial, this_) {
                isAudioPlaying = true;
                await playSequence(melody_context, probe_context, trial, this_, trial.probe1, 1, [2,3]);
                await playSequence(melody_context, probe_context, trial, this_, trial.probe2, 2, [1,3]);
                await playSequence(melody_context, probe_context, trial, this_, trial.probe3, 3, [1,2]);
                isAudioPlaying = false;
                // enable submit button
                document.querySelector("#jspsych-triplet-audio-sort-submit").disabled = false;
            }
            
            async function handleReplay(melody_context, probe_context, trial, this_, probe, active_tile, other_tiles) {
                if (!isAudioPlaying) {
                    isAudioPlaying = true;
                    await playSequence(melody_context, probe_context, trial, this_, probe, active_tile, other_tiles);
                    isAudioPlaying = false;
                }
            }


            // --------------------------- //
            // 5. play melodies and probes //
            // --------------------------- //


            const melody_context = this.jsPsych.pluginAPI.audioContext();
            const probe_context = this.jsPsych.pluginAPI.audioContext();
            let isAudioPlaying = false;
            
            firstPlayThrough(melody_context, probe_context, trial, this);


            // --------------------------- //
            // 6. allow replay of examples //
            // --------------------------- //
            

            display_element.querySelector("#replay-audio-btn1").addEventListener("click", () => {
                handleReplay(melody_context, probe_context, trial, this, trial.probe1, 1, [2,3]);
            });
            
            display_element.querySelector("#replay-audio-btn2").addEventListener("click", () => {
                handleReplay(melody_context, probe_context, trial, this, trial.probe2, 2, [1,3]);
            });
            
            display_element.querySelector("#replay-audio-btn3").addEventListener("click", () => {
                handleReplay(melody_context, probe_context, trial, this, trial.probe3, 3, [1,2]);
            });
            

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
                // measure response time
                const endTime = performance.now();
                const response_time = Math.round(endTime - startTime);

                const allTiles = Array.from(document.querySelectorAll('.jspsych-tile-container'));
                const response_order = allTiles.map((container) => {
                    return container.querySelector('div').id
                });

                // save data
                const trial_data = {
                    rt: response_time,
                    response: response_order,
                    probes: {probe1: trial.probe1, probe2: trial.probe2, probe3: trial.probe3},
                    stimuli: trial.stimulus
                };
                display_element.innerHTML = "";
                // make sure all audio is stopped playing
                end_trial();
                // next trial
                this.jsPsych.finishTrial(trial_data);
            });
        
            let startTime = performance.now();
        }
    }
    TripletAudioSortPlugin.info = info;
  
    return TripletAudioSortPlugin;
  
  })(jsPsychModule);
  