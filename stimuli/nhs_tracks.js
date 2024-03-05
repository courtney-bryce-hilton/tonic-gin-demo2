const info = [
    {
      track: '001',
      valence: 0.3418,
      arousal: 0.2531,
      pleasentness: 0.3565,
      latitude: -16.52,
      longitude: 139.41,
      blurb:
        "<b>This song is a lullaby of the Lardil people from Mornington Island in Queensland, Australia.</b> As with many songs in Australian Aboriginal culture, women's songs such as this one are sung as Lardil charms. This particular lullaby, or lagalan, is a charm to induce sleep. The longer duration and repeated sequences of syllables in the song suggest a close musical relationship with desert songs, which are typically found south of Mornington Island.",
      citation:
        'This song is called "Lullaby," and is Track 4 on a CD called "Songs from North Queensland." This CD was published in 2013 by the Australian Institute of Aboriginal Studies in Canberra, Australia.',
      type: 'lullaby'
    },
    {
      track: '002',
      valence: 0.4,
      arousal: 0.3505,
      pleasentness: 0.3951,
      latitude: -3.90,
      longitude: 141.19,
      blurb:
        '<b>This is a healing song performed by a member of the Anggor people of Papua New Guinea.</b> The Anggor people reside in several distinct villages in the northwesternmost province of the country. Like the songs of many other villages across Papua New Guinea, the songs of the Anggor people often feature full, rich sounds and accompaniment by vibrant and complex drumming patterns.',
      citation:
        'This song is called "Healing Song," and is Track 9 on a CD called "Songs & Dances from Papua New Guinea." This CD was published in 2001 by Topic Records in London.',
      type: 'healing'
    },
    {
      track: '003',
      valence: 0.419,
      arousal: 0.4308,
      pleasentness: 0.4464,
      latitude: 48.56,
      longitude: -113.01,
      blurb:
        "<b>This song is a lullaby performed by Calvin Boy of the Blackfoot tribe from the North American Great Plains.</b> The lullaby was recorded in Calvin Boy's home in Browning, Montana in 1966. In most American Indian tribes, including the Blackfoot, lullabies have no words and are sung to small children.",
      citation:
        'This song is called "Lullaby," and is Track 9 on a CD called "An Historical Album of Blackfoot Indian Music." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'lullaby'
    },
    {
      track: '004',
      valence: 0.6753,
      arousal: 0.672,
      pleasentness: 0.5405,
      latitude: 27.31,
      longitude: 79.04,
      blurb:
        '<b>This is a healing song sung by a resident of Karimanj, a village in the state of Uttar Pradesh in Northern India.</b> This song accompanies a snake-bite curing ritual called Dank, but is also used to cure other illnesses or to induce bodily possession by the "oracle of the snake king."',
      citation:
        'This song is called "Untitled Karimganj healing track," and is an unpublished recording acquired in 1994 by Susan Wadley.',
      type: 'healing'
    },
    {
      track: '005',
      valence: 0.6609,
      arousal: 0.5457,
      pleasentness: 0.6647,
      latitude: 5.28,
      longitude: -76.83,
      blurb:
        "<b>This is a dance song originating from the Emberá people who live along the riverbanks of Panama and Colombia.</b> The Emberá's riverine culture is often reflected in the lyrical content of their music.",
      citation:
        'This song is called "Wadana dances," and is Track 2 on an LP called "The Music of Some Indian Tribes of Colombia." This LP was published in 1972 by British Institute of Recorded Sound in London.',
      type: 'dancing'
    },
    {
      track: '006',
      valence: 0.7881,
      arousal: 0.6985,
      pleasentness: 0.6877,
      latitude: 6.39,
      longitude: -4.42,
      blurb:
        "<b>This is a healing song of the Baoulé, a subgroup of the Akan people and one of the largest groups in Côte d'Ivoire.</b> Due to migration and cultural exchange within Africa, geographically distant cultures often share similar musical styles. Baoulé music frequently features a multipart singing style in triads that closely mirrors those of the Ngangela, Chokwe, and Luvale peoples who reside several countries away.",
      citation:
        'This song is called "Drumming and singing for a medicine-man\'s dance," and is Track 6 on an LP called "Baoulé Côte d\'Ivoire." This LP was published between 1946-1952 by Africavox in Paris.',
      type: 'healing'
    },
    {
      track: '007',
      valence: 0.7935,
      arousal: 0.6882,
      pleasentness: 0.7969,
      latitude: -25.29,
      longitude: -57.61,
      blurb:
        '<b>This is a love song of the Guaraní people who are native to Paraguay, Bolivia, Argentina, and Brazil.</b> Today, Guaraní music tends to be intertwined with Spanish influences, often featuring Spanish guitar and lyrics that contain words in Spanish and Paraguayan Guaraní languages.',
      citation:
        'This song is called "Musiqueada jazmin guype," and is Side 1, Track 3 on an LP called "Les Quatre Guaranis Chant, Guitares et Harpe Indienne." This LP was published in 1953 by Éditions de la Boite à Musique in Paris.',
      type: 'love'
    },
    {
      track: '008',
      valence: 0.7628,
      arousal: 0.7387,
      pleasentness: 0.7333,
      latitude: 16.00,
      longitude: -88.92,
      blurb:
        "<b>This is a love song of the Garifuna, a Central American people who are indigenous mixed-race descendants of West Africa, Central Africa, The Island Carib, Europe, and South America.</b> This song is a paranda, which is similar to a serenade and is typically composed by men. The lyrics of this song roughly translate to, \"Sister, don't you know that it's because I love you that I'm with you. Beulah, take me and throw me on Barrio side so I can find the way to our house. My shirt is here; my pants are here. You are my partner. I'll be buried here.\"",
      citation:
        'This song is called "Paranda," and is Track 7 on a CD called "Traditional Music of the Garifuna (Black Carib) of Belize." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'love'
    },
    {
      track: '009',
      valence: 0.474,
      arousal: 0.4409,
      pleasentness: 0.641,
      latitude: 17.72,
      longitude: -100.07,
      blurb:
        '<b>This is a lullaby of the Nahuas people, an indigenous group originating in central Mexico and El Salvador.</b> This song is one of many Nahuatl songs collected by ethnomusicologist and anthropologist Joseph Raúl Hellmer while researching indigenous and traditional Mexican mestizo music.',
      citation:
        'This song is called "Canción de cuna," and is Track 1 on a CD called "In Xóchitl in cuícatl." This CD was published in 1980 by the Instituto Nacional De Antropologia E Historia in Mexico City.',
      type: 'lullaby'
    },
    {
      track: '010',
      valence: 0.458,
      arousal: 0.3778,
      pleasentness: 0.4846,
      latitude: 54.00,
      longitude: -125.00,
      blurb:
        '<b>This is a love song of the Kwakwaka\'wakw people who reside on the Pacific Northwest Coast of North America.</b> This love song was originally sung by a man named Mungo Martin for his wife. The song features a complicated and repetitive melody line. Part of the lyrics of this love song roughly translate to, "I wish I could be used as a pillow for the one I love, I wish I could be tucked under the pillow."',
      citation:
        'This song is called "Love song," and is Side 4, Track 1 on an LP called "Indian Music of the Pacific Northwest Coast." This LP was published in 1967 by Folkways Records in New York.',
      type: 'love'
    },
    {
      track: '011',
      valence: 0.5471,
      arousal: 0.4718,
      pleasentness: 0.6474,
      latitude: 7.38,
      longitude: 143.91,
      blurb:
        '<b>This is a healing song of the Yapese people native to the Micronesian island of Yap.</b> This song features dulcet tones, which divide into two parts to rise and sharpen in pitch. This particular recording was captured by a field researcher who encountered a group of ladies on their way to sing hymns at St. Ignatius Catholic Church during Lent, and later recorded them singing this healing song while sitting on a lectern in front of a single lit candle.',
      citation:
        'This song is called "Song for sick people," and is Track 29 on a CD called "Spirit of Micronesia." This CD was published in 1995 by Saydisc Records in Wotton-under-Edge, Gloucestershire, United Kingdom.',
      type: 'healing'
    },
    {
      track: '012',
      valence: 0.6817,
      arousal: 0.6892,
      pleasentness: 0.6667,
      latitude: 14.01,
      longitude: 0.75,
      blurb:
        '<b>This is a love song of the Fulani people, a large ethnic group located in the Sahel and West Africa with roots in Northern Africa and the Middle East.</b> About a third of Fulani people are nomadic pastoralists, making them the group with the largest nomadic population in the world today. This song, "Kompule," is common in most Fulani musical repertoires. The song praises the beauty of a young woman, with lyrics that roughly translate to, "Never was there a more beautiful Fulani woman, even at Medina there is no one like you!"',
      citation:
        'This song is called "Niger: Kompule," and is Track 17 on a CD called "Chants d\'amour." This CD was published in 1996 by Auvidis/Unesco in Ivry-sur-Seine, France.',
      type: 'love'
    },
    {
      track: '013',
      valence: 0.6729,
      arousal: 0.6205,
      pleasentness: 0.5176,
      latitude: -12.73,
      longitude: 134.59,
      blurb:
        '<b>This is a dance song of the Yolngu people, an Aboriginal group native to Northeast Australia.</b> This region is the origin of the yiḏaki instrument, known more commonly as the didgeridoo. This instrument is a wooden pipe ranging from three to ten feet in length that produces a distinctive drone that has been described as an "aural kaleidoscope of timbres."',
      citation:
        'This song is called "Wadamiri," and is Side 1, Track 5 on an LP called "Tribal Music of Australia." This LP was published in 1953 by Folkways Records in Washington, D.C..',
      type: 'dancing'
    },
    {
      track: '014',
      valence: 0.41,
      arousal: 0.3241,
      pleasentness: 0.5081,
      latitude: -19.47,
      longitude: -68.64,
      blurb:
        '<b>This is a dance song of the Aymara people native to Bolivia, Peru, and Chile.</b> This song accompanies a dance called sikura, which is performed during a religious festival in late November. The word Tata in the title of the song refers to any person who deserves respect; in this particular case, this song and its accompanying dance is performed in honor of San Juan.',
      citation:
        'This song is called "Tata San Juan," and is Track 2 on a CD called "Ameridian Music of Chile: Aymara, Qaqashqar, Mapuche." This CD was published in 2002 by Folkways Records in New York.',
      type: 'dancing'
    },
    {
      track: '015',
      valence: 0.5718,
      arousal: 0.5211,
      pleasentness: 0.5775,
      latitude: 36.34,
      longitude: -96.80,
      blurb:
        '<b>This is a love song from the Pawnee people of the Great Plains region of the United States.</b> The tribe is most well known for the Peace Pipe ceremony, a diplomatic event at which the leaders from different Native American groups alternately smoke from a tobacco pipe as a showing of goodwill. This song was written to be sung by a man, and the lyrics roughly translate to "a woman says to me \'I love you.\' I will go when I am lonely. There, someone comes."',
      citation:
        'This song is called "Man\'s love song," and is Side 1, Track 3 on an LP called "Music of the Pawnee." This LP was published in 1965 by Folkways Records in New York.',
      type: 'love'
    },
    {
      track: '016',
      valence: 0.6135,
      arousal: 0.5081,
      pleasentness: 0.5707,
      latitude: 10.83,
      longitude: -73.69,
      blurb:
        '<b>This is a love song of the Kogi people, a group native to the Sierra Nevada de Santa Marta in Colombia.</b> This song is accompanied by hembra and macho flutes, and the lyrics roughly translate to "I am full of joy for I have new loves. These are new words. I am full of joy when I have new loves. Those are my words. I have new loves. Here are these men who have come to listen to me, always full of emotion. When I sing of new loves, men, I tell you this with all affection: if I have no new loves, I lead an unhappy life."',
      citation:
        'This song is called "Amores nuevos," and is Track 3 on an LP called "The Music of Some Indian Tribes of Colombia." This LP was published in 1972 by the British Institute of Recorded Sound in London.',
      type: 'love'
    },
    {
      track: '017',
      valence: 0.56,
      arousal: 0.4582,
      pleasentness: 0.5793,
      latitude: 26.54,
      longitude: 99.91,
      blurb:
        '<b>This is a love song from the Bai people of Yunnan, China.</b> Known for its diverse culture and biodiversity, 25 out of 56 recognized ethnic groups in China are found in Yunnan. This particular song features accompaniment by a dragon-headed 3-stringed lute called the Longtou Sanxian. The lyrics of this song describe a man trying to convince a woman to marry him while they are still young.',
      citation:
        'This song is called "Wugenqu," and is Track 12 on a CD called "Baishibai Songs of the Minority Nationalities of Yunnan." This CD was published in 1995 by Pan Records in Leiden, Netherlands.',
      type: 'love'
    },
    {
      track: '018',
      valence: 0.5361,
      arousal: 0.4077,
      pleasentness: 0.5077,
      latitude: 56.95,
      longitude: -7.49,
      blurb:
        "<b>This is a love song from the Highland Scots located in the modern-day United Kingdom.</b> The Highland Scots are most well known for the bagpipe, a wind instrument that creates its distinctive sound by squeezing air out of a bag and through a reed while the player blows air into the bag and covers holes on the attached pipe. In this song, a woman describes how her love didn't recognize her when she saw him, but then goes on to say that she is unconcerned because she is actually in love with someone else.",
      citation:
        'This song is called "S chunna mise mo leannan," and is Track 17 on a CD called "Gaelic Songs of Scotland: Women at Work in the Western Isles." This CD was published in 2006 by Rounder Records in Cambridge, Massachusetts.',
      type: 'love'
    },
    {
      track: '019',
      valence: 0.6507,
      arousal: 0.6514,
      pleasentness: 0.6067,
      latitude: 4.00,
      longitude: -56.00,
      blurb:
        '<b>This is a love song from the Saramaka people of Suriname and French Guiana in South America.</b> This song is an example of a Sĕkĕti song, which are composed by all members of the Saramaka people to commemorate the ups and downs of daily life. These songs are sung at all major events in a call-and-response style. This particular song was written by a woman to describe her lingering feelings for a former husband despite being married to another man. The lyrics roughly translate to "the love I have never grows old."',
      citation:
        'This song is called "Untitled Sĕkĕti songs," and is Side 2, Track 2 on a CD called "Music from Saramaka: A Dynamic Afro-American Tradition." This CD was published in 2002 by Smithsonian Folkways Recordings in New York.',
      type: 'love'
    },
    {
      track: '020',
      valence: 0.5059,
      arousal: 0.521,
      pleasentness: 0.4506,
      latitude: 48.56,
      longitude: -113.01,
      blurb:
        '<b>This is a dance song from the Blackfoot people of North America.</b> This song is typically performed at a powwow, a social gathering of multiple Native American groups for dancing, singing, and intercultural exchange.',
      citation:
        'This song is called "War or grass dance songs," and is Track 9 on a CD called "An Historical Album of Blackfoot Indian Music." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'dancing'
    },
    {
      track: '021',
      valence: 0.6529,
      arousal: 0.5086,
      pleasentness: 0.6301,
      latitude: 70.00,
      longitude: 25.00,
      blurb:
        '<b>This is a lullaby from the Saami people of Scandinavia, who are best known for their reindeer-herding practices.</b> This song is titled "Mana gallaka noukat" ("The Children Ought to Sleep"), and is a well-known lullaby in this culture. Another common genre of Saami music is the yoik, an improvised song sung without accompaniment that describes a person, a special occasion, or something in nature.',
      citation:
        'This song is called "Mana gallaka noukat," and is Track 36 on an LP called "Lappish Joik Songs from Northern Norway." This LP was published in 1961 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '022',
      valence: 0.7013,
      arousal: 0.65,
      pleasentness: 0.6472,
      latitude: -12.89,
      longitude: -38.68,
      blurb:
        '<b>This is a dance song from the Bahia people of eastern Brazil, a region known for its long-standing carnival celebrations.</b> This song incorporates two types of dance music, the samba and the choro. The samba alternates between a chorus and soloist and is accompanied by guitars and percussion. The choro is a style of music written for an instrumental ensemble consisting of woodwinds, guitars, and cavaquinhos (a type of small guitar).',
      citation:
        'This song is called "Samba urbano," and is Side 2, Track 1 on a CD called "Songs and Dances of Brazil." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'dancing'
    },
    {
      track: '023',
      valence: 0.4345,
      arousal: 0.2769,
      pleasentness: 0.3886,
      latitude: 29.50,
      longitude: -112.40,
      blurb:
        '<b>This is a healing song from the Seri people of the Sonora region of Mexico.</b> This song is intended to be sung by a medicine man for healing purposes. The Seri believe that all their music is divinely-inspired and conveyed to them through their medicine man.',
      citation:
        'This song is called "Cancion del curandero," and is Side 1, Track 8 on an LP called "Folk Music of Mexico." This LP was published in 1959 by the Library of Congress in Washington, D.C..',
      type: 'healing'
    },
    {
      track: '024',
      valence: 0.6025,
      arousal: 0.5082,
      pleasentness: 0.5521,
      latitude: 5.18,
      longitude: -64.14,
      blurb:
        '<b>This is a healing song from the Ye\'kuana people who live along the Caura River and Orinoco River regions of Venezuela.</b> "Ye\'kuana" roughly translates to "people of the canoe." This particular song begins by praying for good health in all Ye\'kuana villages and then continues as a prayer from the village shaman for the good health of his own village.',
      citation:
        'This song is called "Mëdëjene," and is Track 6 on a CD called "Music of the Venezuelan Yekuana Indians." This CD was published in 2000 by Smithsonian Folkways Recordings in New York.',
      type: 'healing'
    },
    {
      track: '025',
      valence: 0.7306,
      arousal: 0.7143,
      pleasentness: 0.6116,
      latitude: 4.00,
      longitude: 18.00,
      blurb:
        '<b>This is a dance song from the Aka people of the Central African Republic and the Republic of the Congo.</b> Known for their highly polyphonic music, this Akan song is a polyphonic dance to commemorate the hunt of an elephant and is accompanied by a drum, two iron blades being hit against each other, and clapping.',
      citation:
        'This song is called "Monzoli," and is Disc 1, Track 7 on a CD called "Musical Anthology of the Aka Pygmies." This CD was published in 2002 by Ocora Radio France in Paris.',
      type: 'dancing'
    },
    {
      track: '026',
      valence: 0.3571,
      arousal: 0.3195,
      pleasentness: 0.3143,
      latitude: 67.01,
      longitude: 78.23,
      blurb:
        '<b>This is a love song from the Nenets people of northern Russia.</b> The lyrics of this song roughly translate to "My beloved wife, I chose her among a thousand women. For her working hands, for her beauty, I chose her. I\'ll go with her in life, for the time God has given me. All this time, we\'ll live together with my favorite wife."',
      citation:
        'This song is called "My beloved wife," and is Disc 1, Track 12 on a CD called "Voix du Finisterre Arctique: Voices from the Arctic Land\'s End." This CD was published in 1998 by Buda Records in Paris.',
      type: 'love'
    },
    {
      track: '027',
      valence: 0.6985,
      arousal: 0.6746,
      pleasentness: 0.7105,
      latitude: -10.99,
      longitude: 26.74,
      blurb:
        '<b>This is a healing song from the Lunda people of the Democratic Republic of the Congo and Zambia.</b> In the Lunda religion it is believed that a supreme deity named Nzambi created everything on Earth. This song is intended to be sung by a diviner and is accompanied by clapping. The lyrics roughly translate to: "Go straight off and keep together - don\'t linger."',
      citation:
        'This song is called "Atufundi uyanganje," and is Side A, Track 5 on an LP called "Sons d\'Afrique." This LP was published in 1957 by International Library of African Music in Johannesburg, South Africa.',
      type: 'healing'
    },
    {
      track: '028',
      valence: 0.4479,
      arousal: 0.3559,
      pleasentness: 0.5286,
      latitude: 46.16,
      longitude: -93.76,
      blurb:
        '<b>This is a love song from the Native Ojibwa people from around the Great Lakes of North America.</b> The Ojibwa are known for their use of birch bark to make scrolls containing stories, maps, music, and more. This particular song is accompanied by a flute used in Ojibwa courtship rituals, and the first three stanzas roughly translate to: "The sound of an old motorboat is heard. When I look, my sweetheart was standing as she left. My sweetheart intends to leave. When I look, the old motorboat is heard departing. My sweetheart was standing as she left, waving a white handkerchief. It fades away going to Walker. I just cry when I remember what she said."',
      citation:
        'This song is called "Love song, James Littlewolf," and is Track 12 on a CD called "Ojibway Music from Minnesota: A Century of Song for Voice and Drum." This CD was published in 1997 by Minnesota Historical Society Press in St. Paul, Minnesota.',
      type: 'love'
    },
    {
      track: '029',
      valence: 0.6229,
      arousal: 0.56,
      pleasentness: 0.6054,
      latitude: 37.51,
      longitude: 22.37,
      blurb:
        '<b>This is a dance song from Greece.</b> The lyrics tell the story of a man who has fallen in love with an orphan girl in spite of their difference in social class and is accompanied by violin, guitar, and the Bouzouki (similar to a mandolin). The dance to this song is called the Kalamatiano and is performed in groups of three or more people. The choreography consists of three steps forward and two steps back, with the leader dancing more difficult steps.',
      citation:
        'This song is called "Agapisa mia orphani (I have fallen in love with an orphan)," and is Track 2 on an LP called "Songs and Dances of Greece." This LP was published in 1953 by Folkways Records in New York.',
      type: 'dancing'
    },
    {
      track: '030',
      valence: 0.681,
      arousal: 0.5794,
      pleasentness: 0.603,
      latitude: 63.17,
      longitude: 14.96,
      blurb:
        '<b>This is a dance song from Sweden performed by Måns Olsson on violin.</b> The type of dance is polska, a partner dance that originated in Poland. Olsson was famous for his polska recordings, and even arranged a few polska in a jazz style after spending 12 years in America.',
      citation:
        'This song is called "Lapp nils polska efter munter-johan," and is Track 36 on a CD called "Vall- trall- & Lapp-Nils Låtar: Folk Tunes from Jämtland." This CD was published in 1996 by Caprice Records/Sveriges Radio P2 in Stockholm.',
      type: 'dancing'
    },
    {
      track: '031',
      valence: 0.5763,
      arousal: 0.5676,
      pleasentness: 0.5667,
      latitude: 43.05,
      longitude: -80.08,
      blurb:
        '<b>This is a set of four healing songs from the Haudenosaunee (or Iroquois) people of North America.</b> The individual songs in this particular set are called "throwing songs" because each participating medicine man "throws" a song into the healing ceremony to pray for the sick person to get well before continuing on to the Medicine Dance. Each song is accompanied by shaking a gourd rattle.',
      citation:
        'This song is called "Throwing songs of four individual medicine men and introductory songs of the medicine men," and is Side 1, Track 6 on an LP called "Songs from the Iroquois Longhouse." This LP was published in 1950 by the Library of Congress in Washington, D.C..',
      type: 'healing'
    },
    {
      track: '032',
      valence: 0.6371,
      arousal: 0.5421,
      pleasentness: 0.6056,
      latitude: 42.11,
      longitude: -78.79,
      blurb:
        '<b>This is a dance song from the Haudenosaunee (or Iroquois) people of northern North America.</b> This Robin Dance is led by the singer and involves a line of people following each other around a circular path. The steps consist of stomping, turning, side-stepping, and hopping to imitate a robin. The dance is accompanied by cowhorn rattles and the sound of stomping heels.',
      citation:
        'This song is called "Three robin dance songs," and is Track 3 on an LP called "Seneca Social Dance Music." This LP was published in 1980 by Folkways Records in New York.',
      type: 'dancing'
    },
    {
      track: '033',
      valence: 0.478,
      arousal: 0.3457,
      pleasentness: 0.4317,
      latitude: 20.39,
      longitude: -88.47,
      blurb:
        '<b>This is a healing song from Mexico used in a Mayan purification ceremony for a sick person.</b> Shamans, or "H-men" as the Maya call them, incorporate "xi\'nche" branches as rhythmic percussion instruments in order to extract the spirits causing the person\'s illness. The lyrics can only be spoken by "H-men" and contain some words that are incomprehensible to even native Mayan speakers.',
      citation:
        'This song is called "Rezo de santiguación," and is Track 13 on a CD called "Ki\'ichkelem Tata Dios: Música Ritual del Oriente de Yucatán." This CD was published in 2003 by Instituto Nacional de Antropologia e Historia in Mexico City.',
      type: 'healing'
    },
    {
      track: '034',
      valence: 0.3928,
      arousal: 0.3262,
      pleasentness: 0.4879,
      latitude: 11.39,
      longitude: -71.98,
      blurb:
        '<b>This is a lullaby from the Goajiro people of Colombia and Venezuela.</b> From cattle herding to celebrations, music is incorporated into all areas of Goajiro culture.',
      citation:
        'This song is called "Canción de cuna," and is Side 1, Track 5 on an LP called "On Chicha Maya: Folklore de la Guajira Venezolana." This LP was published in 1971 by Laffer in Caracas, Venezuela.',
      type: 'lullaby'
    },
    {
      track: '035',
      valence: 0.7117,
      arousal: 0.6575,
      pleasentness: 0.6375,
      latitude: 28.48,
      longitude: -0.14,
      blurb:
        '<b>This is a dance song from the Gourara culture of Northern Africa.</b> The dance can only be performed by Sudanese people who live in the region as a result of the slave trade. This song is accompanied by the dendoun (a two-headed drum), and the qarqabou (a metal instrument that functions as both a clapper and a cymbal). The lyrics of the song cannot be translated because they are written in Kouriya, a language that is now extinct.',
      citation:
        'This song is called "Dance with qarqabou," and is Track 7 on a CD called "Music of Gourara." This CD was published in 1991 by Auvidis in France.',
      type: 'dancing'
    },
    {
      track: '036',
      valence: 0.6529,
      arousal: 0.6596,
      pleasentness: 0.5514,
      latitude: 47.49,
      longitude: -94.89,
      blurb:
        '<b>This is a dance song used by the Native Ojibwa people from around the Great Lakes of North America.</b> This song is used during the Medicine Dance, a multi-day religious ceremony that occurs in spring and early fall. The Ojibwa worship natural forces such as the wind and also believe in spirits like Kiccimanto and the Great Spirit who grant them power by showing them visions in their dreams. The Ojibwa people also invoke the healing powers of these deities with their music.',
      citation:
        'This song is called "Kingbird singers," and is Track 1 on a CD called "Ojibway Music from Minnesota: A Century of Song for Voice and Drum." This CD was published in 1997 by the Minnesota Historical Society in St. Paul, Minnesota.',
      type: 'dancing'
    },
    {
      track: '037',
      valence: 0.3281,
      arousal: 0.1528,
      pleasentness: 0.2676,
      latitude: -10.92,
      longitude: -50.18,
      blurb:
        '<b>This is a lullaby from the Brazilian Amazonian culture of Javaé.</b> The Javaé people have minimum contact with outside civilians and use songs for several types of occasions including funerals, mourning, departure and arrival of relatives, and lullabies.',
      citation:
        'This song is called "Javahe: Lullaby-song, mother and child," and is Track 14 on a CD called "Brazilian Indian Music." This CD was published in 2000 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '038',
      valence: 0.4,
      arousal: 0.4315,
      pleasentness: 0.6308,
      latitude: -9.77,
      longitude: -38.18,
      blurb:
        '<b>This is a healing song originating from the Bahia Brazilians.</b> This song, entitled "Priest\'s Blessing," is performed by a 78-year-old man named Valdemar Valdivino who, after having been suddenly cured of a 15-day fever, began preaching and blessing people "just like a priest." He claims that this song came to him from having a divine revelation.',
      citation:
        'This song is called "Bênção de cura," and is Track 10 on a CD called "Bahia singular e plural." This CD was published in 1998 by the Instituto de Radiodifusão Educativa da Bahia in Bahia, Brazil.',
      type: 'healing'
    },
    {
      track: '039',
      valence: 0.6164,
      arousal: 0.5404,
      pleasentness: 0.5345,
      latitude: -14.16,
      longitude: 33.84,
      blurb:
        '<b>This is an old traditional lullaby by Chewa women of Chadza, Lilongwe, and Central Nyasaland in Africa.</b> Women have a special place in Chewa society and are hailed as "reproducers of the lineage." The title of this lullaby, "Alulu kalele mwana," roughly translates to "Alulu, go and nurse the kid."',
      citation:
        'This song is called "Alulu kalele mwana," and is Side A, Track 4 on an LP called "Sons d\' Afrique TR-76: Nyasaland Chewa." This LP was published in 1958 by the International Library of African Music in Johannesburg, South Africa.',
      type: 'lullaby'
    },
    {
      track: '040',
      valence: 0.5514,
      arousal: 0.437,
      pleasentness: 0.5622,
      latitude: 4.00,
      longitude: 18.00,
      blurb:
        '<b>This is a lullaby by the Aka, a traditional hunter-gatherer society that is one of three groups of pygmies found in central Africa today.</b> The Aka are known for having complex polyphonic music consisting of many independent lines. This recording features two young girls sitting in a traditional hut of leaves singing a lullaby.',
      citation:
        'This song is called "Mo boma," and is Disc 1, Track 15 on a CD called "Musical Anthology of the Aka Pygmies." This CD was published in 2002 by Ocora Radio France in France.',
      type: 'lullaby'
    },
    {
      track: '041',
      valence: 0.4976,
      arousal: 0.4409,
      pleasentness: 0.6463,
      latitude: 42.12,
      longitude: 45.30,
      blurb:
        '<b>This is a healing song from the country Georgia, one of the most musical places in the world.</b> Georgia is a place where you can find classical sheet music being sold by street vendors and middle-aged gentlemen singing folk chants on street-corners. The performers and performances reflect the many sides of Georgian music - simultaneously archaic and modernist, with both Eastern and Western influences.',
      citation:
        'This song is called "Iavnana (Violet Mother)," and is Disc 2, Track 10 on a CD called "Songs of Survival: Traditional Music of Georgia." This CD was published in 2007 by Topic Records in London.',
      type: 'healing'
    },
    {
      track: '042',
      valence: 0.4921,
      arousal: 0.3949,
      pleasentness: 0.405,
      latitude: 42.40,
      longitude: 142.26,
      blurb:
        "<b>This is a dance song of the Ainu culture - an indigenous people from Japan who once inhabited Jomon, Okhotsk, and Satsumon islands.</b> The elements of nature, plants, and animals (especially bears) are central to the Ainu people's religious system. As a result, Ainu music includes imitations of animal cries, birds singing, and insects chirping. Puffing sounds are used to exorcise evil spirits. This particular song was sung antiphonally by a leader and a chorus during the bear festival.",
      citation:
        'This song is called "Rimse," and is Track 4 on a CD called "Ainu Songs Chants des Ainou." This CD was published in 1993 by Auvidis in France.',
      type: 'dancing'
    },
    {
      track: '043',
      valence: 0.3714,
      arousal: 0.3452,
      pleasentness: 0.4765,
      latitude: 57.62,
      longitude: -7.33,
      blurb:
        '<b>This is a lullaby sung to a little girl by artist Don Mackinnon, and originates from ancient or medieval times from the people of the Hebridean islands located off the northwest coast of Scotland.</b> This song includes a popular melody often used for lullabies in Gaelic, and is also found in music from the western isles both of Scotland and Ireland.',
      citation:
        'This song is called "Ho ho vo laidi bheag," and is Side 2, Track 3 on an LP called "Songs and Pipes of the Hebrides." This LP was published in 1961 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '044',
      valence: 0.4806,
      arousal: 0.4053,
      pleasentness: 0.4656,
      latitude: 29.50,
      longitude: -112.40,
      blurb:
        '<b>This is a lullaby from an indigenous group residing in the Mexican state of Sonora who refer to themselves as Comcaac.</b> Known to the outside world as the Seri, they are one of the indigenous Mexican groups that has most strongly retained their language and culture throughout the years, even after coming into contact with the Spanish and other Mexican cultures.',
      citation:
        'This song is called "Voice with rattle," and is Track EC 3402-3 on a sound tape reel called "Mexico, Sonora, Seri Indians 1966." This sound tape reel was published in 1969 by Archives of Traditional Music.',
      type: 'lullaby'
    },
    {
      track: '045',
      valence: 0.4028,
      arousal: 0.3923,
      pleasentness: 0.4139,
      latitude: 18.36,
      longitude: 7.32,
      blurb:
        '<b>This is a love song of the Tuareg people who inhabit a vast area of the Sahara stretching from southwestern Libya to southern Algeria, Niger, Mali, and Burkina Faso.</b> The music of Tuareg tribes shares similarities with certain Berber tribes from the Atlas Mountains of Morocco. This song is closely related to the sexual traditions of the people.',
      citation:
        'This song is called "Ezzel n oufada aoua etteb ales ou n abaradh," and is Side 1, Track 3 on an LP called "Tuareg Music of the Southern Sahara." This LP was published in 1960 by Folkways Records in New York.',
      type: 'love'
    },
    {
      track: '046',
      valence: 0.6657,
      arousal: 0.614,
      pleasentness: 0.678,
      latitude: 24.27,
      longitude: 86.65,
      blurb:
        '<b>This is a dance song of the Garo people, a Tibeto-Burman ethnic group located in parts of India and Bangladesh.</b> Brass gongs are the most distinctive and important musical instrument in Garo culture. The Garo see brass gongs as a symbol of prestige and often hang them over funerary posts erected to honor the memory of deceased persons.',
      citation:
        'This song is called "Dance of the morning dove (Dokrusuani)," and is Track 7 on a CD called "Bangladesh: Les Garo de la forêt de Madhupur." This CD was published in 1994 by Ocora Radio France: Distribution Harmonia Mundi in Paris.',
      type: 'dancing'
    },
    {
      track: '047',
      valence: 0.5851,
      arousal: 0.4986,
      pleasentness: 0.58,
      latitude: -13.31,
      longitude: -71.59,
      blurb:
        "<b>This is a Peruvian love song from the Q'eros people.</b> Due to their isolation from other Incan indigenous tribes, their music is distinct from that of neighboring cultures. The lyrics to this song roughly translate to \"to the palm tree-'give me shade. That my love should grow.' To [a different tree] 'cry for me. That my love might grow.'\"",
      citation:
        'This song is called "Love song," and is Track 31 on a CD called "Mountain Music of Peru." This CD was published in 1991 by Smithsonian Folkways Recordings in Washington, D.C..',
      type: 'love'
    },
    {
      track: '048',
      valence: 0.3784,
      arousal: 0.3089,
      pleasentness: 0.441,
      latitude: 34.78,
      longitude: 47.60,
      blurb:
        '<b>This is an old Kurdish lullaby sung by a married woman from the noble class in the village Bawale in the Middle East.</b> Lullabies are sung by married women only in private residences, and never in the presence of adult men outside the harem. One feature among Kurdish lullabies is that the lyrics address girls as if they were boys.',
      citation:
        'This song is called "Laîlaî," and is Side 2, Track 8 on an LP called "Kurdish Folk Music from Western Iran." This LP was published in 1966 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '049',
      valence: 0.3449,
      arousal: 0.3262,
      pleasentness: 0.4353,
      latitude: 6.08,
      longitude: 10.13,
      blurb:
        "<b>This is a lullaby of the Bafut, a tribe of approximately 20,000 individuals living near Bamenda in the grassy highlands of the British Cameroons.</b> Music is an integral part of Cameroon culture, being interwoven into nearly every facet of daily and ceremonial life. This lullaby is sung without accompaniment, but you can hear the tapping of the mother's hand against the baby.",
      citation:
        'This song is called "Four lullabies," and is Side 1, Track 8 on an LP called "Music of the Cameroons." This LP was published in 1961 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '050',
      valence: 0.6947,
      arousal: 0.6098,
      pleasentness: 0.6632,
      latitude: 19.36,
      longitude: -154.97,
      blurb:
        "<b>This is a dance song of the original Polynesian settlers of Hawaii.</b> Although missionaries, merchants, and monarchs extensively influenced Hawaiian music, it still retains its unique Hawaiian artistic expression. This song is a chant for a goddess named Hi'iaka and is accompanied by double-gourd drummers.",
      citation:
        'This song is called "Mele inoa no Hi\'iaka; name chant for the goddess Hi\'iaka," and is Track 20 on a CD called "Nā Leo Hawai\'i Kahiko: Voices of Old Hawaii." This CD was published in 1997 by the Bernice P. Bishop Museum in Honolulu.',
      type: 'dancing'
    },
    {
      track: '051',
      valence: 0.4329,
      arousal: 0.381,
      pleasentness: 0.4688,
      latitude: -13.98,
      longitude: -171.46,
      blurb:
        "<b>This is a lullaby sung by Samoans - a Polynesian ethnic group native to the Samoan Islands.</b> This recording features a woman named Fa'a'u'uga, who sang this lullaby while cradling her grandchild in her arms. The song describes two people named Tapitofau and Ogafau who are being rebuked for their forgetfulness.",
      citation:
        'This song is called "Tagi lullaby," and is Track 16 on a CD called "Spirit of Polynesia." This CD was published in 1993 by Saydisc Records in Wotton-under-Edge, Gloucestershire, United Kingdom.',
      type: 'lullaby'
    },
    {
      track: '052',
      valence: 0.3718,
      arousal: 0.3229,
      pleasentness: 0.4533,
      latitude: 68.09,
      longitude: 21.70,
      blurb:
        '<b>This is a love song of the Saami who are the indigenous inhabitants of modern day Norway, Sweden, Finland, and Russia.</b> The Saami people admire nature and see themselves as a part of it. The folk music of the Saami, called Yoik, is traditionally used for admiring, pitying, proposing marriage, seducing, and more.',
      citation:
        'This song is called "A love song," and is Disc 3, Track 21 on a CD called "Yoik: A Presentation of Saami Folk Music." This CD was published in 1997 by Caprice in Stockholm, Sweden.',
      type: 'love'
    },
    {
      track: '053',
      valence: 0.3259,
      arousal: 0.3368,
      pleasentness: 0.4,
      latitude: 21.28,
      longitude: -157.83,
      blurb:
        '<b>This is a love song of the original Polynesian settlers of Hawaii.</b> Although missionaries, merchants, and monarchs extensively influenced Hawaiian music, it still retained its unique Hawaiian artistic expression. This song is a love chant that features imagery from nature and intricate descriptions of specific locations on the island of Hawaii.',
      citation:
        'This song is called "Mele ho\'oipoipo, love chant," and is Track 14 on a CD called "Nā Leo Hawai\'i Kahiko: Voices of Old Hawaii." This CD was published in 1997 by the Bernice P. Bishop Museum in Honolulu.',
      type: 'love'
    },
    {
      track: '054',
      valence: 0.3675,
      arousal: 0.2952,
      pleasentness: 0.3515,
      latitude: 9.57,
      longitude: -78.82,
      blurb:
        '<b>This is a healing oration sung by the Guna, an indigenous people (formerly known as Cuna) living in the Archipelago of San Bias, Bayano, and Panama.</b> In Guna culture music, prayers, and botanical knowledge of roots, leaves, and barks are used for healing. In this song, the Guna call upon a spirit found in a special stone of a river called the Aquanusa. The opening of this particular oration introduces the spirit of the stone to the person being cured.',
      citation:
        'This song is called "Aquanusa (stone) a healing oration sung by Wilfredo Morris," and is Side 1, Track 4 on a CD called "Music of the Indians of Panama: The Cuna (Tule) & Chocoe (Embera) Tribes." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'healing'
    },
    {
      track: '055',
      valence: 0.5205,
      arousal: 0.4861,
      pleasentness: 0.5205,
      latitude: 12.97,
      longitude: 77.57,
      blurb:
        "<b>This is a lullaby of the Marathi people who inhabit Maharashtra and parts of Belgaum, Karwar of Karnataka, and Margao of Goa in western India.</b> This particular song is addressed to the child Shivaji, who was a Maratha King in the 16th century. Shivaji is also a national hero in Maharashtra who fought against the Mughal emperors. The song describes Shivaji's chivalry as well as his mother's attempts to make him go to sleep.",
      citation:
        'This song is called "Palna," and is Track 1 on an LP called "Marathi Songs from the Arnold Bake Collection." This LP was published in 1938 by the Archives and Research Centre for Ethnomusicology in New Delhi.',
      type: 'lullaby'
    },
    {
      track: '056',
      valence: 0.5761,
      arousal: 0.5119,
      pleasentness: 0.4822,
      latitude: 47.69,
      longitude: -102.35,
      blurb:
        '<b>This is a healing song of the Pawnee - a tribe that lives in the Plains and Plateau region of North America.</b> The name of the song "Peyote" refers to a vision-inducing plant that can cure illness and relieve fatigue. At some ceremonies, individuals use dry peyote plant to make tea to cure a sick person.',
      citation:
        'This song is called "Peyote song," and is Side 1, Track 3F on an LP called "Music of the Pawnee." This LP was published in 1967 by Folkways Records in New York.',
      type: 'healing'
    },
    {
      track: '057',
      valence: 0.4903,
      arousal: 0.4301,
      pleasentness: 0.5189,
      latitude: -11.18,
      longitude: 132.53,
      blurb:
        '<b>This is a love song performed by a member of the Iwaidja people, a group indigenous to Northern Australia.</b> The Iwaidja language, still spoken by some 150 people, is unique from nearly all languages in the world in that it uses verbs, rather than nouns, to denote familial relations. For example, instead of the English "he is her brother" an Iwaidja speaker would say the English equivalent of "he brothers her." The word "Iwaidja" derives from the language\'s word for "no."',
      citation:
        'This song is called "Dangkarrarnaka," and is Track 28 on a CD called "Jurtbirrk: Love Songs From North Western Arnhem Land." This CD was published in 2005 by Batchelor Press in Batchelor, Northern Territory, Australia.',
      type: 'love'
    },
    {
      track: '058',
      valence: 0.4812,
      arousal: 0.4152,
      pleasentness: 0.5159,
      latitude: -5.63,
      longitude: 144.26,
      blurb:
        '<b>This love song originates from the Melpa people, a group native to the highlands of Papua New Guinea.</b> In rural Melpa communities, villages are often spread far apart from each other and long distance greetings are accomplished by yodeling.',
      citation:
        'This song is called "Untitled Papua New Guinea love track," and is an unpublished recording acquired in 2001 from Don Niles.',
      type: 'love'
    },
    {
      track: '059',
      valence: 0.5205,
      arousal: 0.3757,
      pleasentness: 0.534,
      latitude: -18.41,
      longitude: -61.78,
      blurb:
        '<b>This is a lullaby from the Guaraní people who are native to Paraguay, Bolivia, Argentina, and Brazil.</b> Today, Guaraní music tends to be intertwined with Spanish influences, often featuring Spanish guitar and lyrics that contain words in Spanish and Paraguayan Guaraní languages.',
      citation:
        'This song is called "Tapiti," and is Track 46 on a CD called "Le chant des engants du monde: vol. 6 Amérique du Sud." This CD was published in 1998 by Arion in Paris, France.',
      type: 'lullaby'
    },
    {
      track: '060',
      valence: 0.4692,
      arousal: 0.4451,
      pleasentness: 0.5,
      latitude: -3.09,
      longitude: 115.28,
      blurb:
        '<b>This is a healing song of the Meratus people of Indonesia.</b> The Meratus people are known for their creation of powerful oils that heal wounds, and it has been suggested that healing songs such as this one are played while oils are being applied.',
      citation:
        'This song is called "Belian (slow) - Meratus," and is Track 4 on a CD called "On Bornéo: Music of the Dayak and of the Punan." This CD was published in 1999 by Buda Musique in Paris, France.',
      type: 'healing'
    },
    {
      track: '061',
      valence: 0.6528,
      arousal: 0.5775,
      pleasentness: 0.7012,
      latitude: -2.35,
      longitude: 29.73,
      blurb:
        '<b>This is a love song originating from Rwanda, a country in central Africa.</b> Music in Rwanda is often accompanied with dance. One of the most cherished forms of music in Rwanda is a dance called the Ikinimba, which tells the stories of Rwandan heroes and kings.',
      citation:
        'This song is called "Lama," and is Side A, Track 2 of an LP called "TR-181: Sons d\'Afrique (Rwanda)." This LP was published in 1952 by the International Library of African Music in Johannesburg, South Africa.',
      type: 'love'
    },
    {
      track: '062',
      valence: 0.5687,
      arousal: 0.3548,
      pleasentness: 0.4056,
      latitude: 42.64,
      longitude: 142.16,
      blurb:
        "<b>This is a lullaby originating from the Ainu people of Japan.</b> This song is an ihumke, which includes a unique vocal technique where the performer sings high-pitched trills in falsetto while rolling their tongue. To the Ainu people, this technique creates a beautiful sound that represents the chiming of God's bells in heaven showering down upon the infant.",
      citation:
        'This song is called "Ihumke," and is Track 14 on a CD called "Ainu Songs Chants des Ainou." This CD was published in 1993 by Auvidis in France.',
      type: 'lullaby'
    },
    {
      track: '063',
      valence: 0.5297,
      arousal: 0.4594,
      pleasentness: 0.4597,
      latitude: -3.37,
      longitude: 36.68,
      blurb:
        '<b>This is a dance song of the Maasai people of Tanzania.</b> It is a well-known song in the Arusha district of Tanzania in which the singer praises his friends for killing lions and describes his own experience killing a lion with his spear. It also involves a dance called embrukoi that is performed by leaping high into the air with a rigid body and lifted chin.',
      citation:
        'This song is called "Embrukoi," and is Track 20 on a CD called "Tanzania Vocals Tanganyika." This CD was published in 2003 by the International Library of African Music in Grahamstown, South Africa.',
      type: 'dancing'
    },
    {
      track: '064',
      valence: 0.4325,
      arousal: 0.472,
      pleasentness: 0.4743,
      latitude: 37.57,
      longitude: 126.98,
      blurb:
        '<b>This South Korean healing song is an appeal to the god Tusin, who is believed to control smallpox.</b> The melodies of shaman songs such as this one are largely improvised, meaning that they are produced on the spot instead of being planned out in advance.',
      citation:
        'This song is called "Changgunrŏi: Pyŏlsanggŏri, Sinjanggŏri, Taegamgŏri, T\'ŏjudaegamgŏri," and is Disc 2, Track 7 on a CD called "Seoul Jaesu Kut & Kin\'ogwi Kut." This CD was published in 1997 by the National Center for Korean Traditional Performing Arts/Korean Broadcasting System in Seoul, South Korea.',
      type: 'healing'
    },
    {
      track: '065',
      valence: 0.4,
      arousal: 0.2706,
      pleasentness: 0.4299,
      latitude: -28.22,
      longitude: 31.46,
      blurb:
        '<b>This is a love song of the Zulu people from Southern Africa.</b> In the song, the singer praises the man to whom she is engaged to marry. The title of the song roughly translates to "he is so handsome and how I love him," and another line translates to "If only he would walk past my house, I would set the dogs after him and catch him that way." One can imagine the performer singing quietly to herself while admiring her love from afar.',
      citation:
        'This song is called "Ngimthanda nje muhle," and is Side B, Track 1 on a CD called "The Zulu Songs of Princess Constance Magogo KaDinuzulu." This CD was published in 1973 by Gallo Records in Johannesburg, South Africa.',
      type: 'love'
    },
    {
      track: '066',
      valence: 0.5526,
      arousal: 0.5273,
      pleasentness: 0.438,
      latitude: 37.26,
      longitude: 55.17,
      blurb:
        '<b>This is a healing song originating from the Turkmen people of Iran.</b> This song is called "Porkhâni (Zekre Khanjar)" and is part of an ancient ritual meant to banish evil spirits and treat mental diseases.',
      citation:
        'This song is called "Porkâni (Zekre Khanjar)," and is Disc 3, Track 5 on a CD called "Hasht Behesht : A Selection of Iranian Regional Music." This CD was published in 2005 by the Mahoor Institute of Culture and Art in Tehran, Iran.',
      type: 'healing'
    },
    {
      track: '067',
      valence: 0.4513,
      arousal: 0.4892,
      pleasentness: 0.65,
      latitude: 65.63,
      longitude: 171.70,
      blurb:
        '<b>This is a lullaby of the Chukchi people who live in the northern tundra of Russia.</b> A Chukchi lullaby written to celebrate the birth of a child will remain linked to that child for the rest of their life. Chukchi music is also deeply connected to nature, and many songs imitate bird and animal cries. Additionally, some songs use a distinct form of throat singing to represent the breathing of reindeer.',
      citation:
        'This song is called "Berceuse / Lullaby," and is Track 22 on a CD called "Russian Far North: The Chukchi." This CD was published in 1997 by Auvidis in Boulogne, France.',
      type: 'lullaby'
    },
    {
      track: '068',
      valence: 0.7344,
      arousal: 0.6448,
      pleasentness: 0.6657,
      latitude: -12.83,
      longitude: 28.20,
      blurb:
        '<b>This is a dance song of the Lozi people who live primarily in southern Africa.</b> Dance is a central aspect of Lozi ceremonies. People typically dance at festivals to celebrate migration from the flood plains to higher ground or to commemorate royal occasions.',
      citation:
        'This song is called "Musahowelele likishi la Mulena," and is Tape 72 on a record called "C3X-10." This record was published in 1949 by International Library of African Music in Johannesburg, South Africa.',
      type: 'dancing'
    },
    {
      track: '069',
      valence: 0.3971,
      arousal: 0.3167,
      pleasentness: 0.3219,
      latitude: 20.76,
      longitude: -104.85,
      blurb:
        '<b>This is a love song of the Huichol people who are native to northern Mexico.</b> Despite influences from the Mexican government, the Huichol people have preserved many traditions. In the Huichol culture there are happy (alegre) and sad (triste) love songs, composed by men, women, and children.',
      citation:
        'This song is called "Canción de amor (canto de entretenimiento)," and is Track 14 on a CD called "Música y Cantos para la Luz y los Ocuridad: 100 años de Testimonios de los Pueblos Indígenas: Música y Cantos Huicholes Grabados por Carl Lumholtz." This CD was published in 2005 by Comisión para el Desarrollo de los Pueblos Indígenas in Mexico.',
      type: 'love'
    },
    {
      track: '070',
      valence: 0.5515,
      arousal: 0.4,
      pleasentness: 0.5559,
      latitude: -22.67,
      longitude: 167.50,
      blurb:
        '<b>This is a lullaby of the Kanak people who live in the Melanesian region of Oceania.</b> In Kanak culture, lullabies are often rich with tales of historical events. The lyrics of this song roughly translate to, "Sleep eats your eyes / Sleep, little one, sleep."',
      citation:
        'This song is called "Deux berceuses de l\'Ile des Pins," and is Track 15 on a CD called "Chants Kanaks." This CD was published in 1990 by Harmonia Mundi in Arles, France.',
      type: 'lullaby'
    },
    {
      track: '071',
      valence: 0.4029,
      arousal: 0.3886,
      pleasentness: 0.5378,
      latitude: 37.16,
      longitude: 26.84,
      blurb:
        '<b>This is a lullaby sung by a resident of the island of Leros, Greece, located in the South Aegean Sea.</b> One of the stanzas in this lullaby roughly translates to, "Sleep, as you take children away / Come take this one too / It\'s tiny as I give it to you / But bring it back fully grown." The lyrics of this lullaby can be sung with several different melodies.',
      citation:
        'This song is called "Lullaby," and is Disc 1, Track 6 on a CD called "Tēs Leros Ta Tragoudia." This CD was published in 1998 by Music Folklore Archive in Leros, Greece.',
      type: 'lullaby'
    },
    {
      track: '072',
      valence: 0.4917,
      arousal: 0.5037,
      pleasentness: 0.5011,
      latitude: 59.55,
      longitude: -139.73,
      blurb:
        '<b>This song, entitled "Tsimshian Blanket Dance Song," is sung by a member of the Tlingit people who are native to Southern Alaska.</b> In Tlingit culture, blankets are often used as dance robes because the movement of the fringe on the blanket adds a pleasing dimension to the dance.',
      citation:
        'This song is called "Tsimshian blanket dance song," and is Side 2, Track 4 on an LP called "Southeast Alaska Folk Tradition, Vol. 1: Exploration and Discovery, 1786-1897." This LP was published in 1981 by Folkways Records in New York.',
      type: 'dancing'
    },
    {
      track: '073',
      valence: 0.36,
      arousal: 0.3573,
      pleasentness: 0.3857,
      latitude: 16.78,
      longitude: -3.01,
      blurb:
        '<b>This is a lullaby of the Tuareg people who originate from North Africa.</b> The Tuareg people are a semi-nomadic, Muslim, and Afroasiatic people known for their signature indigo-colored robes. The lyrics of this particular lullaby roughly translate to, "My son, why do you cry? Your father has money, goats, camels, sheep, and many slaves. Do not cry. You will be a rich man soon."',
      citation:
        'This song is called "Lullaby," and is Track 6, Song 3 on an LP called "African Music." This LP was published in 1957 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '074',
      valence: 0.3889,
      arousal: 0.4359,
      pleasentness: 0.5951,
      latitude: 18.24,
      longitude: -99.23,
      blurb:
        '<b>This is a love song sung by a member of the Nahua people who are indigenous to Mexico.</b> The lyrics roughly translate to, "Hold this flower to your chest; Hold it, because I love you; Hold it because I cherish you with all my heart."',
      citation:
        'This song is called "Canto de amor," and is Track 2 on a CD called "In Xóchitl in Cuícatl." This CD was published in 2002 by Instituto Nacional de Antropología e Historia in Mexico City.',
      type: 'love'
    },
    {
      track: '075',
      valence: 0.3134,
      arousal: 0.2667,
      pleasentness: 0.4,
      latitude: 54.00,
      longitude: -125.00,
      blurb:
        "<b>This is a healing song of the Kwakwaka'wakw people who are native to the Pacific Northwest Coast of North America.</b> Kwakwaka'wakw tradition regards music as a connection to the supernatural, allowing for a transcendence of human limitations. In this culture, doctors are often women and are believed to be immortal and clairvoyant. Some Kwakawaka'wakw people regard the power of healing as hereditary while others believe it to be endowed to those possessing the power of vision and dreams.",
      citation:
        'This song is called "Little woman doctor song," and is Side 3, Track 6 on an LP called "Indian Music of the Pacific Northwest Coast." This LP was published in 1967 by Folkways Records in New York.',
      type: 'healing'
    },
    {
      track: '076',
      valence: 0.5015,
      arousal: 0.4,
      pleasentness: 0.5455,
      latitude: 4.58,
      longitude: 35.49,
      blurb:
        '<b>This is a lullaby sung by a member of the Nyangatom people, an agro-pastoralist group of Ethiopia and South Sudan.</b> A subset of the Nyangatom people are nomadic and travel with livestock, while others engage in farming along the Omo River. This song is about the agricultural harvest.',
      citation:
        'This song is called "Tolema, tolema-ey," and is an unpublished recording acquired in 2012 by Hannah Wild.',
      type: 'lullaby'
    },
    {
      track: '077',
      valence: 0.3091,
      arousal: 0.2268,
      pleasentness: 0.24,
      latitude: -53.16,
      longitude: -70.92,
      blurb:
        '<b>This is a love song sung in the Kawésqar (or Acalufe) language, an endangered language spoken in southern Chile.</b> Archeologists estimate that the nomadic Kawésqar people lived in the Chilean Patagonia for some 6,000 years. However, following the arrival of European settlers, the Kawésqar population dwindled to the point that they are now on the cusp of extinction with only 7 native speakers of the Kawésqar language remaining.',
      citation:
        'This song is called "Lovers\' song," and is Track ALC001R001 on a collection called "AILLA\'s South American Languages Collection." This recording was published in 2006 by www.ailla.utexas.org in Austin, Texas.',
      type: 'love'
    },
    {
      track: '078',
      valence: 0.5778,
      arousal: 0.5039,
      pleasentness: 0.4827,
      latitude: 0.95,
      longitude: -79.67,
      blurb:
        "<b>This is a dance song from the Chachi people, one of the lowland tribes of Ecuador.</b> This song is a rare sample from the region's traditional religious festivities - the influence of missionaries has shifted most religious practices to those of the Christian church.",
      citation:
        'This song is called "Festive song," and is Track 6 on a CD called "Lowland Tribes of Ecuador." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'dancing'
    },
    {
      track: '079',
      valence: 0.6452,
      arousal: 0.6152,
      pleasentness: 0.5829,
      latitude: 7.54,
      longitude: 149.42,
      blurb:
        "<b>This is a dance song using chant from Chuuk State, the most populous of the four states that make up the Federated States of Micronesia.</b> This spirited dance is performed by large groups of men in traditional loinclothes (or thu) and is rhythmically driven by lunging stomps and clapping.",
      citation:
        'This song is called "Men\'s standing dance," and is Track 25 on a CD called "Spirit of Micronesia." This CD was published in 1995 by Saydisc Records in Wotton-under-Edge, Gloucestershire, United Kingdom.',
      type: 'dancing'
    },
    {
      track: '080',
      valence: 0.3289,
      arousal: 0.3333,
      pleasentness: 0.4152,
      latitude: 32.78,
      longitude: -114.65,
      blurb:
        '<b>This is a healing song from the Quechan people of the southwest and basin region of North America.</b> It is said that the singer of this song had so much medicinal strength that he was immune to extreme temperature fluctuations and could linger among the spirits. The third in a set of four healing songs recorded together, this song was sung to help the ill regain motion.',
      citation:
        'This song is called "Third song when treating the sick," and is Track 8 on a CD called "Healing Songs of the American Indians." This CD was published in 2000 by Smithsonian Folkways Recordings in New York.',
      type: 'healing'
    },
    {
      track: '081',
      valence: 0.3333,
      arousal: 0.2568,
      pleasentness: 0.3146,
      latitude: 19.38,
      longitude: -155.90,
      blurb:
        '<b>This healing prayer chant reaches out to the Hawaiian goddess Hi\'iaka.</b> This song is sung in the tradition of the 19th century Hawaiian chant style "oli," an unaccompanied song with long sustained notes. The lyrics of the song describe a peaceful scene of rain, shade, and breeze to grant a lady health into old age.',
      citation:
        'This song is called "Mele pule ho\'ola no Hi\'iaka, prayer chant for healing," and is Track 4 on a CD called "Na Leo Hawai\'i Kahiko: Voices of Old Hawaii." This CD was published in 1997 by the Bernice P. Bishop Museum in Honolulu.',
      type: 'healing'
    },
    {
      track: '082',
      valence: 0.7971,
      arousal: 0.7792,
      pleasentness: 0.6876,
      latitude: -21.10,
      longitude: 167.82,
      blurb:
        '<b>This dance song was performed by the Kanak people of Melanesia.</b> In this recording, a choir of men and women sung to accompany a dance performed by elderly women who mimed pulling a canoe along the beach. This is an example of a song with influences from both its indigenous culture and European colonization.',
      citation:
        'This song is called "Dance of Tiga: Uke cao naso," and is Track 12 on a CD called "Chants Kanaks." This CD was published in 1990 by Harmonia Mundi in Arles, France.',
      type: 'dancing'
    },
    {
      track: '083',
      valence: 0.7315,
      arousal: 0.6526,
      pleasentness: 0.62,
      latitude: 36.79,
      longitude: 10.00,
      blurb:
        '<b>This is a healing song from Tunisia in Northern Africa that accompanies trance rituals.</b> This culture uses a complex system of rhythms where the tempi of the music and the dance are not necessarily synchronized. In this particular song, the person being healed dances with fire and is surrounded by the musicians. As the rhythm accelerates to a climax, the dancer loses consciousness, indicating that the possessing entity has left them.',
      citation:
        'This song is called "Sīdī bū ra\'s el-\\‘ajmī," and is Track 4 on a CD called "Stambeli: Music, Trance, and Alterity in Tunisia." This CD was published in 2010 by the University of Chicago Press in Chicago.',
      type: 'healing'
    },
    {
      track: '084',
      valence: 0.465,
      arousal: 0.4447,
      pleasentness: 0.3833,
      latitude: 36.58,
      longitude: 46.28,
      blurb:
        '<b>This Kurdish dance song is in the form of a royne, a form popular in the Mukriyan area in the Middle East.</b> In this style, two singers sing alternate verses that accompany parallel lines of dancing men and women. Kurdish music varies as a function of locale and social strata, and this particular song is taken from the third class. This recording is not a professional performance, and instead represents music taken from the fabric of everyday social activities.',
      citation:
        'This song is called "Royne: Çî bû çit lê kirdim," and is Side B, Track 5 on a CD called "Kurdish Folk Music from Western Iran." This CD was published in 1966 by Folkways Records in New York.',
      type: 'dancing'
    },
    {
      track: '085',
      valence: 0.5541,
      arousal: 0.4767,
      pleasentness: 0.5316,
      latitude: 11.66,
      longitude: 37.96,
      blurb:
        '<b>This traditional love song is from the Amhara region of Ethiopia.</b> In this recording, the singer is accompanied by a krar (or Ethiopian lyre), which is an instrument that is traditionally understood to be powerful in invoking destructive human impulses such as hatred or carnal love.',
      citation:
        'This song is called "Shemonmuanaye," and is Side 2, Track 1 on an LP called "The Music of Ethiopia: Azmari Music of the Amharas." This LP was published in 1969 by the Anthology Record and Tape Corporation in New York.',
      type: 'love'
    },
    {
      track: '086',
      valence: 0.5111,
      arousal: 0.3353,
      pleasentness: 0.3826,
      latitude: 46.97,
      longitude: -65.63,
      blurb:
        "<b>This is a love song from the Mi'kmaq First Nations people located in Northeastern Maine and Canada.</b> Music plays an important role in Mi’kmaq cultural events such as spiritual rituals, feasts, mawiomi (gatherings), cultural ceremonies, and powwows. A subset of Mi’kmaq music relies on syllables (rather than words) as a means of expressing emotion.",
      citation:
        'This song is called "Micmac love song; Lenny Ward," and is ATL 8861, Track 1.13 on a recording cylinder called "United States, Virginia and Maine; Canada, Quebec, New Brunswick, and Newfoundland; Various North American Indian Groups, 1909-1911." This cylinder was published in 1979 by the Indiana University Press in Bloomington, Indiana, USA.',
      type: 'love'
    },
    {
      track: '087',
      valence: 0.2717,
      arousal: 0.2316,
      pleasentness: 0.3179,
      latitude: 51.92,
      longitude: -129.92,
      blurb:
        '<b>This is a lullaby from the Haida culture of the Pacific Northwest Coast of North America.</b> Songs such as these are very difficult to collect due to their ritualistic and sacred use. Many Haida songs feature syllables and sounds that have been passed down through continued performance, but the exact meanings have been lost over time.',
      citation:
        'This song is called "Lullaby Song," and is Disc 2, Track 2 on the CD "Haida: Indian Music of the Pacific Northwest." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'lullaby'
    },
    {
      track: '088',
      valence: 0.4154,
      arousal: 0.3812,
      pleasentness: 0.3973,
      latitude: -19.16,
      longitude: -61.47,
      blurb:
        '<b>This is a dance song from the Wichí (or Mataco) South American Indians of the Gran Chaco region.</b> The Wichí speak an independent language and live mostly between the Bermejo and Pilcomayo rivers in northeastern Argentina.',
      citation:
        'This track is called "Dance/chant ring of men," and is Track 5 on the CD "Argentina: The Indians of the Gran Chaco." This CD was published in 2005 by Lyrichord Discs Inc in New York.',
      type: 'dancing'
    },
    {
      track: '089',
      valence: 0.7138,
      arousal: 0.6545,
      pleasentness: 0.7486,
      latitude: 4.03,
      longitude: -55.47,
      blurb:
        '<b>This dance song is from the Saramaka people of Suriname and French Guiana.</b> The dance accompanies an athletically impressive dance in which a man balances on long horizontal poles that are supported and moved by two other individuals. In the 1970s, this festive dance morphed into a similar form where the dancer performs on stilts.',
      citation:
        'This song is called "Alesingo," and is Side 1, Track 3 on the LP "From Slavery to Freedom: Music of the Saramaka Maroons, Suriname." This LP was published in 1981 by Lyrichord Discs in New York.',
      type: 'dancing'
    },
    {
      track: '090',
      valence: 0.5737,
      arousal: 0.5034,
      pleasentness: 0.512,
      latitude: -1.56,
      longitude: 99.03,
      blurb:
        '<b>This is a dance song from the Mentawai people located off the western coast of Sumatra in Indonesia.</b> The song accompanies what is traditionally a performance in praise of Bilou, the local species of Gibbon (a type of primate). The dancers either remain still while singing, or stamp in rhythm on the loose floorboards while making animal noises. Sometimes, the dancers enter a trance during their performance. When this happens, the steady beat of the drum accelerates and switches to a different rhythm.',
      citation:
        'This song is called "Urai turuk bilou," and is Track 16 on the CD "Music from the Forests of Riau and Mentawai." This CD was published in 1995 by Folkways Records in Washington, D.C..',
      type: 'dancing'
    },
    {
      track: '091',
      valence: 0.7688,
      arousal: 0.7565,
      pleasentness: 0.7157,
      latitude: 6.03,
      longitude: 0.99,
      blurb:
        '<b>This is a traditional dance song from Ghana derived from an old war dance of the Ewe people.</b> Its function is primarily recreational and social, and it is used to welcome people of every class, age, sex, and religion to join together in dance. As the music unfolds, there are sections dedicated to prayer for gods and ancestors, historical and philosophical reflection, and other types of dancing that may last for hours.',
      citation:
        'This song is called "Agbadza," and is Track 2 on the CD "Ghana Rhythms of the People: Traditional Music and Dance of the Ewe, Dagbamba, Fante, and Ga People." This CD was published in 2000 by Multicultural Media in Montpelier, Vermont, USA.',
      type: 'dancing'
    },
    {
      track: '092',
      valence: 0.5304,
      arousal: 0.4788,
      pleasentness: 0.5639,
      latitude: 28.78,
      longitude: 83.57,
      blurb:
        '<b>This is a love song from the Thakali of Nepal, a group comprised of around 10,000 people.</b> It is thought that the "Thak" etymology of this word comes from the Tibetan word for "distant country," referring to how this group was historically elusive of Tibetan control.',
      citation:
        'This song is called "Nepali Love Song," and is Side 1, Track 1 on the LP "Songs and Dances of Nepal." This LP was published in 1964 by Smithsonian Folkways Records in New York.',
      type: 'love'
    },
    {
      track: '093',
      valence: 0.4348,
      arousal: 0.3343,
      pleasentness: 0.5096,
      latitude: 9.57,
      longitude: -78.82,
      blurb:
        "<b>This is a lullaby from the Kuna culture located in Panama and parts of Colombia.</b> Lullabies such as this one were an important aspect of children's education about their social role. These lullabies are also a rare case of female vocal expression, a role usually assigned to men in Kuna society.",
      citation:
        'This song is "Lullaby for a little boy," and is Track 2 on the CD "Music of the Indians of Panama: The Cuna (Tule) & Chocoe (Embera) Tribes." This CD was published in 2001 by Smithsonian Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '094',
      valence: 0.3148,
      arousal: 0.2526,
      pleasentness: 0.2541,
      latitude: 7.42,
      longitude: 151.73,
      blurb:
        '<b>This is a love song to a married woman recorded in the Chuuk State within the Federated States of Micronesia.</b> The lyrics roughly translate to "Do not speak of me / I sent you a short look / From the boat, Leuota. / But don\'t take it up / The word which I spoke to you, / My eyes look at you / From under a beautiful canopy."',
      citation:
        'This song is called "Angi: Love Song to a Married Woman," and is Disc 1, Side B, Track 10 on the LP "The Demonstration Collection of E.M. von Hornbostel and the Berlin Phonogramm-Archiv." This LP was published in 1963 by Smithsonian Folkways Records in New York.',
      type: 'love'
    },
    {
      track: '095',
      valence: 0.2518,
      arousal: 0.278,
      pleasentness: 0.322,
      latitude: -54.56,
      longitude: -67.72,
      blurb:
        '<b>This is a lullaby of the Ona people, who used to inhabit the largest island of Tierra del Fuego located at the tip of Argentina.</b> The Ona had no musical instruments in their culture, but singing was very common. The singer on this track is a ninety-year old woman who was the last surviving shaman of her group. In this lullaby, she repeats, "ala," which is the word for baby in their language.',
      citation:
        'This song is called "Lullaby no. 45," and is Disc 2, Track 29 on the CD "Selk\'nam Chants of Tierra del Fuego." This CD was published in 2004 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '096',
      valence: 0.4933,
      arousal: 0.4638,
      pleasentness: 0.4267,
      latitude: 48.16,
      longitude: -95.10,
      blurb:
        '<b>This is a healing song from the Native Ojibwa people from around the Great Lakes of North America.</b> This song is sung after a healing ceremony conducted with bones and the lyrics recall a dream in which the doctor received his power.',
      citation:
        'This song is called "The Approach of the Thunderbirds," and is Track 1 on the CD "Healing Songs of the American Indians." This CD was published in 2000 by Folkways Records in New York.',
      type: 'healing'
    },
    {
      track: '097',
      valence: 0.4076,
      arousal: 0.3678,
      pleasentness: 0.4952,
      latitude: 42.86,
      longitude: 21.88,
      blurb:
        '<b>This love song is in a form that was once traditionally sung at gatherings in a village in southeastern Serbia.</b> It is sung by a solo singer, and the lyrics develop with each repetition of the melody line.',
      citation:
        'This song is called "Omile mi un selo devojce (I fell in love with a girl in the village)," and is Track 27 on the CD "Serbia: An Anthology of Serbian Folk Music." This CD was published in 1999 by VDE-GALLO Records in Lausanne, Switzerland.',
      type: 'love'
    },
    {
      track: '098',
      valence: 0.6714,
      arousal: 0.5737,
      pleasentness: 0.5763,
      latitude: 16.61,
      longitude: -92.64,
      blurb:
        '<b>This is a dance song of the Tzeltal people in Chiapas, México.</b> This type of song is called the Bolonchón (or tiger dance) and describes the daily life of a tiger. The song is accompanied by a harp and a twelve-string guitar.',
      citation:
        'This song is called "El bolonchon," and is Track 12 on the CD "Música Indígena de los Altos de Chiapas." This CD was published in 2002 by Instituto Nacional de Antropología e Historia in Mexico City.',
      type: 'dancing'
    },
    {
      track: '099',
      valence: 0.4944,
      arousal: 0.3257,
      pleasentness: 0.4595,
      latitude: 73.04,
      longitude: -85.15,
      blurb:
        '<b>This is a lullaby from the Iglulik Inuit people of the Arctic and Subarctic.</b> The most popular musical form in this culture is throat singing. In this practice, two women will sit face to face and try to outperform the other in a battle to see who can sing for the longest.',
      citation:
        'This song is called "Lullabies and Aqausiit: Lullaby," and is Track 37 on the CD "Songs of the Inuit Iglulik." This CD was published in 2004 by Witness in Barcelona.',
      type: 'lullaby'
    },
    {
      track: '100',
      valence: 0.4862,
      arousal: 0.28,
      pleasentness: 0.3672,
      latitude: -13.31,
      longitude: -71.59,
      blurb:
        '<b>This is a lullaby of the Q\'ero people of the Central Andes in South America.</b> The lyrics of this song roughly translate to, "Chi, chi, chi wawa (baby) that you might learn to work the potatoes, young one."',
      citation:
        'This song is called "Lullaby," and is Track 32 on the CD "Mountain Music of Perú." This CD was published in 1991 by Smithsonian Folkways in Washington, D.C..',
      type: 'lullaby'
    },
    {
      track: '101',
      valence: 0.3975,
      arousal: 0.37,
      pleasentness: 0.6286,
      latitude: 45.55,
      longitude: -73.72,
      blurb:
        '<b>This song is a lullaby from the Haudenosaunee (or Iroquois) people native to North America.</b> This recording was taken on the south side of the St. Lawrence River on a Haudenosaunee reservation not far from Montreal. Today, the Haudenosaunee live on the Grand River and the Bay of Quinte on the northern shore of Ontario, as well as the Akwesasne and Kahnawake Territories in Quebec.',
      citation:
        'This song is called "Iroqois lullaby," and is Side 1, Track 2 on the LP "Canada\'s Story in Song." This LP was published in 1960 by Folkways Records in New York.',
      type: 'lullaby'
    },
    {
      track: '102',
      valence: 0.4364,
      arousal: 0.4434,
      pleasentness: 0.4819,
      latitude: 49.51,
      longitude: 136.91,
      blurb:
        '<b>This is a healing song from the Nanai people of Northern Asia.</b> Although the meaning of this song remains unknown, the lyrics to a similar song roughly translate to: "If anything comes out of me, out of my mouth, it will come from my ancestors, my spirits. Do not feel hurt, even if I don\'t always talk like I should."',
      citation:
        'This song is called "Shamanic song with uŋtu drum," and is Track 8 on the CD "Chant Chamaniques et Quotidiens du Bassin de L\'amour." This CD was published in 1997 by Buda Musique in Paris.',
      type: 'healing'
    },
    {
      track: '103',
      valence: 0.7416,
      arousal: 0.6467,
      pleasentness: 0.6754,
      latitude: 57.62,
      longitude: -7.33,
      blurb:
        '<b>The "Puirt-a-beul" is a type of dance song native to the Highland Scots.</b> The name directly translates to "tunes from a mouth." While it is used for merriment and dance, this type of song stems from the banning of the bagpipes following the 1745 rebellion against England, and was also used during the time of Calvinism when music was seen as a sin and instruments were burned.',
      citation:
        'This song is called "Puirt-a-beul," and is Side 1, Track 3 on the LP "Songs and Pipes of the Hebrides." This LP was published in 1961 by Folkways Records in New York.',
      type: 'dancing'
    },
    {
      track: '104',
      valence: 0.3395,
      arousal: 0.331,
      pleasentness: 0.3948,
      latitude: 37.00,
      longitude: 45.51,
      blurb:
        '<b>This is a love song of the Kurds in the Middle East.</b> The song is referred to as Heyran, which is the name of a genre of songs native to Kurdish culture. They do not traditionally utilize individual titles for songs of this type. This recording features singer Hadji Hemedere of Indirgaş when she performed this song outside in the open air.',
      citation:
        'This song is called "Heyran," and is Side 2, Track 2 on the LP "Kurdish Folk Music from Western Iran." This LP was published in 1966 by Folkways Records in New York.',
      type: 'love'
    },
    {
      track: '105',
      valence: 0.3667,
      arousal: 0.3308,
      pleasentness: 0.4753,
      latitude: -3.09,
      longitude: 115.28,
      blurb:
        '<b>This is a love song native to the Kelabit people of Southeast Asia.</b> In this particular culture, proposals involve singing a song to your significant other, so "Adtah ulus lagku ai-ai" was performed as a marriage request.',
      citation:
        'This song is called "Adtah ulus lagku ai-ai - kelabit," and is Track 11 on the CD "Bornéo: Music of the Dayak and of the Punan." This CD was published in 1999 by Buda Musique in Paris.',
      type: 'love'
    },
    {
      track: '106',
      valence: 0.5803,
      arousal: 0.6419,
      pleasentness: 0.6175,
      latitude: 65.63,
      longitude: 171.70,
      blurb:
        '<b>This is a dance song of the Chukchee people of Northern Asia.</b> The title of this song translates roughly to "Shell Dance." Chukchee music is deeply connected to nature, with many songs containing imitations of bird songs, animal cries, and even the breathing of reindeer.',
      citation:
        'This song is called "La danse des coquillages" or "Shell dance," and is Track 1 on the CD "Russian Far North: The Chukchi." This CD was published in 1997 by PlayaSound in Boulogne, France.',
      type: 'dancing'
    },
    {
      track: '107',
      valence: 0.4026,
      arousal: 0.3475,
      pleasentness: 0.4639,
      latitude: -19.16,
      longitude: -61.47,
      blurb:
        '<b>This is a healing song from the Wichí (or Mataco) people of South America.</b> The title of this song roughly translates to "Poisonous Bites Song." In Wichí culture, medicine men will sing to the ill in order to heal them of their sickness.',
      citation:
        'This song is called "Poisonous bites song," and is Track 14 on the CD "Argentina: The Indians of the Gran Chaco." This CD was published in 2005 by Lyrichord Discs Inc in New York.',
      type: 'healing'
    },
    {
      track: '108',
      valence: 0.4351,
      arousal: 0.3951,
      pleasentness: 0.3671,
      latitude: -25.00,
      longitude: 135.00,
      blurb:
        '<b>This is a healing song from the Walbiri people of Australia.</b> There are roughly 5,000-6,000 Walbiri still living in the Northern portion of Australia and only about 3,000 who still speak their native language.',
      citation:
        'This song is called "Women\'s secret Yowalyu ceremonies," and is Track 37A on the LP "Australian and New Guinea Musical Records." This LP was published in 1957 by the University of Sydney in Sydney, Australia.',
      type: 'healing'
    },
    {
      track: '109',
      valence: 0.4822,
      arousal: 0.2683,
      pleasentness: 0.4293,
      latitude: 10.83,
      longitude: -73.69,
      blurb:
        '<b>This is a healing song of the Kogi people, an indigenous ethnic group that lives in the Sierra Nevada de Santa Marta in Colombia.</b> The core belief of the Kogi people is that they are children of the earth. They believe in "Aluna," the great mother who is the force behind nature. Additionally, the Kogi people rely on their spiritual leader, Mámas, for guidance, healing, and leadership.',
      citation:
        'This song is called "Canto \'de curación,\'" and is Side 1, Track 7 on the LP "Música Indígena y Folklórica de Colombia." This LP was published in 1971 by Importaciones Daro in Colombia.',
      type: 'healing'
    },
    {
      track: '110',
      valence: 0.675,
      arousal: 0.6551,
      pleasentness: 0.6901,
      latitude: 34.00,
      longitude: -112.00,
      blurb:
        '<b>This is a dance song of the Native American Hopi people.</b> This song accompanies a dance in which the dancer steps into a hoop and then moves their body in order to get the hoop up to the top of their head. The song is meant as encouragement for the dancer.',
      citation:
        'This song is called "Hoop dance song," and is Track 14 on the CD "Hopi Katcina Songs and Six Other Songs by Hopi Chanters." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'dancing'
    },
    {
      track: '111',
      valence: 0.4265,
      arousal: 0.3065,
      pleasentness: 0.4933,
      latitude: 36.05,
      longitude: -106.07,
      blurb:
        "<b>This is a lullaby from the Native American Hopi people.</b> Performed by Clarence Taptuka, this song's lyrics compare a baby riding on their mother's back to a beetle riding upon another beetle. This is one of the most famous lullabies within this culture.",
      citation:
        'This song is called "Sleep song," and is Track 8 on the CD "A Cry from the Earth: Music of the North American Indians." This CD was published in 2001 by Smithsonian Folkways Recordings in New York.',
      type: 'lullaby'
    },
    {
      track: '112',
      valence: 0.6265,
      arousal: 0.5627,
      pleasentness: 0.529,
      latitude: 0.24,
      longitude: -78.26,
      blurb:
        '<b>This is a healing song from the Otavalo people of South America.</b> The title of this song roughly translates to "Magical Healing Session," and is used to assist in the treatment of the ill.',
      citation:
        'This song is called "Séance de guérison magique," and is Side B, Track 2-3 on the LP "Equateur: Indiens Jivaro, Cayapa, Otavalo." This LP was published in 1960 by Vogue Contrepoint in Paris.',
      type: 'healing'
    },
    {
      track: '113',
      valence: 0.395,
      arousal: 0.3743,
      pleasentness: 0.4817,
      latitude: 0.96,
      longitude: 31.43,
      blurb:
        "<b>This is a healing song of the Ganda people of Eastern Africa.</b> During this recording, a doctor laid a sick child upon his knees and gave him medicine while singing. At the same time, the doctor's assistant shook an Akanyege, a gourd with sand or pebbles inside.",
      citation:
        'This song is called "Traditional doctor\'s cure," and is Track 7 on the CD "Uganda and Other African Nations: Feasts of the Savanna: A Musical Journey through East and West Africa." This CD was published in 1997 by Multicultural Media in Barre, VT.',
      type: 'healing'
    },
    {
      track: '114',
      valence: 0.3536,
      arousal: 0.3229,
      pleasentness: 0.4242,
      latitude: 7.38,
      longitude: 143.91,
      blurb:
        '<b>This is a lullaby from the Yapese people of Micronesia.</b> In this recording, the singer Letachipei Maria can be heard singing to her nine month old granddaughter, Lagiyelmang Grace, while she tries to lull the infant to sleep.',
      citation:
        'This song is called "Cradle song," and is Track 31 on the CD "Spirit of Micronesia." This CD was published in 1995 by Saydisc Records in Wotton-under-Edge, Gloucestershire, United Kingdom.',
      type: 'lullaby'
    },
    {
      track: '115',
      valence: 0.4516,
      arousal: 0.4602,
      pleasentness: 0.4367,
      latitude: 27.64,
      longitude: -110.30,
      blurb:
        "<b>This is a dance song from the Yaqui people of Northern Mexico.</b> This is one of their famous deer songs, which are viewed as a tribute to sacrifices made by deer so that the Yaqui people can live. This particular song is accompanied by dancers who wear rattles while the performers sing from the deer's perspective.",
      citation:
        'This song is called "Baile del venado: El palo verde," and is Side 1, Track 10 on the LP "Folk Music of Mexico." This LP was published in 1959 by the Library of Congress in Washington, D.C..',
      type: 'dancing'
    },
    {
      track: '116',
      valence: 0.5375,
      arousal: 0.4565,
      pleasentness: 0.5089,
      latitude: 1.56,
      longitude: 28.45,
      blurb:
        '<b>This is a healing song from the Mbuti people of Central Africa.</b> The Mbuti do not typically turn to sources beyond the forest for medical help. Therefore, this song is used in place of foreign medicine and serves as a way to help the ill.',
      citation:
        'This song is called "Curative song," and is Side B, Track 9 on the LP "TR-125: Sons d\' Afrique (Congo Mbuti/Pygmy)." This LP was published in 1952 by the International Library of African Music in Johannesburg, South Africa.',
      type: 'healing'
    },
    {
      track: '117',
      valence: 0.4683,
      arousal: 0.281,
      pleasentness: 0.3761,
      latitude: 21.68,
      longitude: 102.10,
      blurb:
        '<b>This is a lullaby from the Phunoi people of Southeast Asia.</b> In this recording, the singer uses a soft, high pitched voice to soothe the infant.',
      citation:
        'This song is called "Berceuse / Lullaby," and is Track 18 on the CD "Music of Laos." This CD was published in 2004 by Maison des Cultures du Monde in Paris.',
      type: 'lullaby'
    },
    {
      track: '118',
      valence: 0.5405,
      arousal: 0.4892,
      pleasentness: 0.6108,
      latitude: 36.07,
      longitude: -109.19,
      blurb:
        "<b>This is a love song of the Navajo tribe native to the United States.</b> It is performed by Reg Begay who sings about how he doesn't care that his relationship with a beautiful woman has ended but cannot stop thinking about her.",
      citation:
        'This song is called "I didn\'t care," and is Track 1 on the CD "Traditional Navajo Songs." This CD was published in 1998 by Canyon Records in Phoenix, Arizona.',
      type: 'love'
    }
  ];

