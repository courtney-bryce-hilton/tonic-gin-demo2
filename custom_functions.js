// function to calculate the average rating given a vector of responses to each of 5 options on likert scale
function calculateWeightedAverage(ratings) {
    let totalWeightedRating = 0;
    let totalResponses = 0;

    ratings.forEach((count, index) => {
        let rating = index + 1;
        totalWeightedRating += rating * count;
        totalResponses += count;
    });

    return totalWeightedRating / totalResponses;
}

function renderChart(chartData, user_choice) {
    // ---------------- //
    // Chart parameters //
    // ---------------- //
    const ctx = document.getElementById('barChartCanvas').getContext('2d');
    const defaultColour = '#2a9d8f' + "90"; // colour + alpha
    const highlightColour = '#f4a261' + "90"; // colour + alpha

    // Setting default colour for all bars, then changing the value user chose as different colour
    const backgroundColours = Array(5).fill(defaultColour);
    backgroundColours[user_choice] = highlightColour;

    // add 1 to the chosen rating
    chartData[user_choice] += 1

    // Calculate the maximum y value
    const actualMaxValue = Math.max(...chartData);

    // Set the extended max value (actual max + 2) for the y-axis
    const extendedMaxValue = actualMaxValue + 2;

    // Calculate step size for y-axis ticks
    let stepSize;
    if (extendedMaxValue <= 5) {
        stepSize = 1; // Set step size to 1 for max value of 5 or less
    } else {
        // Calculate a suitable step size for y-axis ticks for larger values
        const numTicks = 5; 
        stepSize = Math.ceil(extendedMaxValue / numTicks);
    }

    // Calculate the weighted average (minus 1 because zero indexing of x-axis)
    const weightedAverage = calculateWeightedAverage(chartData) - 1;

    // ------------ //
    // Create chart //
    // ------------ //

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                data: chartData,
                backgroundColor: backgroundColours,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { 
                    beginAtZero: true,
                    max: extendedMaxValue,
                    ticks: {
                        stepSize: stepSize,
                        callback: (value) => {
                            // Hide the last tick if it's equal to the extended maximum
                            if (value === extendedMaxValue) {
                                return null;
                            }
                            return value;
                        }
                    }
                },
                x: { 
                    grid: {
                        display: false // Hide the vertical gridlines
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Disable the default legend
                },
                tooltip: {
                    enabled: true
                },
                // Add annotation plugin configuration
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            xMin: weightedAverage,
                            xMax: weightedAverage,
                            borderColor: 'red',
                            borderWidth: 2
                        }
                    }
                }                                                          
            }
        },
        plugins: [{
            id: 'annotationPlugin',
            afterDraw: (chart) => {
                const ctx = chart.ctx;
                ctx.save();
                const dataset = chart.data.datasets[0];
                const meta = chart.getDatasetMeta(0);
                const x = meta.data[user_choice].x;
                const y = meta.data[user_choice].y;
                ctx.fillStyle = 'black';
                ctx.font = '16px Arial'; 
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom'; // Align text vertically relative to the point
                ctx.fillText('Your rating!', x, y - 10); // Position the text 10 pixels above the top of the 4th bar
                ctx.restore();
            }
        },
        {
            id: 'meanLabelPlugin',
            afterDraw: (chart) => {
                const ctx = chart.ctx;
                ctx.save();
                ctx.font = '12px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle'; // Center the text vertically
                const xAxis = chart.scales.x;
                const yAxis = chart.scales.y;
                const yPosition = yAxis.getPixelForValue(actualMaxValue * 0.75); // adjust the y-position
                ctx.fillText('Average: ' + (weightedAverage + 1).toFixed(2), xAxis.getPixelForValue(weightedAverage + 0.4), yPosition);
                ctx.restore();
            }
        }]
    });

    // ---------------------------------------------- //
    // Adding text annotation at the top of the chart //
    // ---------------------------------------------- //
    const ratingElement = document.getElementById('ratingPercent');
    let similarityPercent = calculate_similarity(user_choice + 1, chartData)
    similarityPercent = Math.round(similarityPercent);
    ratingElement.innerHTML = `<p>Your rating was ${similarityPercent}% similar to the average rating.</p>`;
}

