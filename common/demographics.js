// ==== Basic Demographics ====
var gender = {
  type: 'html-button-response-vert',
  stimulus: 'What is your gender?',
  prompt: ' ',
  choices: ['Male', 'Female', 'Other'],
  data: {trialName: 'gender'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
}
var age = {
  type: 'survey-text-number',
  questions: [{ prompt: 'How old are you?' }],
  data: {trialName: 'age'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
}
var countryList = ['United States', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Artsakh', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Democratic Republic of the Congo', 'Cook Islands', 'Costa Rica', 'Côte d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'South Korea', 'Democratic People\'s Republic of Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Kingdom of the Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Northern Cyprus', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Sahrawi Arab Democratic Republic', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'Somaliland', 'South Africa', 'South Ossetia', 'Spain', 'Sri Lanka', 'Sudan', 'South Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Transnistria', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']
var languageList = ['English', 'Abenaki', 'Abkhaz', 'Adyghe', 'Afrikaans', 'Ainu', 'Aklanon', 'Alabama', 'Albanian', 'Algerian', 'American Sign Language', 'Apache', 'Arabic', 'Aragonese', 'Aramaic', 'Armenian', 'Avestan', 'Ayapathu', 'Aymara', 'Azeri', 'Balinese', 'Bamwe', 'Bantu', 'Basa', 'Basque', 'Belarusian', 'Bemba', 'Bengali', 'Berber', 'Betawi', 'Bicol', 'Bisaya', 'Bobangi', 'Bosnian', 'Brahui', 'Breton', 'Butuanon', 'Bukusu', 'Bulgarian', 'Burmese', 'Carib', 'Catalan', 'Catawba', 'Cayuga', 'Cebuano', 'Chamorro', 'Chechen', 'Cherokee', 'Chewa', 'Cheyenne', 'Chickasaw', 'Chinese/Cantonese/Yue', 'Chinese/Danzhou', 'Chinese/Gan', 'Chinese/Hakka', 'Chinese/Hokkien', 'Chinese/Mandarin', 'Chinese/Min Bei', 'Chinese/Min Dong', 'Chinese/Min Zhong', 'Chinese/Pu Xian', 'Chinese/Qiong Wen', 'Chinese/Shao Jiang', 'Chinese/Shaozhou Tuhua', 'Chinese/Taiwanese/Min Nan/Hokkien', 'Chinese/Wu/Shanghainese', 'Chinese/Xiang/Hunanese', 'Chinese/Xianghua', 'Chinese/Yue', 'Chinook', 'Ch\'ol', 'Chorti', 'Cispa', 'Coptic', 'Cornish', 'Corsican', 'Cree', 'Creole', 'Croatian', 'Czech', 'Danish', 'Delaware', 'Demonh\'ka', 'Denya', 'Duma', 'Dutch', 'Eggon', 'Ejagham', 'Ekegusii', 'Emakua', 'Eskimo', 'Esperanto', 'Estonian', 'Ewe', 'Fang', 'Faroese', 'Farsi', 'Finnish', 'Flemish', 'Frankish', 'French', 'Frisian', 'Fulfulde', 'Gaelic', 'Galician', 'Gaulish', 'Gamilaraay', 'Ganda', 'Gbari', 'Georgian', 'German', 'Gevove', 'Gilbertese', 'Ginyama', 'Gothic', 'Greek', 'Guarani', 'Gujarati', 'Gullah', 'Haida', 'Hakka', 'Hawaiian', 'Hausa', 'Hiligaynon', 'Hebrew', 'Hmong', 'Hindi', 'Hittite', 'Holoholo', 'Hungarian', 'Icelandic', 'Igbo', 'Ilongo', 'Indonesian', 'Ingush', 'Interlingua', 'Inuktitut', 'Inzebi', 'Irish', 'Ishkashmi', 'Italian', 'Jangshung', 'Japanese', 'Jita', 'Kalanga', 'Kannada', 'Kapampangan', 'Karelian', 'Kamviri', 'Karuk', 'Kashubian', 'Katcha', 'Kazakh', 'Kerewe', 'Khakas', 'Khmer', 'Khowar', 'Kiga', 'Kinyarwanda', 'Kituba', 'Klallam', 'Konkani', 'Korean', 'Koromfé', 'Koyo', 'Kurdish', 'Kyrgyz', 'Lao', 'Lakhota', 'Latgalian', 'Latin', 'Latvian', 'Lingala', 'Lithuanian', 'Livonian', 'Lojban', 'Lozi', 'Luxembourgish', 'Luwian', 'Lydian', 'Macedonian', 'Malagasy', 'Malay', 'Maliseet', 'Malayalam', 'Maltese', 'Mambwe', 'Manchu', 'Mandinka', 'Manx', 'Maori', 'Mapudungun', 'Marathi', 'Masaba', 'Mayan', 'Mayangna', 'Mawu', 'Miami', 'Michif', 'Miskitu', 'Mixtec', 'Mohawk', 'Mongolian', 'Mpongwe', 'Nahuatl', 'Nande', 'Nanticoke', 'Nauruan', 'Navajo', 'Ndebele', 'Nepalese', 'Newari', 'Nhirrpi', 'Norwegian', 'Nyambo', 'Nyamwezi', 'Occitan', 'Ojibwe', 'Olkola', 'Olutec', 'Onondaga', 'Oriya', 'Oscan', 'Oykangand', 'Pahlavi', 'Pakahn', 'Pali', 'Papiamento', 'Pashto', 'Pende', 'Passamdy', 'Phrygian', 'Pirahã', 'Polish', 'Popoluca', 'Portuguese', 'Potawatomi', 'Pulaar', 'Punjabi', 'Quechua', 'Quenya', 'Rapa Nui', 'Rasta', 'Rejang', 'Romani', 'Romanian', 'Roviana', 'Rotuman', 'Russian', 'Saanich', 'Saami', 'Samoan', 'Sanskrit', 'Sardinian', 'Scots', 'Serbian', 'Seri', 'Sherpa', 'Shi', 'Sina Bidoyoh', 'Shona', 'Shoshoni', 'Sindarin', 'Sinhalese', 'Slovak', 'Slovene', 'Sogdian', 'Somali', 'Sorbian', 'Spanish', 'Sranan', 'Sûdovian', 'Sumerian', 'Swabian', 'Swahili', 'Swedish', 'Swiss German', 'Tagalog', 'Tamasheq', 'Tahitian', 'Taino', 'Tajik', 'Tamazight', 'Tamil', 'Tarahumara', 'Tarok', 'Tatar', 'Telugu', 'Tetan', 'Thai', 'Tibetan', 'Tlingit', 'Tocharian', 'Tongan', 'Turkish', 'Turkmen', 'Twi', 'Ukrainian', 'Ulwa', 'Umbrian', 'Üqoi', 'Urdu', 'Uyghur', 'Uzbek', 'Venda', 'Veps', 'Vietnamese', 'Votic', 'Wagiman', 'Walloon', 'Warlpiri', 'Welsh', 'Wolof', 'Wyandot', 'Xhosa', 'Yaka', 'Yao', 'Yemba', 'Yiddish', 'Yoruba', 'Zarma', 'Zoque', 'Zulu', 'Other']
var country = {
  type: 'survey-text-dropdown',
  alert: 'Please select your country from the dropdown menu.',
  questions: [
    {
      prompt: 'What country do you live in?',
      choices: countryList
    }
  ],
  data: {trialName: 'country'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
}
var language = {
  type: 'survey-text-dropdown',
  alert: 'Please select your language from the dropdown menu.',
  questions: [
    {
      prompt: 'What is your native language?',
      choices: languageList
    }
  ],
  data: {trialName: 'language'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
}
var hearingImpairment = {
  type: 'html-button-response-vert',
  stimulus: 'Do you have a hearing impairment?',
  prompt: ' ',
  choices: ['Yes', 'No'],
  data: {trialName: 'hearingImp'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
}

// ==== Advanced Demographics ====
var takenBefore = {
  type: 'html-button-response-vert',
  stimulus: "<p>Have you taken this quiz before?<br><p>(It\'s OK if you have!)</p>",
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Yes', 'No'],
  data: {trialName: 'takenBefore'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

var education = {
  type: 'survey-text-dropdown',
  alert: 'Please select from the dropdown menu.',
  questions: [
    {
      prompt: 'What is your highest level of education?',
      choices: ['Graduate degree', 'Some graduate school', 'Undergraduate degree (3-5 years)', 'Some undergrad (higher ed)', 'High school degree (12-13 years)', 'Haven\'t finished high school']
    }
  ],
  data: {trialName: 'education'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

var musicTime = {
  type: 'html-button-response-vert',
  stimulus:
    'On an average day, how much time do you spend listening to music and/or watching videos that include music?',
  prompt1: ' ',
  prompt2: ' ',
  choices: [
    'No time at all',
    '1-5 minutes',
    '6-10 minutes',
    '11-15 minutes',
    '16-30 minutes',
    '31-60 minutes',
    '1-2 hours',
    '2-4 hours',
    'More than 4 hours'
  ],
  data: {trialName: 'musicTime'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

var musicSkill = {
  type: 'html-button-response-vert',
  stimulus:
    'Think of your skill at performing music (using a musical instrument or using your singing voice). How would you rate your own skill?',
  prompt1: ' ',
  prompt2: ' ',
  choices: [
    'I have no skill at all',
    "I'm a novice",
    'I have some skill',
    'I have a lot of skill',
    "I'm an expert"
  ],
  data: {trialName: 'musicSkill'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

var musicPSing = {
  type: 'html-button-response-vert',
  stimulus: 'When you were little, how often did your parent sing to you?',
  prompt1: ' ',
  prompt2: ' ',
  choices: [
    'Once every 3 days or less',
    'Once every day or two',
    '2-3 times a day',
    '4-7 times a day',
    '8 or more times a day'
  ],
  data: {trialName: 'musicPSing'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

var musicFeel = {
  type: 'html-button-response-vert',
  stimulus: 'Have you ever experienced \"chills\" or \"goosebumps\" in response to music?',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['No, never', 'I’m not sure', 'Yes, but rarely', 'Yes, sometimes', 'Yes, often'],
  data: {trialName: 'musicFeel'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

var demographics = {
  timeline: [
    {
      type: 'html-button-response-vert',
      stimulus: 'How would you describe your race?',
      prompt1: ' ',
      prompt2: ' ',
      choices: [
        'American Indian/Alaska Native',
        'Asian',
        'Native Hawaiian or other Pacific Islander',
        'Black or African American',
        'White',
        'More than one race',
        'Prefer not to say'
      ],
      data: {trialName: 'race'},
      on_finish: function(data) {
        api.saveDataOnFinish(data);
      }
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'Are you <b>Hispanic or Latino?</b>',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Yes', 'No', 'Prefer not to say'],
      data: {trialName: 'latino'},
      on_finish: function(data) {
        api.saveDataOnFinish(data);
      }
    }
  ]
};

var liveUSConditional = {
  timeline: [demographics],
  conditional_function: function(data) {
    var button = jsPsych.data.get().filter({trial_type: 'survey-text-dropdown'}).values()[0].responses;
    console.log(button);
    if (button == '{"Q0 - What country do you live in?":"name: United States"}') {
      return true;
    } else {
      return false;
    }
  }
};

var emailFollowup = {
  type: 'survey-text',
  questions: [
    {
      prompt:
        'Would you like to participate in a follow-up study in the future? If so, please provide us with your email address. We will contact you directly when a new study is available.<br><br>This is optional: if you do not want to provide an email address, just leave this field blank.'
    }
  ],
  data: {trialName: 'emailFollowup'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

var feedback = {
  type: 'survey-text-longer',
  questions: [
    {
      prompt:
        '<p>Do you have any feedback about your experience playing this game? We are currently in beta testing and we will use any information you provide here to improve the site.</p><p>This is optional.</p>'
    }
  ],
  data: {trialName: 'feedback'},
  on_finish: function(data) {
    api.saveDataOnFinish(data);
  }
};

// ==== Combination to Timelines and Export ====
var intro = {
  timeline: [
    gender,
    age,
    takenBefore,
    country,
    language,
    hearingImpairment,
  ]
};

var musicXP = {
  timeline: [
    musicTime,
    musicSkill,
    musicPSing,
    musicFeel,
  ]
};

var demographics = {
  timeline: [
    education,
    liveUSConditional,
  ]
};

var emailAndFeedback = {
  timeline: [
    emailFollowup,
    feedback
  ]
};

export {
  // Combined
  intro,
  musicXP,
  demographics,
  emailAndFeedback,

  gender,
  age,
  takenBefore,
  country,
  language,
  hearingImpairment,

  musicTime,
  musicSkill,
  musicPSing,
  musicFeel,

  education,
  liveUSConditional,

  emailFollowup,
  feedback,
}
