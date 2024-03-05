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
        data: match_track_to_data(track_i.track, track_data)
    })
});

const billboard_data = billboard_tracks.map((track, i) => {
    return ({
        track: `${i + 118 + 1}`,
        stimulus: track.stimulus,
        data: match_track_to_data(`${i + 118 + 1}`, track_data)
    })
});

// merge 
const song_data = [...songs, ...billboard_data];

console.log(song_data);

// sample songs WITHOUT replacement
const song_list = jsPsych.randomization.sampleWithoutReplacement(song_data, n_trials);
// const song_list = jsPsych.randomization.sampleWithoutReplacement(song_data, 1);
// console.log(song_list);
// const song_list2 = new Array(24).fill().map(() => JSON.parse(JSON.stringify(song_list[0])));

// load billboard tracks


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

    // calculate restrictions on second probe
    exclusions = calculateExclusions(second, 1, 24);
    remainingIdx = remainingIdx.filter(idx => !exclusions.includes(idx));

    // sample third index from remaining indexes
    const third = remainingIdx[ Math.floor(Math.random() * remainingIdx.length) ];
    
    // return probes corresponding to these indexes
    return [tones[first], tones[second], tones[third]];
});

console.log(probe_list);

// combine songs and probes in `trial_list`
const trial_list = song_list.map((song, index) => {
    song.probe1 = probe_list[index][0].probe;
    song.probe2 = probe_list[index][1].probe;
    song.probe3 = probe_list[index][2].probe;
    return song 
});

// const trial_list = song_list2.map((song, index) => {
//     song.probe = probe_list[index].probe;
//     return song
// });


// const trial_list2 = jsPsych.randomization.sampleWithoutReplacement(trial_list, 1);

console.log(trial_list);

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
// let imagePreload = song_list.map((song) => { return (song.image) });


//////////////////////////////////
// 3. DEFINING TIMELINE OBJECTS //
//////////////////////////////////


/* generic welcome */
const welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Tonic prototype 2',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Next']
};

const intro_trials_block = {
    timeline: [
        {
            type: jsPsychInstructions,
            pages: [
                "This game is about understanding <b>your</b> perception of musical melodies.",
                "Melodies are made of notes.<br><br>Some notes feel like they fit in and sound stable.<br>But other notes stand out and sound tense."
            ],
            button_label_next: "Continue",
            button_label_previous: "Back",
            show_clickable_nav: true
        },
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'stimuli/intro_melodies/intro_melody.mp3',
            choices: ['q'],
            prompt: 'For example, listen to this melody',
            trial_ends_after_audio: true
        },
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'stimuli/probe_tones/probe_12.mp3',
            choices: ['q'],
            prompt: 
            '<img src="stimuli/images/robot.png"></img>',
            trial_ends_after_audio: true
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: [
                "How did that last note sound to you?"
            ],
            choices: ['Tense', 'Stable']
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: [
                "What if we changed that final note?"
            ],
            choices: ['Continue']
        },
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'stimuli/intro_melodies/intro_melody.mp3',
            choices: ['q'],
            prompt: '',
            trial_ends_after_audio: true
        },
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'stimuli/probe_tones/probe_00.mp3',
            choices: ['q'],
            prompt: 
            '<img src="stimuli/images/robot.png"></img>',
            trial_ends_after_audio: true
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: [
                "Was that any different?<br><br>How did that last note sound?"
            ],
            choices: ['Tense', 'Stable']
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: [
                "For the rest of the game, you're going to make judgements like these, but with real musical examples"
            ],
            choices: ['Continue']
        },
        {
            type: jsPsychTripletAudioSort,
            stimulus: 'stimuli/intro_melodies/Cut_1967_13__12s.mp3',
            probe1: 'stimuli/probe_tones/probe_05.mp3',
            probe2: 'stimuli/probe_tones/probe_21.mp3',
            probe3: 'stimuli/probe_tones/probe_15.mp3',
            prompt: 'Listen to the song-probe pairs and drag them into order.'
        },
        {
            type: jsPsychTripletAudioSortChart,
            stimulus: 'stimuli/intro_melodies/Cut_1967_13__12s.mp3',
            probe1: 'stimuli/probe_tones/probe_05.mp3',
            probe2: 'stimuli/probe_tones/probe_00.mp3',
            probe3: 'stimuli/probe_tones/probe_15.mp3',
            tile_order: () => { return jsPsych.data.getLastTrialData().select('response').values[0] },
            tile_counts: [13,2,4,1,2,10]
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: [
                "Ok let's do the real thing!"
            ],
            choices: ['Continue']
        },
    ]
};

const main_trials_block = {
    timeline: [
        {
            type: jsPsychTripletAudioSort,
            stimulus: jsPsych.timelineVariable('stimulus'),
            probe1: jsPsych.timelineVariable('probe1'),
            probe2: jsPsych.timelineVariable('probe2'),
            probe3: jsPsych.timelineVariable('probe3'),
            prompt: 'Listen to the song-probe pairs and drag them into order.'
        },
        {
            type: jsPsychTripletAudioSortChart,
            stimulus: jsPsych.timelineVariable('stimulus'),
            probe1: jsPsych.timelineVariable('probe1'),
            probe2: jsPsych.timelineVariable('probe2'),
            probe3: jsPsych.timelineVariable('probe3'),
            tile_order: () => { return jsPsych.data.getLastTrialData().select('response').values[0] },
            tile_counts: jsPsych.timelineVariable('data')
        }
    ],
    timeline_variables: trial_list
}

const end_page = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<div id='finalScore'></div>",
    choices: ['End'],
    on_load: () => {
        const similarityValues = jsPsych.data.get().trials.map(obj => obj.similarity).filter(value => value !== undefined);
        let similarityPercent = calculateAverage(similarityValues);
        similarityPercent = Math.round(similarityPercent);
        const scoreText = `Overall, your ratings were ${similarityPercent}% similar to other players.`;
        document.getElementById('finalScore').innerHTML = scoreText;
    }
};

const preload_trial = {
    type: jsPsychPreload,
    audio: audioPreload,
    // images: imagePreload
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