// // Stimuli for the drone version of experiment (this is the pitch in HZ of the highest amplitude frequency in the complex tone)
// const drones = [
// "480", "494", "509", "523", "539", "555", "571", "588", "605", 
// "622", "641", "659", "679", "699", "719", "740", "762", "784", 
// "807", "831", "855", "880", "906", "933"
// ];

// // Stimuli for the two-tone version of experiment
// const two_tones = [
//   {"freq":"480","down":"shepard_480_down.mp3","up":"shepard_480_up.mp3"},{"freq":"509","down":"shepard_509_down.mp3","up":"shepard_509_up.mp3"},
//   {"freq":"539","down":"shepard_539_down.mp3","up":"shepard_539_up.mp3"},{"freq":"571","down":"shepard_571_down.mp3","up":"shepard_571_up.mp3"},
//   {"freq":"605","down":"shepard_605_down.mp3","up":"shepard_605_up.mp3"},{"freq":"641","down":"shepard_641_down.mp3","up":"shepard_641_up.mp3"},
//   {"freq":"679","down":"shepard_679_down.mp3","up":"shepard_679_up.mp3"},{"freq":"719","down":"shepard_719_down.mp3","up":"shepard_719_up.mp3"},
//   {"freq":"762","down":"shepard_762_down.mp3","up":"shepard_762_up.mp3"},{"freq":"807","down":"shepard_807_down.mp3","up":"shepard_807_up.mp3"},
//   {"freq":"855","down":"shepard_855_down.mp3","up":"shepard_855_up.mp3"},{"freq":"906","down":"shepard_906_down.mp3","up":"shepard_906_up.mp3"}
// ];

