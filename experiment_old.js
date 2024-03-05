///////////////////////////
// 0. INITIALIZE JSPSYCH //
///////////////////////////


// initialise jsPsych
const jsPsych = initJsPsych({
    use_webaudio: true,
    on_data_update: () => {
        const content = document.getElementById('jspsych-content');
        content && content.focus();
    },
    on_trial_finish: () => {
        // Reset to top of page
        window.scrollTo(0, 0);
    },
    on_finish: () => {
        // ON FINISH: download the data to the local computer as a .csv file
        // Get the data
        const data = jsPsych.data.get().csv();

        // Convert data to blob
        const blob = new Blob([data], { type: 'text/csv' });

        // Create a URL for the blob
        const url = URL.createObjectURL(blob);

        // Create a link element to download the blob and append to page
        const link = document.createElement('a');
        link.href = url;

        // Downloaded .csv will be named like 'USERID_YYYY-MM-DD.csv'
        link.download = user.ID + "_" + getCurrentDate() + '.csv';
        document.body.appendChild(link);

        // Automatically 'click' the link to download data
        link.click();

        // Clean up by removing the link from page
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
});


///////////////////////////////
// 1. EXPERIMENT PARAMETERS //
///////////////////////////////


// const mobile = isMobile();
const mobile = false;

// number of trials to show each participant
const n_trials = 5;


///////////////////////////
// 2. SETTING UP STIMULI //
///////////////////////////


// load NHS discography song data
const songs = info.map((track_i) => {
    return ({
        track: track_i.track,
        stimulus: `stimuli/nhs_stimuli/TML-RAW-${track_i.track}.mp3`,
    })
});

const billboard_data = billboard_tracks.map((track, i) => {
    return ({
        track: `${i + 118 + 1}`,
        stimulus: track.stimulus,
    })
});

// merge 
const song_data = [...songs, ...billboard_data];
// sample songs WITHOUT replacement
const song_list = jsPsych.randomization.sampleWithoutReplacement(song_data, n_trials);
// load probe tones
const tones = Array(24).fill().map((_, idx) => ({ probe: `stimuli/probe_tones/probe_${idx.toString().padStart(2, '0')}.mp3` }));

// sample probe-tones, two for each 'trial', with restrictions such that within
// a trial, they can't be within 4 quarter tones
const probe_list = Array.from({ length: n_trials }).map(() => {
    // choose first index (between 0 and 23)
    const first = Math.floor(Math.random() * 24);

    // calculate remaining indexes, removing those within 4 quarter tones
    const allIdx = Array.from({ length: 24 }, (_, index) => index);
    let exclusions = calculateExclusions(first, 1, 24);
    let remainingIdx = allIdx.filter(idx => !exclusions.includes(idx));

    // sample second index from remaining indexes
    const second = remainingIdx[ Math.floor(Math.random() * remainingIdx.length) ];
    
    // return probes corresponding to these indexes
    return [tones[first], tones[second]];
});

// combine songs and probes in `trial_list`
const trial_list = song_list.map((song, index) => {
    song.probe1 = probe_list[index][0].probe;
    song.probe2 = probe_list[index][1].probe;
    return song 
});

const intro_image_trial_list = [
    // {
    //     stimulus: 'stimuli/images/intro1.jpeg',
    //     probe1: 'red',
    //     probe2: 'blue'
    // },
    {
        stimulus: 'stimuli/images/intro2.jpeg',
        tile_colours: ['#568076', '#85B2E3']
    },
    {
        stimulus: 'stimuli/images/intro3.jpeg',
        tile_colours: ['#d8ff74', '#FA5754']
    }
    // {
    //     stimulus: 'stimuli/images/intro4.jpeg',
    //     probe1: '#ffbe44',
    //     probe2: '#ec41ff'
    // }
];

const intro_trial_list1 = [
    {
        stimulus: 'stimuli/intro_melodies/Cut_1967_13__12s.mp3',
        probe1: 'stimuli/probe_tones/probe_06.mp3',
        probe2: 'stimuli/probe_tones/probe_21.mp3'
    },
    {
        stimulus: 'stimuli/billboard_stimuli/Cut_1955_16__12s.mp3',
        probe1: 'stimuli/probe_tones/probe_19.mp3',
        probe2: 'stimuli/probe_tones/probe_11.mp3'
    },
];

const intro_trial_list2 = [
    {
        stimulus: 'stimuli/nhs_stimuli/TML-RAW-061.mp3',
        probe1: 'stimuli/probe_tones/probe_08.mp3',
        probe2: 'stimuli/probe_tones/probe_12.mp3'
    },
    {
        stimulus: 'stimuli/billboard_stimuli/Cut_1979_10__12s.mp3',
        probe1: 'stimuli/probe_tones/probe_16.mp3',
        probe2: 'stimuli/probe_tones/probe_12.mp3'
    },
];

// assemble list of audio files for preloading
let audioPreload = song_list.map((song) => { return (song.stimulus) });
audioPreload = audioPreload.concat([
    tones.map((obj) => {
        for (let key in obj) {
            return obj[key];
        }
    })
]);
audioPreload = audioPreload.flat();

// assemble list of images for preloading
let imagePreload = ['stimuli/images/radio.jpg', 'stimuli/images/robot.png'];


//////////////////////////////////
// 3. DEFINING TIMELINE OBJECTS //
//////////////////////////////////


const welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p align="left">' +
        "Tonic Prototype</b>" +
        '</p><br>',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Next']
};

