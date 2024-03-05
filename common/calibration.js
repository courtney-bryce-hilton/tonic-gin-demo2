var noise = {
  timeline: [
    {
      type: 'html-button-response',
      stimulus: "First, we'll play you a calibration tone.<p>Listen to the tone and turn up the volume on your computer until the calibration tone is at a <b>loud but comfortable level</b>.</p>",
      on_finish: api.saveDataOnFinish,
      choices: ['Next']
    },
    {
      type: 'audio-button-response-loop',
      stimulus: `${baseUrl}audio/mario.mp3`,
      prompt:
        '<p>Click the continue button when you are done calibrating your sound volume.</p>',
      choices: ['Continue'],
      response_ends_trial: true,
      on_finish: api.saveDataOnFinish
    }
  ]
};
var headphone = {
  timeline: [
    {
      type: 'html-button-response',
      stimulus: '<p>Are you wearing headphones?</p>',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Yes', 'No']
    }
  ]
};
var headphoneIntro = {
    type: 'html-button-response',
    stimulus: 'In this section, we will play you some tones and ask you questions about them. This helps us to calibrate the tone-deafness test for your computer and your headphones.<p>After you click "Continue", you will hear three tones.<p>We will ask you which one was the QUIETEST/SOFTEST.<p>The tones will only be played once, so listen carefully!',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Continue']
};
var headphoneStim = [
  {stimulus: 'audio/antiphase_HC_IOS.mp3', correct: 3},
  {stimulus: 'audio/antiphase_HC_ISO.mp3', correct: 2},
  {stimulus: 'audio/antiphase_HC_OIS.mp3', correct: 3},
  {stimulus: 'audio/antiphase_HC_OSI.mp3', correct: 2},
  {stimulus: 'audio/antiphase_HC_SIO.mp3', correct: 1},
  {stimulus: 'audio/antiphase_HC_SOI.mp3', correct: 1}
];
var headphoneCheck = {
   timeline: [
     {
       type: 'audio-keyboard-response',
       stimulus: jsPsych.timelineVariable('stimulus'),
       prompt: '<p>Listen...</p>',
       trial_ends_after_audio: true,
       response_ends_trial: false,
      },
      {
       type: 'html-keyboard-response',
       stimulus: 'Which tone was the QUIESTEST/SOFTEST?<p>Use your keyboard to respond.<p>Press <b>1</b>, <b>2</b>, or <b>3</b> to indicate which tone was the QUIETEST/SOFTEST.',
       choices: ['1', '2','3']
     }
   ],
   timeline_variables: headphoneStim,
   sample: {
     size: 6,
     type: 'without-replacement'
   }
 };
var headphoneConditional = {
 timeline: [headphoneIntro, headphoneCheck],
 conditional_function: function(data){
   var button = jsPsych.data.get().last(1).values()[0].button_pressed;
   console.log(button);
   if(button == 0){
     return true;
   } else if(button == 1){return false}
 }
};

var timeline = { timeline: [noise, headphone, headphoneConditional] };

export default timeline