// const baby_melodies = [
//   {"stimulus":"melody1_6.mp3"},{"stimulus":"melody10_10.mp3"},{"stimulus":"melody100_10.mp3"},{"stimulus":"melody11_1.mp3"},
//   {"stimulus":"melody12_8.mp3"},{"stimulus":"melody13_6.mp3"},{"stimulus":"melody14_12.mp3"},{"stimulus":"melody15_4.mp3"},
//   {"stimulus":"melody16_1.mp3"},{"stimulus":"melody17_2.mp3"},{"stimulus":"melody18_5.mp3"},{"stimulus":"melody19_10.mp3"},
//   {"stimulus":"melody2_7.mp3"},{"stimulus":"melody20_5.mp3"},{"stimulus":"melody21_5.mp3"},{"stimulus":"melody22_6.mp3"},
//   {"stimulus":"melody23_9.mp3"},{"stimulus":"melody24_6.mp3"},{"stimulus":"melody25_9.mp3"},{"stimulus":"melody26_11.mp3"},
//   {"stimulus":"melody27_4.mp3"},{"stimulus":"melody28_8.mp3"},{"stimulus":"melody29_9.mp3"},{"stimulus":"melody3_1.mp3"},
//   {"stimulus":"melody30_5.mp3"},{"stimulus":"melody31_1.mp3"},{"stimulus":"melody32_8.mp3"},{"stimulus":"melody33_1.mp3"},
//   {"stimulus":"melody34_8.mp3"},{"stimulus":"melody35_3.mp3"},{"stimulus":"melody36_9.mp3"},{"stimulus":"melody37_5.mp3"},
//   {"stimulus":"melody38_3.mp3"},{"stimulus":"melody39_7.mp3"},{"stimulus":"melody4_1.mp3"},{"stimulus":"melody40_3.mp3"},
//   {"stimulus":"melody41_12.mp3"},{"stimulus":"melody42_5.mp3"},{"stimulus":"melody43_2.mp3"},{"stimulus":"melody44_11.mp3"},
//   {"stimulus":"melody45_11.mp3"},{"stimulus":"melody46_1.mp3"},{"stimulus":"melody47_10.mp3"},{"stimulus":"melody48_12.mp3"},
//   {"stimulus":"melody49_6.mp3"},{"stimulus":"melody5_9.mp3"},{"stimulus":"melody50_6.mp3"},{"stimulus":"melody51_11.mp3"},
//   {"stimulus":"melody52_1.mp3"},{"stimulus":"melody53_6.mp3"},{"stimulus":"melody54_11.mp3"},{"stimulus":"melody55_4.mp3"},
//   {"stimulus":"melody56_8.mp3"},{"stimulus":"melody57_7.mp3"},{"stimulus":"melody58_5.mp3"},{"stimulus":"melody59_2.mp3"},
//   {"stimulus":"melody6_8.mp3"},{"stimulus":"melody60_5.mp3"},{"stimulus":"melody61_2.mp3"},{"stimulus":"melody62_9.mp3"},
//   {"stimulus":"melody63_10.mp3"},{"stimulus":"melody64_10.mp3"},{"stimulus":"melody65_2.mp3"},{"stimulus":"melody66_6.mp3"},
//   {"stimulus":"melody67_9.mp3"},{"stimulus":"melody68_11.mp3"},{"stimulus":"melody69_12.mp3"},{"stimulus":"melody7_1.mp3"},
//   {"stimulus":"melody70_4.mp3"},{"stimulus":"melody71_11.mp3"},{"stimulus":"melody72_8.mp3"},{"stimulus":"melody73_7.mp3"},
//   {"stimulus":"melody74_2.mp3"},{"stimulus":"melody75_11.mp3"},{"stimulus":"melody76_7.mp3"},{"stimulus":"melody77_1.mp3"},
//   {"stimulus":"melody78_12.mp3"},{"stimulus":"melody79_8.mp3"},{"stimulus":"melody8_7.mp3"},{"stimulus":"melody80_6.mp3"},
//   {"stimulus":"melody81_7.mp3"},{"stimulus":"melody82_6.mp3"},{"stimulus":"melody83_11.mp3"},{"stimulus":"melody84_12.mp3"},
//   {"stimulus":"melody85_12.mp3"},{"stimulus":"melody86_1.mp3"},{"stimulus":"melody87_1.mp3"},{"stimulus":"melody88_1.mp3"},
//   {"stimulus":"melody89_10.mp3"},{"stimulus":"melody9_6.mp3"},{"stimulus":"melody90_5.mp3"},{"stimulus":"melody91_8.mp3"},
//   {"stimulus":"melody92_10.mp3"},{"stimulus":"melody93_7.mp3"},{"stimulus":"melody94_9.mp3"},{"stimulus":"melody95_9.mp3"},
//   {"stimulus":"melody96_11.mp3"},{"stimulus":"melody97_11.mp3"},{"stimulus":"melody98_12.mp3"},{"stimulus":"melody99_6.mp3"}
// ];