// I Should add a conditional thing here allowing you to skip the tutorial/intro bit if you've played the game before


const intro_trials_block = {
    timeline: [
        {
            type: jsPsychInstructions,
            pages: [
                // 1.
                "This game is about how you hear <b>musical tones</b>.",
                // 2.
                "Some tones <b>fit in</b> with a song.<br><br>This is like how the color of the blue square <b>fits in</b> with this image.<br><br>" +
                "<img src='stimuli/images/congruent_image.png' style='margin: auto; width: 40vw;'>",
                // 3. 
                "Other tones <b>don't fit in</b>: they <b>stand out</b>.<br><br>This is like how the color of the red square <b>stands out</b? from the image.<br><br>" +
                "<img src='stimuli/images/incongruent_image.png' style='margin: auto; width: 40vw;'>",
            ],
            button_label_next: "Continue",
            button_label_previous: "Back",
            show_clickable_nav: true
        },
        {
            timeline: [{
                type: jsPsychPairwiseImage2,
                stimulus: jsPsych.timelineVariable('stimulus'),
                tile_colours: jsPsych.timelineVariable('tile_colours'),
                prompt: "Which color below <b>fits in better</b> with the image?<br>(<b>Press F or J</b> to respond)"
            }],
            timeline_variables: intro_image_trial_list
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p align="left">' +
                "Great! Let's try the same idea for music</b>",
            prompt1: ' ',
            prompt2: ' ',
            choices: ['Continue']
        },
        {
            type: jsPsychPairwiseAudio2,
            stimulus: 'stimuli/billboard_stimuli/Cut_1998_10__12s.mp3',
            probe1: 'stimuli/probe_tones/probe_02.mp3',
            probe2: 'stimuli/probe_tones/probe_10.mp3',
            prompt1: 'Which tone <b>fits</b> better?<br>(<b>Press F or J</b> to respond)',
            prompt2: 'Guess the percentage of people that chose each option.',
            song_image: 'stimuli/images/radio.jpg',
            probe_image: 'stimuli/images/robot.png',
            min: -50,
            max: 50,
            step: 1,
            slider_start: 0,
            labels: [""],
            include_slider: false,
            include_clock: false,
            include_score: false
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: "Great, 78% of other plays chose that option too!<br><br>For the rest of this game, your job is to guess which tone the <b>MAJORITY</b> of other players pick.<br>" +
            "You <b style='color: green;'>get points</b> when you guess correctly, and <b style='color: red;'>lose points</b> when you guess incorrectly.<br><br>" +
            "<b>Respond as fast as you can</b> to get more points, <b>but not too fast</b>, since you will lose more points for incorrect fast responses.<br><br>" +
            "Let's do a couple warm up trials.<br><br>",
            choices: ['Continue']
        },
        {
            timeline: [
                {
                    type: jsPsychPairwiseAudio2,
                    stimulus: jsPsych.timelineVariable('stimulus'),
                    probe1: jsPsych.timelineVariable('probe1'),
                    probe2: jsPsych.timelineVariable('probe2'),
                    prompt1: 'Which tone <b>fits</b> better (to other people)?',
                    prompt2: 'Guess the percentage of people that chose each option.',
                    song_image: 'stimuli/images/radio.jpg',
                    probe_image: 'stimuli/images/robot.png',
                    min: -50,
                    max: 50,
                    step: 1,
                    slider_start: 0,
                    labels: [""],
                    include_slider: false,
                    include_score: false
                }
            ],
            timeline_variables: intro_trial_list1
        },
        // LOOP them until they reach at least 60% accuracy?
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: "One final part.<br><br>" +
                "After each guess, you make another guess about percentage of other players chose each option.<br>Unlike the first section, here, you can take your time and replay the examples as many times as you like.<br><br>" +
                "Let's do one more practise trial to make sure you're ready.<br><br>",
            choices: ['Continue']
        },
        {
            timeline: [
                {
                    type: jsPsychPairwiseAudio2,
                    stimulus: jsPsych.timelineVariable('stimulus'),
                    probe1: jsPsych.timelineVariable('probe1'),
                    probe2: jsPsych.timelineVariable('probe2'),
                    prompt1: 'Which tone <b>fits</b> better (to other people)?',
                    prompt2: 'Guess the percentage of people that chose each option.',
                    song_image: 'stimuli/images/radio.jpg',
                    probe_image: 'stimuli/images/robot.png',
                    min: -50,
                    max: 50,
                    step: 1,
                    slider_start: 0,
                    labels: [""],
                    include_score: false
                }
            ],
            timeline_variables: intro_trial_list2
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: "Let's do the real thing now!</b>",
            prompt1: ' ',
            prompt2: ' ',
            choices: ['Continue']
        },
    ]
};