// function to match meta-data on the basis of the NHS track number
function match_track_to_data(track_num, track_data) {
    for (const tracki of track_data) {
        if (tracki.track[0] === track_num) {
            return tracki.data;
        }
    }
    return null;
}

// function to calculate the 'rating similarity score'
function calculate_similarity(participant_rating, all_ratings) {
    // 1. calculate average rating for track and probe tone
    const rating_avg = calculateWeightedAverage(all_ratings);

    // 2. calculate absolute difference between participant and average
    const diff_abs = Math.abs(participant_rating - rating_avg);

    // 3. calculate normalised difference
    const diff_norm = diff_abs / (all_ratings.length - 1);

    // 4. return similarity percentage
    const similarity = (1 - diff_norm) * 100;
    return similarity;
}

// function to calculate `the average from an array of numeric values`
function calculateAverage(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
}

// function to calculate `n` numbers either side of a 'centre' number in circular set of numbers
function calculateExclusions(centre, n, range) {
    let numbers = [];

    // falculate n numbers before the centre
    for (let i = 1; i <= n; i++) {
        let num = centre - i;
        if (num < 0) {
            num += range;
        }
        numbers.unshift(num); // add to the beginning of the array
    }

    // add the centre number
    numbers.push(centre);

    // calculate n numbers after the centre
    for (let i = 1; i <= n; i++) {
        let num = centre + i;
        if (num >= range) {
            num -= range;
        }
        numbers.push(num); // add to the end of the array
    }

    return numbers;
}

function renderPieChart() {
    const user_choice = 0;
    // colours
    const defaultColour = '#bfd7ea' + "90"; // colour + alpha
    const highlightColour = '#4361ee' + "90"; // colour + alpha

    // Setting default colour for all bars, then changing the value user chose as different colour
    const colours = Array(4).fill(defaultColour);
    colours[user_choice] = highlightColour;

    // fake data for testing
    const data = {
        labels: ['Your guess', 'option 2', 'option 3', 'option 4'],
        datasets: [{
            data: [60, 20, 14, 6],
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
            }
        }
    };

    // render the pie chart
    const ctx = document.getElementById('pieChartCanvas').getContext('2d');
    const chart = new Chart(ctx, config);
}


function generateNormalData(mean, standardDeviation) {
    const data = [];
    for(let x = 0; x <= 100; x += 1) {
        const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(standardDeviation, 2));
        const y = (1 / (standardDeviation * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
        data.push({x: x, y: y});
    }
    return data;
}


function adjustForSkewness(data) {
    return data.map(item => ({
        x: item.x,
        y: Math.pow(item.y, 1 - (item.x / 200))

    }));
}

function createRightSkewedChart(mean, standardDeviation, verticalLineX) {
    const ctx = document.getElementById('finalScoreViz').getContext('2d');
    const skewedData = adjustForSkewness(generateNormalData(mean, standardDeviation));

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 101}, (_, i) => i), 
            datasets: [{
                data: skewedData.map(point => point.y),
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgb(75, 192, 192, 0)',
                tension: 0.1,
                pointRadius: 0
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Average Score'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                }
            }
        },
        plugins: [{
            id: 'annotationPlugin',
            afterDraw: (chart) => {
                const ctx = chart.ctx;
                ctx.save();
                const xAxis = chart.scales.x;
                const yAxis = chart.scales.y;
                const x = xAxis.getPixelForValue(verticalLineX); // convert the specific x-value to canvas coordinates
                const yTop = yAxis.top;
                const yBottom = yAxis.bottom;
                
                // draw the vertical line annotation
                ctx.beginPath();
                ctx.moveTo(x, yTop);
                ctx.lineTo(x, yBottom);
                ctx.strokeStyle = 'red'; 
                ctx.lineWidth = 2; 
                ctx.stroke();
        
                // draw the text annotation 
                ctx.fillStyle = 'black';
                ctx.font = '1em Arial';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';

                const text = 'Your score';
                const metrics = ctx.measureText(text);
                const textWidth = metrics.width;

                ctx.fillText(text, x - (textWidth + 10), yTop + 60);
        
                ctx.restore();
            }
        }]
        
    });
}



// 