const main_trials_block = {
    timeline: [
        {
            type: jsPsychPairwiseAudio2,
            stimulus: jsPsych.timelineVariable('stimulus'),
            probe1: jsPsych.timelineVariable('probe1'),
            probe2: jsPsych.timelineVariable('probe2'),
            prompt1: 'Which tone do people think fits better?',
            prompt2: 'Guess the percentage of people that chose each option.',
            song_image: 'stimuli/images/radio.jpg',
            probe_image: 'stimuli/images/robot.png',
            min: -50,
            max: 50,
            step: 1,
            slider_start: 0,
            labels: [""]
        }
    ],
    timeline_variables: trial_list
}

const end_page = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 
        "<div id='finalScoreText'></div><br>" + 
        "<canvas id='finalScoreViz' width='400' height='400' style='max-width: 40vh; max-height: 40vh; margin: auto; '></canvas>" + 
        "<br>",
    choices: ['End'],
    on_load: () => {
        const pointsTrials = jsPsych.data.get().trials.filter(trials => trials.points !== undefined);
        let total_score, average_score;
        if (pointsTrials.length > 0) {
            const pointsArray = pointsTrials.map(trials => trials.points);
            total_score = pointsArray.reduce((total, trialPoints) => total + trialPoints, 0);
            average_score = total_score / pointsArray.length;
        } 

        const percentile = Math.round(jStat.normal.cdf(average_score, 65, 10) * 100);

        let conditionalMessage;
        if (percentile > 90) {
            conditionalMessage = "This earns you the status of 'Super Guesser'! This means that.";
        } else if (percentile > 80 && percentile < 90) {
            conditionalMessage = "You are good at guessing how other people on our site perceive music.";
        } else if (percentile > 60 && percentile < 80) {
            conditionalMessage = "You are good at guessing how other people on our site perceive music, but sometimes your guesses";
        } else if (percentile < 60) {
            conditionalMessage = "ur great";
        }

        

        const scoreText = `Your average score was <b>${Math.abs(average_score)} points</b> (<b>${total_score} points</b> total)!
        <br><br>
        This means you scored better than <b>${percentile}%</b> of other players!<br>
        `;
        document.getElementById('finalScoreText').innerHTML = scoreText;

        createRightSkewedChart(65, 10, Math.abs(average_score));
    }
};

const preload_trial = {
    type: jsPsychPreload,
    audio: audioPreload,
    images: imagePreload
}


////////////////////////////
// 4. ASSEMBLING TIMELINE //
////////////////////////////


const timeline = [
    welcome,
    preload_trial,
    intro_trials_block,
    main_trials_block,
    end_page
];


///////////////////////
// 5. RUN EXPERIMENT //
///////////////////////


jsPsych.run(timeline);