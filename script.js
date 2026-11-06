/**
 * METAWKA WEB STUDIO - VANILLA JAVASCRIPT
 * Полностью статичная версия с оригинальным дизайном
 */

(function() {
  'use strict';
  
  // ========== I18N ==========
  const I18N = {
    ru: {
      play: 'Играть',
      pause: 'Пауза',
      more: 'Весь плейлист',
      less: 'Свернуть',
      lyrics: 'Текст',
      aboutLabel: 'Обо мне',
      factAge: 'возраст',
      valAge: '18 лет.',
      factCountry: 'страна',
      valCountry: 'Россия.',
      factCity: 'город',
      valCity: 'Кострома.',
      factLanguages: 'языки',
      stackLabel: 'Стек',
      stackPackagesSuffix: 'пакетов',
      linksLabel: 'Где меня найти',
      gearLabel: 'Мой сетап',
      gearCpu: 'процессор',
      gearGpu: 'видеокарта',
      gearRam: 'память & ssd',
      gearSys: 'система / os',
      gearDisplays: 'мониторы',
      gearTools: 'софт & тулы',
      friendsLabel: 'Друзья',
      friendsTitle: 'ДРУЗЬЯ',
      friendsSub: 'тиммейты & лучшие кодеры :3',
      friendsToast: ':3 Список друзей: Astartes (мой любимый <3), FMAWR и все котики из чата!',
      steamLabel: 'Steam @heck1337',
      steamStatus: 'в сети · Steam',
      steamLevel: 'lvl',
      steamHoursUnit: 'часов в играх',
      steamBadgesStat: 'значков',
      steamGamesStat: 'игр в библиотеке',
      steamBio: '«I\'m just a regular gamer :3»',
      steamBadgeDesc: 'Избранный значок & недавние игры',
      dcCategory: 'Активность',
      dcWorkspace: 'heck43 · 0 ошибок',
      dcElapsed: 'Прошло: 1 ч 42 мин',
      clockLabel: 'Сейчас у меня',
      clockZoneLabel: 'таймзона',
      clockZone: 'Москва · UTC+3',
      ghOpenRepos: 'открытых репозиториев',
      ghPrivateRepos: 'звёзд & подписчик',
      ghSince: 'на гитхабе с',
      visitLabel: 'Ты на сайте',
      visitNote: 'твой номер среди уникальных посетителей за сегодня',
      stickerToast: ':3 heck43 посылает тебе лучи тепла и чистого кода!',
      tagline: 'Мне очень сильно лень писать хоть что-то, поэтому пожалуйста сделайте вид, что вам всё понятно.',
      tzLabel: 'МСК',
      dcActivity: 'Слушает музыку & пишет код',
      friendsModalTitle: 'ДРУЗЬЯ',
      friendsModalCount: '2 mutuals',
      friendsIntro: 'Котики, тиммейты и лучшие разработчики, с которыми мы пишем код, сводим треки и играем :3',
      friendsBack: 'Назад к списку',
      detailAboutCollab: '// О ДРУГЕ & ОБЩИЕ ПРОЕКТЫ',
      detailFavGames: 'Любимые игры',
      detailStackTools: 'Стек & Софт',
      detailCopyDone: 'Ник скопирован! :3',
      boykisserToast: ':3 Ты любишь целовать мальчиков, да? :3',
      trackNoAudio: ':3 Аудиофайл для этого трека ещё не добавлен! Ждём музыку :3',
      navHome: 'На главную'
    },
    en: {
      play: 'Play',
      pause: 'Pause',
      more: 'Full playlist',
      less: 'Collapse',
      lyrics: 'Lyrics',
      aboutLabel: 'About me',
      factAge: 'age',
      valAge: '18 years old.',
      factCountry: 'country',
      valCountry: 'Russia.',
      factCity: 'city',
      valCity: 'Kostroma.',
      factLanguages: 'languages',
      stackLabel: 'Stack',
      stackPackagesSuffix: 'packages',
      linksLabel: 'Where to find me',
      gearLabel: 'My Setup',
      gearCpu: 'processor',
      gearGpu: 'graphics card',
      gearRam: 'ram & ssd',
      gearSys: 'os & system',
      gearDisplays: 'displays',
      gearTools: 'soft & tools',
      friendsLabel: 'Friends',
      friendsTitle: 'FRIENDS',
      friendsSub: 'teammates & best coders :3',
      friendsToast: ":3 Heck43's friends: Astartes (мой любимый <3), FMAWR and everyone in chat!",
      steamLabel: 'Steam @heck1337',
      steamStatus: 'online · Steam',
      steamLevel: 'lvl',
      steamHoursUnit: 'hours on record',
      steamBadgesStat: 'badges',
      steamGamesStat: 'games in library',
      steamBio: '"I\'m just a regular gamer :3"',
      steamBadgeDesc: 'Featured badge & recent games',
      dcCategory: 'Activity',
      dcWorkspace: 'heck43 · 0 errors',
      dcElapsed: 'Elapsed: 1h 42m',
      clockLabel: 'Right now for me',
      clockZoneLabel: 'timezone',
      clockZone: 'Moscow · UTC+3',
      ghOpenRepos: 'public repositories',
      ghPrivateRepos: 'stars & follower',
      ghSince: 'on github since',
      visitLabel: 'You are here',
      visitNote: 'your visitor number among today\'s unique visits',
      stickerToast: ':3 heck43 sends you warmth and clean code!',
      tagline: 'I\'m way too lazy to write anything here, so please just pretend that you understand everything.',
      tzLabel: 'MSK',
      dcActivity: 'Listening to music & coding',
      friendsModalTitle: 'FRIENDS',
      friendsModalCount: '2 mutuals',
      friendsIntro: 'Close mutuals, coders and teammates we build projects, mix tracks and game with :3',
      friendsBack: 'Back to list',
      detailAboutCollab: '// ABOUT & COLLABORATIONS',
      detailFavGames: 'Favorite games',
      detailStackTools: 'Stack & Tools',
      detailCopyDone: 'Nick copied! :3',
      boykisserToast: ':3 You like kissing boys, don\'t you? :3',
      trackNoAudio: ':3 Audio file not added yet! Waiting for track :3',
      navHome: 'Back to home'
    }
  };
  
  // ========== MUSIC CONFIGURATION ==========
  // ========== MUSIC CONFIGURATION ==========
  const DEFAULT_TRACKS = [
  {
    "id": "femtanyl-all-the-time",
    "title": "ALL THE TIME",
    "artist": "Femtanyl",
    "duration": "2:38",
    "cover": "media/tracks/femtanyl-all-the-time.jpg",
    "url": "media/tracks/femtanyl-all-the-time.mp3",
    "ytUrl": "https://music.youtube.com/watch?v=DmosSTWbp1M",
    "lyrics": [
      {
        "time": 1.6,
        "text": "You know I do it all the time"
      },
      {
        "time": 6.9,
        "text": "You know I do it all the time"
      },
      {
        "time": 10.7,
        "text": "You know I do it all the time"
      },
      {
        "time": 13.4,
        "text": "You know I do it all the time"
      },
      {
        "time": 17.4,
        "text": "You know I do it all the time"
      },
      {
        "time": 19.9,
        "text": "You know I do it all the time"
      },
      {
        "time": 25,
        "text": "You know I, you know I"
      },
      {
        "time": 29.9,
        "text": "You know I, you know I do it all the time"
      },
      {
        "time": 31.5,
        "text": "Brand new bodily fluid on the carpet"
      },
      {
        "time": 34.2,
        "text": "Can't find the air to breathe"
      },
      {
        "time": 36.6,
        "text": "I'm too scared to move from this spot"
      },
      {
        "time": 40.7,
        "text": "I can't remember my name"
      },
      {
        "time": 42,
        "text": "What the fuck is wrong with this image?"
      },
      {
        "time": 45.6,
        "text": "You look like you seen a ghost"
      },
      {
        "time": 48.1,
        "text": "Passed out in a pool of my own sick"
      },
      {
        "time": 50.6,
        "text": "I don't think I'll make it to the phone"
      },
      {
        "time": 53.6,
        "text": "I don't think I'll make it to the phone"
      },
      {
        "time": 56.3,
        "text": "I don't think I'll make it to the phone"
      },
      {
        "time": 61.6,
        "text": "You know I do it all the time"
      },
      {
        "time": 66.7,
        "text": "You know I, you know I"
      },
      {
        "time": 71.7,
        "text": "You know I, you know I do it all the time"
      },
      {
        "time": 73.2,
        "text": "I'll change face and my last name"
      },
      {
        "time": 76,
        "text": "Change my face and my last name"
      },
      {
        "time": 78.2,
        "text": "For you"
      },
      {
        "time": 79,
        "text": "I'll change face and my last name"
      },
      {
        "time": 81,
        "text": "Change my face and my last name"
      },
      {
        "time": 83.3,
        "text": "For you"
      },
      {
        "time": 84.1,
        "text": "I'll change face and my last name"
      },
      {
        "time": 85.7,
        "text": "Change my face and my last name"
      },
      {
        "time": 88.4,
        "text": "For you"
      },
      {
        "time": 91.9,
        "text": "Ill Change face and my"
      },
      {
        "time": 93.8,
        "text": "I don't get the point of asking"
      },
      {
        "time": 96.5,
        "text": "God for something that I don't deserve"
      },
      {
        "time": 100,
        "text": "I think I laughed a bit too hard, I think it hurt"
      },
      {
        "time": 103.8,
        "text": "I took the mirrors out my house"
      },
      {
        "time": 105.9,
        "text": "I just can't stand to make it worse"
      },
      {
        "time": 108.9,
        "text": "I just can't look her in the eye"
      },
      {
        "time": 111.6,
        "text": "I just can't keep my promise to her"
      },
      {
        "time": 114.7,
        "text": "I don't get the point of asking"
      },
      {
        "time": 117.5,
        "text": "God for something that I don't deserve (That I don't deserve)"
      },
      {
        "time": 120.4,
        "text": "I think I laughed a bit too hard, I think it hurt"
      },
      {
        "time": 124.5,
        "text": "I took the mirrors out my house"
      },
      {
        "time": 126.9,
        "text": "I just can't stand to make it worse"
      },
      {
        "time": 129.6,
        "text": "I just can't look her in the eye"
      },
      {
        "time": 132.4,
        "text": "I just can't keep my promise to her, but I won't"
      }
    ]
  },
  {
    "id": "femm-down-down-down-down",
    "title": "Down Down Down Down",
    "artist": "FEM&M",
    "duration": "2:22",
    "cover": "media/tracks/femm-down-down-down-down.jpg",
    "url": "media/tracks/femm-down-down-down-down.mp3",
    "ytUrl": "https://music.youtube.com/watch?v=cnk6rjHfWAA",
    "lyrics": [
      {
        "time": 0,
        "text": "Down down, down"
      },
      {
        "time": 2.8,
        "text": "Down down, down (-vity)"
      },
      {
        "time": 5.9,
        "text": "Down down down down gravity"
      },
      {
        "time": 8.6,
        "text": "Down down down down gravity"
      },
      {
        "time": 11.1,
        "text": "Down down down down gravity"
      },
      {
        "time": 14.2,
        "text": "Down down down down gravity"
      },
      {
        "time": 16.9,
        "text": "Down down down down gravity"
      },
      {
        "time": 19.9,
        "text": "Down down down down gravity"
      },
      {
        "time": 32.4,
        "text": "I just keep on fall fall falling"
      },
      {
        "time": 34.3,
        "text": "New car keys and a better wage"
      },
      {
        "time": 35.3,
        "text": "I'm still stuck on the same page page page"
      },
      {
        "time": 36.6,
        "text": "I keep falling I keep on falling falling"
      },
      {
        "time": 39.8,
        "text": "New apartment keys hanging right by the door"
      },
      {
        "time": 40.9,
        "text": "I don't even know what I'm waiting for for for"
      },
      {
        "time": 42.5,
        "text": "I keep falling I keep on falling falling"
      },
      {
        "time": 45.3,
        "text": "I'm falling from stars and I can't go back back back back"
      },
      {
        "time": 47.9,
        "text": "I drop through the clouds"
      },
      {
        "time": 48.1,
        "text": "While the sky turned black black black black black"
      },
      {
        "time": 51.1,
        "text": "People on the plane keep looking at me me me me"
      },
      {
        "time": 53.6,
        "text": "Their all heads up high"
      },
      {
        "time": 54.3,
        "text": "And they know where to be be be be be"
      },
      {
        "time": 56.6,
        "text": "But they already know what worked for them"
      },
      {
        "time": 57.8,
        "text": "They could never guess how they did it again"
      },
      {
        "time": 59.4,
        "text": "They got answers after they already won"
      },
      {
        "time": 60.9,
        "text": "Whats the point if it's already done"
      },
      {
        "time": 62.4,
        "text": "Every voice becomes another noise I"
      },
      {
        "time": 63.7,
        "text": "Can't even tell what's being said"
      },
      {
        "time": 64.9,
        "text": "I screaming through overwhelmed"
      },
      {
        "time": 66.3,
        "text": "By all the voices that are inside my head"
      },
      {
        "time": 73.6,
        "text": "All the years I thought I would rise"
      },
      {
        "time": 75,
        "text": "Watch my future pass right before my eyes"
      },
      {
        "time": 76.2,
        "text": "I keep falling I keep on falling falling"
      },
      {
        "time": 79.1,
        "text": "Fallings the feeling when you scroll late at night"
      },
      {
        "time": 80.6,
        "text": "Watching all the people who just got it right"
      },
      {
        "time": 81.9,
        "text": "I keep falling I keep on falling falling"
      },
      {
        "time": 84.7,
        "text": "401ks and a retirement plans"
      },
      {
        "time": 86,
        "text": "I'm still trying to figure out who I even am"
      },
      {
        "time": 87.6,
        "text": "I just keep on fall fall fall falling"
      },
      {
        "time": 97,
        "text": "I never thought I'd even be this high"
      },
      {
        "time": 100.3,
        "text": "I know I should be grateful"
      },
      {
        "time": 103.1,
        "text": "But I just can't help it"
      },
      {
        "time": 105.7,
        "text": "You know I'm afraid of heights"
      },
      {
        "time": 118.6,
        "text": "New wedding rings and a mortgage paid"
      },
      {
        "time": 119.9,
        "text": "I got old dreams that refuse to"
      },
      {
        "time": 121,
        "text": "Fade fade fade fade fade fade fade fade fade"
      },
      {
        "time": 124.4,
        "text": "New apartment keys hanging right by the door"
      },
      {
        "time": 125.5,
        "text": "I don't even know what I'm waiting"
      },
      {
        "time": 126.6,
        "text": "For for for for for for for for for"
      },
      {
        "time": 130.1,
        "text": "401ks and a retirement plans"
      },
      {
        "time": 131.1,
        "text": "I'm still trying to figure out"
      },
      {
        "time": 131.7,
        "text": "Who I even am am am am am am am am am"
      },
      {
        "time": 135.7,
        "text": "Every fall feels heavier now"
      },
      {
        "time": 137,
        "text": "Like extra weight that I keep missing"
      },
      {
        "time": 138.5,
        "text": "Out out out out out out out out out"
      }
    ]
  },
  {
    "id": "renard-trauma",
    "title": "Trauma",
    "artist": "Renard (LapFox)",
    "duration": "3:20",
    "cover": "media/tracks/renard-trauma.jpg",
    "url": "media/tracks/renard-trauma.mp3",
    "ytUrl": "https://music.youtube.com/watch?v=FmQHjsokgfc",
    "lyrics": [
      {
        "time": 0,
        "text": "[Intro - TU4AR]"
      },
      {
        "time": 4.5,
        "text": "LapFox Trax archive · Speedcore sequence engaged"
      },
      {
        "time": 16,
        "text": "[Section 1 - 200 BPM]"
      },
      {
        "time": 22,
        "text": "Heavy rolling 909 kick drum incoming"
      },
      {
        "time": 36,
        "text": "Distorted rave synth arpeggios flying"
      },
      {
        "time": 50,
        "text": "Chopped vocal fragments in the mix"
      },
      {
        "time": 68,
        "text": "[Breakdown]"
      },
      {
        "time": 74,
        "text": "Trauma... pure electronic adrenaline :3"
      },
      {
        "time": 92,
        "text": "Synthesizer leads screaming in the night"
      },
      {
        "time": 108,
        "text": "[Drop 2 - Full Speedcore]"
      },
      {
        "time": 122,
        "text": "High-speed kicks & syncopated snare rolls"
      },
      {
        "time": 145,
        "text": "Speedcore rhythm reaching maximum intensity"
      },
      {
        "time": 168,
        "text": "[Outro]"
      },
      {
        "time": 182,
        "text": "Fade out into analogue static."
      }
    ]
  },
  {
    "id": "unfamiliar-123",
    "title": "123 (the longest dream)",
    "artist": "(un)familiar. & STOMACH BOOK",
    "duration": "3:33",
    "cover": "media/tracks/unfamiliar-123.jpg",
    "url": "media/tracks/unfamiliar-123.mp3",
    "ytUrl": "https://music.youtube.com/watch?v=ZjnDvUDIzKk",
    "lyrics": [
      {
        "time": 8.5,
        "text": "Is this thing on?"
      },
      {
        "time": 9.8,
        "text": "Uhm, hi"
      },
      {
        "time": 33.7,
        "text": "(Yuh!) I knew some day, I'd be stabbed in the back"
      },
      {
        "time": 35.8,
        "text": "But I couldn't imagine that it'd be you"
      },
      {
        "time": 37.7,
        "text": "I took my shovel out straight to the back"
      },
      {
        "time": 39.3,
        "text": "And I didn't dig one grave, you see, I dug two"
      },
      {
        "time": 41.2,
        "text": "Your two cents too much"
      },
      {
        "time": 42,
        "text": "The tools are too fine"
      },
      {
        "time": 42.9,
        "text": "You swing against me"
      },
      {
        "time": 43.6,
        "text": "The sword got two sides"
      },
      {
        "time": 44.3,
        "text": "I grip on you like I grip my Blåhaj"
      },
      {
        "time": 46.3,
        "text": "Your face turns blue and I think of new times"
      },
      {
        "time": 47.9,
        "text": "Pushed me to the edge, now we both off the cliff"
      },
      {
        "time": 49.5,
        "text": "Maybe we fly or end up in abyss"
      },
      {
        "time": 51.4,
        "text": "All of these problems across my mind"
      },
      {
        "time": 53,
        "text": "The world is a fucked up place sometimes"
      },
      {
        "time": 54.8,
        "text": "There's 13 reasons why we should be done"
      },
      {
        "time": 56.3,
        "text": "Now let's create problems, one hundred and one"
      },
      {
        "time": 58.2,
        "text": "Pain, pain, pain, feel the angst"
      },
      {
        "time": 60.8,
        "text": "Hold onto my torn-up sweater sleeves"
      },
      {
        "time": 64,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 67.5,
        "text": "We stand on the edge and count one, two, three"
      },
      {
        "time": 70.9,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 74.4,
        "text": "We lived in a cage, but we die so free"
      },
      {
        "time": 77.6,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 81.1,
        "text": "Now I'm waking up from the longest dream"
      },
      {
        "time": 84.5,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 94.5,
        "text": "One, two, three, jump"
      },
      {
        "time": 103.2,
        "text": "I got punch drunk off your spit"
      },
      {
        "time": 104.8,
        "text": "Too bad it's come to blows"
      },
      {
        "time": 106.3,
        "text": "One, two, three meals off my skin"
      },
      {
        "time": 108.3,
        "text": "A diet for the crows"
      },
      {
        "time": 109.8,
        "text": "My hide is your shield just to hide from the weather"
      },
      {
        "time": 111.3,
        "text": "We came in as one, now we dying together"
      },
      {
        "time": 113.1,
        "text": "Denying my feathers, I'm peacocking, boo"
      },
      {
        "time": 114.6,
        "text": "Left a crack in my head, now, I'm coming to roost"
      },
      {
        "time": 116.7,
        "text": "On three, let's jump off the roof (What?)"
      },
      {
        "time": 118.4,
        "text": "On three, let's jump off the roof (What?)"
      },
      {
        "time": 120.3,
        "text": "On three, let's jump off the roof (What?)"
      },
      {
        "time": 121.9,
        "text": "On three, let's jump off the roof"
      },
      {
        "time": 122.4,
        "text": "Hold onto my torn-up sweater sleeves"
      },
      {
        "time": 125.7,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 129.2,
        "text": "We stand on the edge and count one, two, three"
      },
      {
        "time": 132.5,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 136,
        "text": "We lived in a cage, but we die so free"
      },
      {
        "time": 139.5,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 142.7,
        "text": "Now I'm waking up from the longest dream"
      },
      {
        "time": 146.2,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 150.8,
        "text": "Hold onto my torn-up sweater sleeves"
      },
      {
        "time": 153.2,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 156.5,
        "text": "You hold me so close and count one, two, three"
      },
      {
        "time": 159.8,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 163.6,
        "text": "We lived in a cage, but we die so free"
      },
      {
        "time": 166.7,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 170.1,
        "text": "Now come wake me up from the longest dream"
      },
      {
        "time": 173.6,
        "text": "We wanted this, we wanted this"
      },
      {
        "time": 177.2,
        "text": "We wanted this"
      }
    ]
  },
  {
    "id": "mailpup-puppyplay",
    "title": "PUPPYPLAY!",
    "artist": "MAILPUP ft. femtanyl & sixwing",
    "duration": "2:30",
    "cover": "media/tracks/mailpup-puppyplay.jpg",
    "url": "media/tracks/mailpup-puppyplay.mp3",
    "ytUrl": "https://music.youtube.com/watch?v=yg9nZQ0Cfa8",
    "lyrics": [
      {
        "time": 17.1,
        "text": "Would you be my pet tonight"
      },
      {
        "time": 19.5,
        "text": "Until the darkness turns to light"
      },
      {
        "time": 22.3,
        "text": "I love you like the stars above"
      },
      {
        "time": 24.6,
        "text": "Now just give in to your owner's love"
      },
      {
        "time": 27.3,
        "text": "Let me leash you to the bed"
      },
      {
        "time": 29.7,
        "text": "And we can play 'til the sheets stain red"
      },
      {
        "time": 32.4,
        "text": "I'll play vet, I'll be your healer"
      },
      {
        "time": 34.8,
        "text": "So play with me, my welpenspieler"
      },
      {
        "time": 50.2,
        "text": "Oh, it's easy, I lost to time"
      },
      {
        "time": 52.4,
        "text": "Got a fever of a hundred and I'm feeling alright"
      },
      {
        "time": 54.9,
        "text": "Made it outta life in prison without even a fine"
      },
      {
        "time": 57.5,
        "text": "Made it out with no convictions, I like to be bright"
      },
      {
        "time": 60.7,
        "text": "I will find you in the nightlife"
      },
      {
        "time": 63.2,
        "text": "I will kill you in my next life"
      },
      {
        "time": 65.5,
        "text": "I sell the all new nine to five"
      },
      {
        "time": 68.2,
        "text": "You stole just what I need"
      },
      {
        "time": 70.7,
        "text": "I give permission for the right price"
      },
      {
        "time": 73.2,
        "text": "I'm on a mission gonna act right"
      },
      {
        "time": 75.8,
        "text": "Make no decision per the deadline"
      },
      {
        "time": 78.3,
        "text": "You got a valid fight attacking vertical"
      },
      {
        "time": 90.8,
        "text": "I can't run, don't want to hide"
      },
      {
        "time": 93.4,
        "text": "Rip my throat out, drink my life"
      },
      {
        "time": 95.9,
        "text": "Push me down onto my knees"
      },
      {
        "time": 98.6,
        "text": "Make it endless, play with me"
      },
      {
        "time": 101,
        "text": "Leave me mangy, knot my fur"
      },
      {
        "time": 103.6,
        "text": "Kill me softly with a purr"
      },
      {
        "time": 106.1,
        "text": "Take my phone and don't be sweet"
      },
      {
        "time": 108.6,
        "text": "Let the world know I'm your meat"
      }
    ]
  },
  {
    "id": "russelbuck-bass-down-low",
    "title": "b-b-BASS DOWN LOW",
    "artist": "r u s s e l b u c k",
    "duration": "2:15",
    "cover": "media/tracks/russelbuck-bass-down-low.jpg",
    "url": "media/tracks/russelbuck-bass-down-low.mp3",
    "ytUrl": "https://music.youtube.com/watch?v=_ZHgGc176vQ",
    "lyrics": [
      {
        "time": 0,
        "text": "(Ru-ru-ru-russelbuck!)"
      },
      {
        "time": 2.2,
        "text": "B-b-b-bass down low, low, low, low, low"
      },
      {
        "time": 6.5,
        "text": "I-I-I like my beats fast and my bass down-"
      },
      {
        "time": 10,
        "text": "Bass bass down low, b-bass bass down low"
      },
      {
        "time": 13.5,
        "text": "I-I-I like my beats fast and my bass down low"
      },
      {
        "time": 17,
        "text": "It's like - straight buzzin' Robotussin'"
      },
      {
        "time": 20.5,
        "text": "Wanna get ya mitts in my oven?"
      },
      {
        "time": 23.8,
        "text": "Wanna get a lick of this lovin'?"
      },
      {
        "time": 27.2,
        "text": "G-g-g-get a lick of this lovin'?"
      },
      {
        "time": 31,
        "text": "If you wanna get with me"
      },
      {
        "time": 33.5,
        "text": "There's some things you gotta know"
      },
      {
        "time": 36,
        "text": "I like my beats fast"
      },
      {
        "time": 37.8,
        "text": "And my bass down low"
      },
      {
        "time": 40,
        "text": "B-b-b-bass down low, b-b-bass down low"
      },
      {
        "time": 44.5,
        "text": "I-I-I like my beats fast and my bass down low"
      },
      {
        "time": 48,
        "text": "Bass down low, b-b-bass down low"
      },
      {
        "time": 51.5,
        "text": "I like my beats fast and my bass down low (b-b-bass!)"
      },
      {
        "time": 55,
        "text": "It's like one, two, three, okay"
      },
      {
        "time": 58,
        "text": "Can I get a little Goose in my OJ?"
      },
      {
        "time": 61.5,
        "text": "Everyday feel like my birthday"
      },
      {
        "time": 64.8,
        "text": "And we sip champagne when we thirsty"
      },
      {
        "time": 68.2,
        "text": "Quit fronting why yo husband"
      },
      {
        "time": 71.5,
        "text": "Tryna get his mitts in my oven"
      },
      {
        "time": 74.8,
        "text": "Wanna get a lick of this lovin'?"
      },
      {
        "time": 78.5,
        "text": "Let me see your booty bounce, booty bounce"
      },
      {
        "time": 85.5,
        "text": "Bass down low, b-b-bass down low"
      },
      {
        "time": 92.5,
        "text": "I-I-I like my beats fast and my bass down low (b-b-bass!)"
      },
      {
        "time": 99.5,
        "text": "Booty booty booty booty booty bounce"
      },
      {
        "time": 113,
        "text": "Bass down low, b-b-bass down low"
      },
      {
        "time": 120.5,
        "text": "I like my beats fast and my bass down low"
      },
      {
        "time": 130,
        "text": "What made of? B-b-bass!"
      }
    ]
  },
  {
    "id": "stomach-book-circuit-bent",
    "title": "Circuit Bent",
    "artist": "STOMACH BOOK",
    "duration": "3:40",
    "cover": "media/tracks/stomach-book-circuit-bent.jpg",
    "url": "media/tracks/stomach-book-circuit-bent.mp3",
    "ytUrl": "https://music.youtube.com/watch?v=76sHbMZMXkQ",
    "lyrics": [
      {
        "time": 13.3,
        "text": "My heart is circuit bent"
      },
      {
        "time": 15.2,
        "text": "I'm getting tired of this"
      },
      {
        "time": 17.6,
        "text": "Let's wrap it up"
      },
      {
        "time": 18.9,
        "text": "Cause I know it's over"
      },
      {
        "time": 21.8,
        "text": "My heart is circuit bent"
      },
      {
        "time": 24.1,
        "text": "I'm getting tired of this"
      },
      {
        "time": 26.2,
        "text": "Let's wrap it up"
      },
      {
        "time": 27.6,
        "text": "Cause I know it's over now"
      },
      {
        "time": 30.3,
        "text": "Daydreams drip out of my eyes"
      },
      {
        "time": 33.3,
        "text": "I won't be fooled tonight"
      },
      {
        "time": 35.4,
        "text": "I'll destroy everything"
      },
      {
        "time": 39.3,
        "text": "A swollen overgrown dream"
      },
      {
        "time": 41.7,
        "text": "A sickness always building"
      },
      {
        "time": 43.7,
        "text": "Hope is a bad trip"
      },
      {
        "time": 48.1,
        "text": "My heart is circuit bent"
      },
      {
        "time": 50.2,
        "text": "I'm getting tired of this"
      },
      {
        "time": 52.4,
        "text": "Let's wrap it up"
      },
      {
        "time": 53.9,
        "text": "Cause I know it's over"
      },
      {
        "time": 56.7,
        "text": "My heart is circuit bent"
      },
      {
        "time": 58.8,
        "text": "I'm getting tired of this"
      },
      {
        "time": 61.3,
        "text": "Let's wrap it up"
      },
      {
        "time": 62.8,
        "text": "Cause I know it's over now"
      },
      {
        "time": 74,
        "text": "(One more time, a thousand times forever!)"
      },
      {
        "time": 76.4,
        "text": "Every song is"
      },
      {
        "time": 78.4,
        "text": "(One more time, a thousand times forever!)"
      },
      {
        "time": 80.9,
        "text": "Broken promises"
      },
      {
        "time": 82.7,
        "text": "(One more time, a thousand times forever!)"
      },
      {
        "time": 85.2,
        "text": "Find the pieces"
      },
      {
        "time": 87.4,
        "text": "(One more time, a thousand times forever!)"
      },
      {
        "time": 87.9,
        "text": "And put them back together"
      },
      {
        "time": 100.3,
        "text": "Let 'em have it! Let 'em have it!"
      },
      {
        "time": 103,
        "text": "Let 'em have it! Ohhh!"
      },
      {
        "time": 104.8,
        "text": "Let 'em have it! Let 'em have it!"
      },
      {
        "time": 107.5,
        "text": "Let 'em have it! Ohhh!"
      },
      {
        "time": 109.2,
        "text": "Let 'em have it! Let 'em have it!"
      },
      {
        "time": 111.6,
        "text": "Let 'em have it! Ohhh!"
      },
      {
        "time": 113.5,
        "text": "Let 'em have it! Let 'em have it!"
      },
      {
        "time": 115.1,
        "text": "Let 'em have it! Ohhh!"
      },
      {
        "time": 118.2,
        "text": "Let 'em have it! Let 'em have it!"
      },
      {
        "time": 120.6,
        "text": "Let 'em have it! Ohhh!"
      },
      {
        "time": 122.5,
        "text": "Let 'em have it! Let 'em have it!"
      },
      {
        "time": 124.5,
        "text": "Let 'em have it! Ohhh!"
      },
      {
        "time": 143.4,
        "text": "My heart is circuit bent"
      },
      {
        "time": 145.9,
        "text": "I'm getting tired of this"
      },
      {
        "time": 148,
        "text": "Let's wrap it up"
      },
      {
        "time": 149.4,
        "text": "Cause I know it's over"
      },
      {
        "time": 152.4,
        "text": "My heart is circuit bent"
      },
      {
        "time": 154.3,
        "text": "I'm getting tired of this"
      },
      {
        "time": 156.6,
        "text": "Let's wrap it up"
      },
      {
        "time": 158.1,
        "text": "Cause we know it's over now"
      },
      {
        "time": 161.3,
        "text": "Your heart is circuit bent"
      },
      {
        "time": 163.1,
        "text": "You're getting tired of this"
      },
      {
        "time": 165.4,
        "text": "Let's wrap it up"
      },
      {
        "time": 166.8,
        "text": "Cause we know it's over"
      },
      {
        "time": 169.6,
        "text": "Your heart is circuit bent"
      },
      {
        "time": 171.6,
        "text": "You're getting tired of this"
      },
      {
        "time": 173.7,
        "text": "Let's wrap it up"
      },
      {
        "time": 175.3,
        "text": "Cause we know it's over now"
      }
    ]
  }
];

  // ========== STATE ==========
  const state = {
    lang: localStorage.getItem('metawka_lang') || 'ru',
    currentTrack: 0,
    isPlaying: false,
    playlistOpen: false,
    lyricsOpen: false,
    tracks: DEFAULT_TRACKS
  };
  
  // ========== DOM CACHE ==========
  const audio = document.getElementById('audio-element');
  const btnPlay = document.getElementById('btn-play');
  const btnPlaylist = document.getElementById('btn-playlist');
  const btnLyrics = document.getElementById('btn-lyrics');
  const btnSticker = document.getElementById('btn-sticker');
  const btnGift = document.getElementById('btn-gift');
  const heroBoykisser = document.getElementById('hero-boykisser');
  const boykisserAudio = document.getElementById('boykisser-audio');
  const giftModal = document.getElementById('gift-modal');
  const giftClose = document.getElementById('gift-close');
  const toast = document.getElementById('toast');
  const toastClose = document.getElementById('toast-close');
  const progressBar = document.getElementById('progress-bar');
  const progressFill = document.getElementById('progress-fill');
  const timeCurrent = document.getElementById('time-current');
  const timeDuration = document.getElementById('time-duration');
  const liveTime = document.getElementById('live-time');
  const tzLabel = document.getElementById('tz-label');
  const player = document.getElementById('audio-player');
  const playerCover = document.getElementById('player-cover');
  const playerTitle = document.getElementById('player-title');
  const playerArtist = document.getElementById('player-artist');
  const lyricsTrack = document.getElementById('lyrics-track');
  const playlistList = document.getElementById('playlist');
  let currentActiveLyricIndex = -1;
  let userInteractingWithLyrics = false;
  let isProgrammaticScroll = false;
  let userScrollTimer = null;
  const playlistCount = document.querySelector('.mw-player-count');
  const playlistLabel = document.getElementById('playlist-label');
  const heroTagline = document.getElementById('hero-tagline');
  const dcActivity = document.getElementById('dc-activity');
  let toastTimer = null;
  let toastExitTimer = null;
  
  // ========== UTILITY ==========
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
  
  function showToast(message) {
    const toastText = document.getElementById('toast-text');
    if (toastText) toastText.textContent = message;
    clearTimeout(toastTimer);
    clearTimeout(toastExitTimer);
    toast.hidden = false;
    toast.classList.remove('out');
    toast.classList.add('is-visible');
    toastTimer = setTimeout(hideToast, 3200);
  }

  function hideToast() {
    if (!toast || toast.hidden) return;
    clearTimeout(toastTimer);
    toast.classList.remove('is-visible');
    toast.classList.add('out');
    toastExitTimer = setTimeout(() => {
      toast.hidden = true;
      toast.classList.remove('out');
    }, 360);
  }
  
  // ========== LANGUAGE ==========
  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('metawka_lang', lang);
    const dict = I18N[lang];
    
    // Update i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    
    // Update language buttons
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
    
    // Update lang thumb
    const thumb = document.querySelector('.mw-lang-thumb');
    if (thumb) thumb.className = `mw-lang-thumb ${lang}`;
    
    // Update dynamic text
    if (heroTagline) heroTagline.textContent = dict.tagline;
    if (tzLabel) tzLabel.textContent = dict.tzLabel;
    const tzDescEl = document.getElementById('tz-desc');
    if (tzDescEl && dict.clockZone) tzDescEl.textContent = dict.clockZone;
    
    // Update Friends title letter spans (Photo 3)
    const friendsTitleLetters = document.getElementById('friends-title-letters');
    if (friendsTitleLetters) {
      const titleText = dict.friendsTitle || (lang === 'ru' ? 'ДРУЗЬЯ' : 'FRIENDS');
      friendsTitleLetters.innerHTML = Array.from(titleText).map(ch => `<span class="mw-letter">${ch}</span>`).join('');
    }
  }
  
  // ========== AUDIO PLAYER ENGINE ==========
  function renderPlaylist() {
    if (!playlistList) return;
    playlistList.innerHTML = state.tracks.map((t, idx) => `
      <li class="mw-music-item">
        <button type="button" class="mw-music-btn ${idx === state.currentTrack ? 'is-active' : ''}" data-track-idx="${idx}" aria-label="${t.title} - ${t.artist}">
          <span class="mw-music-cover">
            <img src="${t.cover || 'https://s6.iimage.su/s/25/th_g8MNoUYxYcEjpzY3FHFpbIny4mOZwUBvbnIzIjKVb.jpg'}" alt="" width="36" height="36" loading="lazy">
          </span>
          <span class="mw-music-row">
            <b>${t.title}</b>
            <span>${t.artist}</span>
          </span>
          <span class="mw-music-dur-wrap">
            <span class="mw-music-dur">${t.duration || '0:00'}</span>
            <span class="mw-music-eq" aria-hidden="true"><span></span><span></span><span></span></span>
          </span>
        </button>
      </li>
    `).join('');

    if (playlistCount) {
      playlistCount.textContent = state.tracks.length;
    }

    playlistList.querySelectorAll('.mw-music-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-track-idx'), 10);
        if (!isNaN(idx)) {
          if (idx === state.currentTrack && state.isPlaying) {
            togglePlay();
          } else {
            loadTrack(idx, true);
          }
        }
      });
    });
  }

  function loadTrack(index, autoPlay = false) {
    if (index < 0 || index >= state.tracks.length) return;
    state.currentTrack = index;
    const t = state.tracks[index];

    if (playerCover && t.cover) playerCover.src = t.cover;
    if (playerTitle) playerTitle.textContent = t.title;
    if (playerArtist) playerArtist.textContent = t.artist;
    if (timeDuration) timeDuration.textContent = t.duration || '0:00';
    if (timeCurrent) timeCurrent.textContent = '0:00';
    if (progressFill) progressFill.style.width = '0%';

    // Update lyrics
    if (lyricsTrack) {
      currentActiveLyricIndex = -1;
      userInteractingWithLyrics = false;
      if (Array.isArray(t.lyrics) && t.lyrics.length > 0) {
        lyricsTrack.innerHTML = t.lyrics.map((item, i) => {
          const text = typeof item === 'string' ? item : (item.text || '');
          const time = typeof item === 'object' && item.time !== undefined ? item.time : null;
          if (!text || !text.trim()) return '<div class="mw-lyrics-spacer" style="height:8px;"></div>';
          const isSection = text.startsWith('[') && text.endsWith(']');
          const cls = isSection ? 'section-header' : 'mw-lyric-line';
          const timeAttr = time !== null ? ` data-time="${time}"` : '';
          return `<p class="${cls}" data-line-idx="${i}"${timeAttr}>${text}</p>`;
        }).join('');

        // Click on any lyric line to seek directly to that exact moment
        const lyricLines = Array.from(lyricsTrack.querySelectorAll('.mw-lyric-line'));
        lyricLines.forEach((p) => {
          p.addEventListener('click', () => {
            const timeVal = p.getAttribute('data-time');
            if (audio) {
              if (timeVal !== null && !isNaN(parseFloat(timeVal))) {
                const targetSec = parseFloat(timeVal);
                if (audio.readyState >= 1) {
                  try { audio.currentTime = targetSec; } catch (err) {}
                } else {
                  audio.addEventListener('loadedmetadata', () => {
                    try { audio.currentTime = targetSec; } catch (err) {}
                  }, { once: true });
                }
              } else if (audio.duration && isFinite(audio.duration)) {
                const idx = parseInt(p.getAttribute('data-line-idx'), 10) || 0;
                audio.currentTime = (idx / lyricLines.length) * audio.duration;
              }
              userInteractingWithLyrics = false;
              playAudio();
              updateProgress();
            }
          });
        });
      } else {
        lyricsTrack.innerHTML = '<p class="empty">Текст для этого трека пока не добавлен :3</p>';
      }
    }

    // Update active highlight in playlist
    if (playlistList) {
      playlistList.querySelectorAll('.mw-music-btn').forEach((btn, idx) => {
        btn.classList.toggle('is-active', idx === index);
      });
    }

    // Set audio source
    if (audio) {
      if (t.url && (!audio.src || !audio.src.endsWith(t.url))) {
        audio.src = t.url;
        audio.load();
      } else if (!t.url) {
        audio.removeAttribute('src');
      }
    }

    // Update OS / Bluetooth media controls
    updateMediaSession(t);

    if (autoPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  }

  function playAudio() {
    const t = state.tracks[state.currentTrack];
    if (!t) return;

    if (!t.url) {
      // Audio track URL is not set yet by user
      showToast(I18N[state.lang].trackNoAudio || ':3 Аудиофайл для этого трека ещё не добавлен! Ждём музыку :3');
      pauseAudio();
      return;
    }

    if (audio) {
      if (!audio.src || !audio.src.endsWith(t.url)) {
        audio.src = t.url;
      }
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          state.isPlaying = true;
          updatePlayButton();
          if (player) player.classList.add('is-playing');
          startAudioWaveEngine();
        }).catch(() => {
          state.isPlaying = false;
          updatePlayButton();
          if (player) player.classList.remove('is-playing');
          stopAudioWaveEngine();
        });
      }
    }
  }

  function pauseAudio() {
    if (audio) audio.pause();
    state.isPlaying = false;
    updatePlayButton();
    if (player) player.classList.remove('is-playing');
    stopAudioWaveEngine();
  }

  function togglePlay() {
    if (state.isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  function updatePlayButton() {
    if (!btnPlay) return;
    if (state.isPlaying) {
      btnPlay.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
      btnPlay.setAttribute('aria-label', I18N[state.lang].pause || 'Пауза');
    } else {
      btnPlay.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      btnPlay.setAttribute('aria-label', I18N[state.lang].play || 'Играть');
    }
  }

  function nextTrack() {
    const nextIdx = (state.currentTrack + 1) % state.tracks.length;
    loadTrack(nextIdx, state.isPlaying);
  }

  function prevTrack() {
    const prevIdx = (state.currentTrack - 1 + state.tracks.length) % state.tracks.length;
    loadTrack(prevIdx, state.isPlaying);
  }

  function updateProgress(forceScroll = false) {
    if (audio && audio.duration && isFinite(audio.duration) && audio.duration > 0) {
      const percent = (audio.currentTime / audio.duration) * 100;
      if (progressFill) progressFill.style.width = percent + '%';
      if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
      if (timeDuration) timeDuration.textContent = formatTime(audio.duration);
      if (progressBar) progressBar.setAttribute('aria-valuenow', Math.round(percent));

      // Sync active lyrics line and scroll smoothly into view
      if (lyricsTrack && state.lyricsOpen) {
        const lyricLines = Array.from(lyricsTrack.querySelectorAll('.mw-lyric-line'));
        if (lyricLines.length > 0) {
          const curTime = audio.currentTime;
          let activeIndex = -1;
          for (let i = 0; i < lyricLines.length; i++) {
            const t = parseFloat(lyricLines[i].getAttribute('data-time'));
            if (!isNaN(t) && t <= curTime + 0.15) {
              activeIndex = i;
            } else if (!isNaN(t) && t > curTime + 0.15) {
              break;
            }
          }
          if (activeIndex === -1 && curTime >= 0) {
            activeIndex = 0;
          }

          if (activeIndex !== currentActiveLyricIndex || forceScroll) {
            currentActiveLyricIndex = activeIndex;
            lyricLines.forEach((p, idx) => {
              p.classList.toggle('on', idx === activeIndex);
            });

            // Smoothly center active line if user is not currently scrolling or if forceScroll is requested
            if ((!userInteractingWithLyrics || forceScroll) && activeIndex >= 0) {
              const activeP = lyricLines[activeIndex];
              const container = activeP.closest('.mw-lyrics');
              if (container) {
                const containerRect = container.getBoundingClientRect();
                const activeRect = activeP.getBoundingClientRect();
                const offset = (activeRect.top - containerRect.top) - (containerRect.height / 2) + (activeRect.height / 2);
                isProgrammaticScroll = true;
                container.scrollTo({ top: container.scrollTop + offset, behavior: 'smooth' });
                setTimeout(() => { isProgrammaticScroll = false; }, 400);
              }
            }
          }
        }
      }
    }
  }

  function seekTo(e) {
    if (!audio || !audio.duration || !isFinite(audio.duration) || audio.duration <= 0) return;
    const rect = progressBar.getBoundingClientRect();
    if (!rect.width) return;
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = percent * audio.duration;
    if (progressFill) progressFill.style.width = (percent * 100) + '%';
    if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);

    // Reset user scroll protection and immediately center on the new active lyric line!
    userInteractingWithLyrics = false;
    currentActiveLyricIndex = -1;
    updateProgress(true);
  }

  function updateMediaSession(t) {
    if ('mediaSession' in navigator && t) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: t.title,
          artist: t.artist,
          album: 'heck43.xyz',
          artwork: [
            { src: t.cover, sizes: '512x512', type: 'image/jpeg' }
          ]
        });
        navigator.mediaSession.setActionHandler('play', () => playAudio());
        navigator.mediaSession.setActionHandler('pause', () => pauseAudio());
        navigator.mediaSession.setActionHandler('previoustrack', () => prevTrack());
        navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
      } catch (e) {}
    }
  }

  function togglePlaylist() {
    state.playlistOpen = !state.playlistOpen;
    player.classList.toggle('open', state.playlistOpen);
    if (playlistLabel) {
      playlistLabel.textContent = state.playlistOpen ? I18N[state.lang].less : I18N[state.lang].more;
    }
  }

  function toggleLyrics() {
    state.lyricsOpen = !state.lyricsOpen;
    player.classList.toggle('lyrics', state.lyricsOpen);
    if (btnLyrics) btnLyrics.classList.toggle('on', state.lyricsOpen);
    if (state.lyricsOpen) {
      userInteractingWithLyrics = false;
      currentActiveLyricIndex = -1;
      setTimeout(() => {
        updateProgress(true);
      }, 50);
    }
  }
  
  // ========== CLOCK ==========
  function updateClock() {
    const now = new Date();
    try {
      const formatter = new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'Europe/Moscow',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      if (liveTime) liveTime.textContent = formatter.format(now);
    } catch (e) {
      const offset = 3; // Europe/Moscow UTC+3
      const localTime = new Date(now.getTime() + (offset * 60 * 60 * 1000) + (now.getTimezoneOffset() * 60 * 1000));
      const hours = localTime.getHours().toString().padStart(2, '0');
      const minutes = localTime.getMinutes().toString().padStart(2, '0');
      if (liveTime) liveTime.textContent = `${hours}:${minutes}`;
    }
  }
  
  // ========== RANDOM AVATAR ENGINE ==========
  const AVATARS_LIST = [
    { type: 'image', src: 'media/avatars/avatar-hoodie.png', alt: 'heck43 hoodie' },
    { type: 'image', src: 'media/avatars/avatar-box.webp', alt: 'heck43 in box' },
    { type: 'image', src: 'media/avatars/avatar-boat.webp', alt: 'heck43 in boat' },
    { type: 'image', src: 'media/avatars/avatar-boop.png', alt: 'heck43 boop' },
    { type: 'image', src: 'media/avatars/avatar-bleh.png', alt: 'heck43 bleh' },
    { type: 'image', src: 'media/avatars/avatar-glitch.png', alt: 'heck43 glitch' },
    { type: 'image', src: 'media/avatars/avatar-loona-screen.png', alt: 'loona screen' },
    { type: 'image', src: 'media/avatars/avatar-loona-owo.png', alt: 'loona owo' },
    { type: 'video', src: 'media/avatars/avatar-sleep.webm', alt: 'heck43 sleeping' },
    { type: 'video', src: 'media/avatars/avatar-water.webm', alt: 'heck43 tap water' }
  ];

  function setRandomAvatar(animate = false) {
    const avatarContainer = document.getElementById('avatar');
    if (!avatarContainer) return;

    const currentSrc = avatarContainer.getAttribute('data-current-src');
    const candidates = AVATARS_LIST.filter(a => a.src !== currentSrc);
    const chosen = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : AVATARS_LIST[Math.floor(Math.random() * AVATARS_LIST.length)];

    avatarContainer.setAttribute('data-current-src', chosen.src);

    if (chosen.type === 'video') {
      avatarContainer.innerHTML = `<video src="${chosen.src}" autoplay loop muted playsinline width="512" height="512" aria-label="${chosen.alt}"></video>`;
      const vid = avatarContainer.querySelector('video');
      if (vid) {
        vid.play().catch(() => {});
      }
    } else {
      avatarContainer.innerHTML = `<img src="${chosen.src}" alt="${chosen.alt}" width="512" height="512" onerror="this.onerror=null;this.src='media/avatars/avatar-hoodie.png'">`;
    }

    const previewImg = chosen.type === 'video' ? 'media/avatars/avatar-hoodie.png' : chosen.src;
    const dcImg = document.querySelector('.mw-dc-ava img');
    if (dcImg) dcImg.src = previewImg;

    if (animate) {
      avatarContainer.classList.remove('bk-pop');
      void avatarContainer.offsetWidth;
      avatarContainer.classList.add('bk-pop');
    }
  }

  function initRandomAvatar() {
    setRandomAvatar(false);

    const avatarContainer = document.getElementById('avatar');
    if (avatarContainer) {
      avatarContainer.addEventListener('click', (e) => {
        e.stopPropagation();
        setRandomAvatar(true);
        showToast(':3 Новая случайная аватарка heck43!');
      });
      avatarContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setRandomAvatar(true);
          showToast(':3 Новая случайная аватарка heck43!');
        }
      });
    }
  }

  // ========== 3D AVATAR ==========
  function setupAvatarTilt() {
    const avatarStage = document.querySelector('.mw-avatar-stage');
    const avatar = document.querySelector('.mw-avatar');
    
    if (!avatarStage || !avatar) return;
    
    avatarStage.addEventListener('mousemove', (e) => {
      const rect = avatarStage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -10;
      const rotateY = (x - centerX) / centerX * 10;
      
      avatar.style.setProperty('--rx', `${rotateX}deg`);
      avatar.style.setProperty('--ry', `${rotateY}deg`);
    });
    
    avatarStage.addEventListener('mouseleave', () => {
      avatar.style.setProperty('--rx', '0deg');
      avatar.style.setProperty('--ry', '0deg');
    });
  }

  // ========== AUDIO REACTIVE AVATAR WAVES ==========
  const TRACK_BPMS = {
    'femtanyl-all-the-time': 170,
    'femm-down-down-down-down': 128,
    'renard-trauma': 200,
    'unfamiliar-123': 132,
    'mailpup-puppyplay': 175,
    'russelbuck-bass-down-low': 130,
    'stomach-book-circuit-bent': 140
  };

  let waveAnimFrame = null;
  const avatarStageEl = document.querySelector('.mw-avatar-stage');
  const avatarEl = document.getElementById('avatar');
  const waveRings = document.querySelectorAll('.mw-wave-ring');

  function startAudioWaveEngine() {
    if (avatarStageEl) avatarStageEl.classList.add('is-beating');
    if (waveAnimFrame) cancelAnimationFrame(waveAnimFrame);

    function loop() {
      if (!state.isPlaying || !audio || audio.paused || audio.ended) {
        if (avatarStageEl) avatarStageEl.classList.remove('is-beating');
        if (avatarEl) {
          avatarEl.style.borderRadius = '';
          avatarEl.style.removeProperty('--mw-avatar-scale');
        }
        return;
      }

      const t = audio.currentTime || 0;
      const currentTrackObj = state.tracks[state.currentTrack];
      const bpm = (currentTrackObj && TRACK_BPMS[currentTrackObj.id]) || 135;
      const bps = bpm / 60;

      // Soft sinusoidal beat pulse (velvety and smooth)
      const beatCycle = Math.sin((t * bps) * Math.PI * 2);
      const kick = Math.max(0, beatCycle);

      // Gentle organic morphing radii (soft, fluid breathing)
      const waveAmp = 7.5 + kick * 4.5;
      const r1 = Math.round(48 + Math.sin(t * 1.7 + 0.0) * waveAmp);
      const r2 = Math.round(52 + Math.cos(t * 1.5 + 1.2) * waveAmp);
      const r3 = Math.round(49 + Math.sin(t * 1.9 + 2.3) * waveAmp);
      const r4 = Math.round(51 + Math.cos(t * 1.4 + 3.5) * waveAmp);
      const r5 = Math.round(53 + Math.cos(t * 1.8 + 4.7) * waveAmp);
      const r6 = Math.round(47 + Math.sin(t * 2.0 + 1.6) * waveAmp);
      const r7 = Math.round(50 + Math.cos(t * 1.6 + 2.8) * waveAmp);
      const r8 = Math.round(50 + Math.sin(t * 1.5 + 5.2) * waveAmp);

      const radiusStr = `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r3}% ${100 - r4}%`;

      if (avatarEl) {
        avatarEl.style.borderRadius = radiusStr;
        // Keep 3D mouse look-around tilt (--rx, --ry) completely intact!
        const scale = 1 + kick * 0.024;
        avatarEl.style.setProperty('--mw-avatar-scale', scale.toFixed(4));
      }

      waveRings.forEach(ring => {
        ring.style.borderRadius = radiusStr;
      });

      waveAnimFrame = requestAnimationFrame(loop);
    }

    waveAnimFrame = requestAnimationFrame(loop);
  }

  function stopAudioWaveEngine() {
    if (waveAnimFrame) cancelAnimationFrame(waveAnimFrame);
    if (avatarStageEl) avatarStageEl.classList.remove('is-beating');
    if (avatarEl) {
      avatarEl.style.borderRadius = '';
      avatarEl.style.removeProperty('--mw-avatar-scale');
    }
  }
  
  // ========== EVENTS ==========
  function initEvents() {
    // Audio
    if (btnPlay) btnPlay.addEventListener('click', togglePlay);
    if (audio) {
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('loadedmetadata', () => {
        if (timeDuration && audio.duration && isFinite(audio.duration)) {
          timeDuration.textContent = formatTime(audio.duration);
        }
      });
      audio.addEventListener('ended', () => {
        stopAudioWaveEngine();
        nextTrack();
      });
      audio.addEventListener('play', () => {
        state.isPlaying = true;
        updatePlayButton();
        if (player) player.classList.add('is-playing');
        startAudioWaveEngine();
      });
      audio.addEventListener('pause', () => {
        state.isPlaying = false;
        updatePlayButton();
        if (player) player.classList.remove('is-playing');
        stopAudioWaveEngine();
      });
      audio.addEventListener('error', () => {
        state.isPlaying = false;
        updatePlayButton();
        if (player) player.classList.remove('is-playing');
        stopAudioWaveEngine();
      });
    }
    if (progressBar) {
      let isDragging = false;
      progressBar.addEventListener('pointerdown', (e) => {
        isDragging = true;
        try { progressBar.setPointerCapture(e.pointerId); } catch(err) {}
        seekTo(e);
      });
      progressBar.addEventListener('pointermove', (e) => {
        if (isDragging) {
          seekTo(e);
        }
      });
      const endDrag = (e) => {
        if (isDragging) {
          isDragging = false;
          try { progressBar.releasePointerCapture(e.pointerId); } catch(err) {}
        }
      };
      progressBar.addEventListener('pointerup', endDrag);
      progressBar.addEventListener('pointercancel', endDrag);
      progressBar.addEventListener('click', seekTo);
      progressBar.addEventListener('keydown', (e) => {
        if (!audio || !audio.duration || !isFinite(audio.duration) || audio.duration <= 0) return;
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
          userInteractingWithLyrics = false;
          currentActiveLyricIndex = -1;
          updateProgress(true);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          audio.currentTime = Math.max(0, audio.currentTime - 5);
          userInteractingWithLyrics = false;
          currentActiveLyricIndex = -1;
          updateProgress(true);
        }
      });
    }
    if (btnPlaylist) btnPlaylist.addEventListener('click', togglePlaylist);
    if (btnLyrics) btnLyrics.addEventListener('click', toggleLyrics);
    
    // Lyrics user scroll protection (don't fight user when they scroll manually)
    const lyricsContainer = document.querySelector('.mw-lyrics');
    if (lyricsContainer) {
      const markUserScroll = () => {
        if (isProgrammaticScroll) return;
        userInteractingWithLyrics = true;
        if (userScrollTimer) clearTimeout(userScrollTimer);
        userScrollTimer = setTimeout(() => {
          userInteractingWithLyrics = false;
        }, 3200);
      };
      lyricsContainer.addEventListener('wheel', markUserScroll, { passive: true });
      lyricsContainer.addEventListener('touchmove', markUserScroll, { passive: true });
      lyricsContainer.addEventListener('pointerdown', markUserScroll, { passive: true });
      lyricsContainer.addEventListener('scroll', markUserScroll, { passive: true });
    }
    
    // Sticker (:3) triggers random avatar change & toast
    if (btnSticker) {
      btnSticker.addEventListener('click', () => {
        setRandomAvatar(true);
        showToast(I18N[state.lang].stickerToast);
      });
    }

    // Hero Boykisser (:3)
    if (heroBoykisser) {
      const triggerBoykisser = () => {
        heroBoykisser.classList.remove('bk-pop');
        // trigger reflow to re-run bounce animation
        void heroBoykisser.offsetWidth;
        heroBoykisser.classList.add('bk-pop');
        
        // Play authentic Boykisser meow sound
        try {
          const sound = boykisserAudio || new Audio('media/boykisser-meow.mp3');
          sound.currentTime = 0;
          sound.volume = 0.85;
          const playPromise = sound.play();
          if (playPromise && playPromise.catch) {
            playPromise.catch(() => {});
          }
        } catch (e) {}

        showToast(I18N[state.lang].boykisserToast || ':3 Ты любишь целовать мальчиков, да? :3');
      };
      heroBoykisser.addEventListener('click', triggerBoykisser);
      heroBoykisser.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerBoykisser();
        }
      });
    }
    
    // Gift modal
    if (btnGift) {
      btnGift.addEventListener('click', () => {
        giftModal.style.display = 'grid';
      });
    }
    if (giftClose) {
      giftClose.addEventListener('click', () => {
        giftModal.style.display = 'none';
      });
    }
    if (giftModal) {
      giftModal.addEventListener('click', (e) => {
        if (e.target === giftModal) giftModal.style.display = 'none';
      });
    }
    
    // Toast
    if (toastClose) {
      toastClose.addEventListener('click', () => {
        hideToast();
      });
    }
    
    // Language
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });

    // =========================================================================
    // FRIENDS MODAL: PHOTO 1 (2-COL LIST) & PHOTO 2 (DETAIL VIEW WITH TILTED ARTS)
    // =========================================================================
    const FRIENDS_DATA = [
      {
        id: 'astartes',
        nick: 'Astartes',
        tag: 'мой любимый <3',
        avatarImg: 'media/friends/astartes-avatar.jpg',
        art1Img: 'media/friends/astartes-avatar.jpg',
        art2Img: 'media/friends/astartes-art.webp',
        rot1: -6,
        rot2: 5,
        fontFamily: "'Syne', sans-serif",
        role: 'мой любимый <3',
        accent: '#fb7185',
        short: 'Очень хорошенький и самый любимый человечек :3',
        status: '',
        bio: 'Очень хорошенький и самый любимый человечек на свете :3 Всегда согревает своей заботой и теплом лучше любого солнца. Ночами сидим в войсе, играем в тактические шутеры и стратегии, делимся мыслями и просто наслаждаемся каждой минуткой вместе. Моё главное счастье и лучший напарник навсегда!',
        games: ['Arma Reforger', 'Men of War: Assault Squad 2', 'Far Cry 6', 'Стратегии'],
        tools: [],
        quote: '«Единственное солнце, которому я очень рад, это ты»',
        badge1: ':3',
        badge2: '<3',
        hideCopyTag: true,
        pills: [
          { label: 'Steam', url: 'https://steamcommunity.com/profiles/76561199425128567', icon: 'steam' }
        ]
      },
      {
        id: 'fmawr',
        nick: 'FMAWR',
        tag: '@fmawr',
        avatarImg: 'media/friends/fmawr-avatar.webp',
        art1Img: 'media/friends/fmawr-avatar.webp',
        art2Img: 'media/friends/fmawr-art2.png',
        rot1: -7,
        rot2: 6,
        fontFamily: "'Orbitron', sans-serif",
        role: 'Лучший бро & мейт ^W^',
        accent: '#38bdf8',
        short: 'Самый лучший и приятный друг, с которым дружим столько лет ^W^',
        status: '',
        bio: 'Самый лучший и приятный друг, которого я встречал! Несмотря на все трудности и прошедшие годы, мы всё так же остаёмся неразлучными бро и дружим до самого конца. А то, что у нас куча общих увлечений, игр и тем для разговоров — это отдельный кайф и бесконечный угар в войсе ^W^ Настоящий тиммейт, с которым всегда уютно, весело и никогда не бывает скучно!',
        games: ['Escape from Tarkov', 'War Thunder', 'Roblox [Deadline]'],
        tools: [],
        quote: '««аморальная шутка» респект :P»',
        badge1: ':P',
        badge2: '^W^',
        hideCopyTag: true,
        pills: [
          { label: 'Steam', url: 'https://steamcommunity.com/profiles/76561199542934732', icon: 'steam' }
        ]
      }
    ];

    function createAvatarSvg(f) {
      return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad-bg-${f.id}" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="${f.accent}" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#12121a" stop-opacity="0.95"/>
          </radialGradient>
          <linearGradient id="grad-hair-${f.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="${f.accent}"/>
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="16" fill="url(#grad-bg-${f.id})"/>
        <path d="M28 34 L18 16 L38 24 Z" fill="${f.accent}" opacity="0.9"/>
        <path d="M72 34 L82 16 L62 24 Z" fill="${f.accent}" opacity="0.9"/>
        <path d="M27 31 L21 20 L34 25 Z" fill="#ffe4e6" opacity="0.8"/>
        <path d="M73 31 L79 20 L66 25 Z" fill="#ffe4e6" opacity="0.8"/>
        <circle cx="50" cy="52" r="26" fill="#f8fafc"/>
        <path d="M26 44 C34 32 66 32 74 44 C68 37 56 38 50 42 C44 38 32 37 26 44 Z" fill="url(#grad-hair-${f.id})"/>
        <ellipse cx="41" cy="52" rx="3.5" ry="5" fill="#1e1e2e"/>
        <circle cx="42" cy="50" r="1.5" fill="#ffffff"/>
        <ellipse cx="59" cy="52" rx="3.5" ry="5" fill="#1e1e2e"/>
        <circle cx="60" cy="50" r="1.5" fill="#ffffff"/>
        <circle cx="34" cy="58" r="4" fill="${f.accent}" opacity="0.4"/>
        <circle cx="66" cy="58" r="4" fill="${f.accent}" opacity="0.4"/>
        <path d="M46 58 Q48 61 50 59 Q52 61 54 58" stroke="#1e1e2e" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        <path d="M30 76 Q50 86 70 76 L75 100 L25 100 Z" fill="#1e1e28"/>
        <path d="M42 78 L50 88 L58 78" stroke="${f.accent}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`;
    }

    function createArtCard1Svg(f) {
      return `<svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="art-bg-${f.id}" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stop-color="${f.accent}" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#0e0e16" stop-opacity="0.95"/>
          </radialGradient>
          <linearGradient id="art-rim-${f.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="${f.accent}" stop-opacity="0.2"/>
          </linearGradient>
        </defs>
        <rect width="160" height="180" rx="16" fill="url(#art-bg-${f.id})"/>
        <rect x="1" y="1" width="158" height="178" rx="15" stroke="url(#art-rim-${f.id})" stroke-width="1.5"/>
        <circle cx="28" cy="30" r="2" fill="${f.accent}" opacity="0.8"/>
        <circle cx="136" cy="45" r="1.5" fill="#fff" opacity="0.9"/>
        <circle cx="22" cy="120" r="1.5" fill="${f.accent}" opacity="0.6"/>
        <path d="M48 62 L32 28 L64 44 Z" fill="${f.accent}" opacity="0.95"/>
        <path d="M112 62 L128 28 L96 44 Z" fill="${f.accent}" opacity="0.95"/>
        <path d="M47 58 L37 36 L58 46 Z" fill="#ffe4e6" opacity="0.85"/>
        <path d="M113 58 L123 36 L102 46 Z" fill="#ffe4e6" opacity="0.85"/>
        <circle cx="80" cy="85" r="38" fill="#f8fafc"/>
        <path d="M44 76 C54 54 106 54 116 76 C108 66 94 66 80 72 C66 66 52 66 44 76 Z" fill="#ffffff"/>
        <path d="M40 78 C48 94 54 102 54 102 C48 92 46 84 40 78 Z" fill="#e2e8f0"/>
        <path d="M120 78 C112 94 106 102 106 102 C112 92 114 84 120 78 Z" fill="#e2e8f0"/>
        <path d="M40 85 C40 55 120 55 120 85" stroke="${f.accent}" stroke-width="5" stroke-linecap="round" fill="none"/>
        <rect x="34" y="80" width="10" height="20" rx="4" fill="${f.accent}"/>
        <rect x="116" y="80" width="10" height="20" rx="4" fill="${f.accent}"/>
        <ellipse cx="66" cy="86" rx="5.5" ry="8" fill="#181824"/>
        <circle cx="68" cy="83" r="2.5" fill="#ffffff"/>
        <circle cx="64" cy="89" r="1.2" fill="${f.accent}"/>
        <ellipse cx="94" cy="86" rx="5.5" ry="8" fill="#181824"/>
        <circle cx="96" cy="83" r="2.5" fill="#ffffff"/>
        <circle cx="92" cy="89" r="1.2" fill="${f.accent}"/>
        <ellipse cx="55" cy="96" rx="6" ry="3" fill="${f.accent}" opacity="0.45"/>
        <ellipse cx="105" cy="96" rx="6" ry="3" fill="${f.accent}" opacity="0.45"/>
        <path d="M74 96 Q77 100 80 97 Q83 100 86 96" stroke="#181824" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <path d="M45 125 Q80 142 115 125 L125 180 L35 180 Z" fill="#181824"/>
        <path d="M68 128 L80 145 L92 128" stroke="${f.accent}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <text x="80" y="170" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="12" fill="${f.accent}" letter-spacing="1">@${f.nick}</text>
      </svg>`;
    }

    function createArtCard2Svg(f) {
      let emblem = '';
      if (f.id === 'astartes' || f.id === 'denks') {
        emblem = `
          <circle cx="80" cy="80" r="36" fill="rgba(251, 113, 133, 0.15)" stroke="${f.accent}" stroke-width="2.5"/>
          <circle cx="80" cy="80" r="14" fill="${f.accent}"/>
          <circle cx="80" cy="80" r="4" fill="#12121a"/>
          <path d="M40 135 Q80 115 120 135" stroke="${f.accent}" stroke-width="3" fill="none"/>
          <text x="80" y="42" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="11" fill="#fff" letter-spacing="2">ЛЮБИМЫЙ &lt;3</text>
        `;
      } else if (f.id === 'fmawr' || f.id === 'cybercat') {
        emblem = `
          <polygon points="80,36 126,60 126,115 80,140 34,115 34,60" fill="rgba(56, 189, 248, 0.12)" stroke="${f.accent}" stroke-width="2.5"/>
          <circle cx="80" cy="86" r="26" stroke="${f.accent}" stroke-width="2" fill="none" stroke-dasharray="6 3"/>
          <circle cx="80" cy="86" r="8" fill="${f.accent}"/>
          <line x1="48" y1="86" x2="68" y2="86" stroke="${f.accent}" stroke-width="2"/>
          <line x1="92" y1="86" x2="112" y2="86" stroke="${f.accent}" stroke-width="2"/>
          <line x1="80" y1="54" x2="80" y2="74" stroke="${f.accent}" stroke-width="2"/>
          <line x1="80" y1="98" x2="80" y2="118" stroke="${f.accent}" stroke-width="2"/>
          <text x="80" y="48" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="10" fill="#fff" letter-spacing="1">TARKOV // WT</text>
          <text x="80" y="152" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="11" fill="${f.accent}" letter-spacing="2">RESPECT :P</text>
        `;
      } else if (f.id === 'senya') {
        emblem = `
          <ellipse cx="80" cy="80" rx="36" ry="14" fill="none" stroke="${f.accent}" stroke-width="2" transform="rotate(30 80 80)"/>
          <ellipse cx="80" cy="80" rx="36" ry="14" fill="none" stroke="${f.accent}" stroke-width="2" transform="rotate(-30 80 80)"/>
          <ellipse cx="80" cy="80" rx="36" ry="14" fill="none" stroke="${f.accent}" stroke-width="2" transform="rotate(90 80 80)"/>
          <circle cx="80" cy="80" r="6" fill="#fff"/>
          <text x="80" y="145" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="10" fill="${f.accent}" letter-spacing="1">REACT &amp; BLUR</text>
        `;
      } else if (f.id === 'whitenight') {
        emblem = `
          <path d="M96 50 A30 30 0 1 0 116 95 A34 34 0 1 1 96 50 Z" fill="${f.accent}"/>
          <polygon points="80,85 64,115 96,115" fill="#ffffff" opacity="0.9"/>
          <text x="80" y="145" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="10" fill="#fff" letter-spacing="1">ARCH // 03:40</text>
        `;
      } else if (f.id === 'kotik') {
        emblem = `
          <circle cx="80" cy="86" r="18" fill="${f.accent}"/>
          <circle cx="62" cy="65" r="7" fill="${f.accent}"/>
          <circle cx="74" cy="55" r="7" fill="${f.accent}"/>
          <circle cx="86" cy="55" r="7" fill="${f.accent}"/>
          <circle cx="98" cy="65" r="7" fill="${f.accent}"/>
          <text x="80" y="145" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="12" fill="#fff" letter-spacing="2">:3 BESTIE</text>
        `;
      } else {
        emblem = `
          <circle cx="80" cy="80" r="32" fill="none" stroke="${f.accent}" stroke-width="2.5"/>
          <circle cx="80" cy="80" r="14" fill="none" stroke="${f.accent}" stroke-width="2"/>
          <circle cx="80" cy="80" r="3" fill="#fff"/>
          <line x1="42" y1="80" x2="62" y2="80" stroke="${f.accent}" stroke-width="3"/>
          <line x1="98" y1="80" x2="118" y2="80" stroke="${f.accent}" stroke-width="3"/>
          <line x1="80" y1="42" x2="80" y2="62" stroke="${f.accent}" stroke-width="3"/>
          <line x1="80" y1="98" x2="80" y2="118" stroke="${f.accent}" stroke-width="3"/>
          <text x="80" y="145" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="10" fill="#fff" letter-spacing="1">AIM GOD // 100%</text>
        `;
      }

      return `<svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="art2-bg-${f.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#181824"/>
            <stop offset="100%" stop-color="#0a0a10"/>
          </linearGradient>
        </defs>
        <rect width="160" height="180" rx="16" fill="url(#art2-bg-${f.id})"/>
        <rect x="1" y="1" width="158" height="178" rx="15" stroke="${f.accent}" stroke-opacity="0.35" stroke-width="1.5"/>
        ${emblem}
      </svg>`;
    }

    function getPillIconSvg(type) {
      if (type === 'tg') {
        return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.896-.667 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>';
      } else if (type === 'gh') {
        return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';
      } else if (type === 'steam') {
        return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0z"/></svg>';
      } else if (type === 'dc') {
        return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></svg>';
      } else {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>';
      }
    }

    // Full-page SPA Views & Elements
    const homeView = document.getElementById('home-view');
    const friendsView = document.getElementById('friends-view');
    const friendsListSubpage = document.getElementById('friends-list-subpage');
    const friendsDetailSubpage = document.getElementById('friends-detail-subpage');
    const friendsCardsContainer = document.getElementById('friends-cards-container');
    const friendsToHomeBtn = document.getElementById('friends-to-home-btn');
    const friendsBackToListBtn = document.getElementById('friends-back-to-list-btn');
    const friendsHeaderMeta = document.getElementById('friends-header-meta');
    const logoLink = document.querySelector('.mw-logo');

    // Detail Elements
    const detailNick = document.getElementById('detail-nick');
    const detailRole = document.getElementById('detail-role');
    const detailStatus = document.getElementById('detail-status');
    const detailStatusRow = document.getElementById('detail-status-row');
    const detailBio = document.getElementById('detail-bio');
    const detailQuote = document.getElementById('detail-quote');
    const detailTagAccent = document.getElementById('detail-tag-accent');
    const detailArtImg1 = document.getElementById('detail-art-img-1');
    const detailArtImg2 = document.getElementById('detail-art-img-2');
    const detailArtBadge1 = document.getElementById('detail-art-badge-1');
    const detailArtBadge2 = document.getElementById('detail-art-badge-2');
    const detailPills = document.getElementById('detail-pills');
    const detailInfoGrid = document.getElementById('detail-info-grid');
    const detailGames = document.getElementById('detail-games');
    const detailTools = document.getElementById('detail-tools');
    const detailToolsBlock = document.getElementById('detail-tools-block');

    // Helper: Wrap each letter in a span for individual interactive hover animation (Photo 3)
    function wrapLetters(str) {
      if (!str) return '';
      return Array.from(str).map(ch => {
        if (ch === ' ') return '<span class="mw-letter-space">&nbsp;</span>';
        return `<span class="mw-letter">${ch}</span>`;
      }).join('');
    }

    function renderFriendsList() {
      if (!friendsCardsContainer) return;
      const friendsBadge = document.querySelector('.mw-friends-badge');
      if (friendsBadge) friendsBadge.textContent = `${FRIENDS_DATA.length} mutuals`;
      friendsCardsContainer.innerHTML = FRIENDS_DATA.map((f, i) => `
        <div class="mw-friend-card" role="button" tabindex="0" data-friend-id="${f.id}" style="animation-delay: ${0.06 + i * 0.06}s;" aria-label="Подробнее о друге ${f.nick}">
          <div class="mw-friend-avatar-wrap">
            ${f.avatarImg ? `<img src="${f.avatarImg}" alt="${f.nick}" style="width:100%;height:100%;object-fit:cover;border-radius:22px;">` : createAvatarSvg(f)}
          </div>
          <div class="mw-friend-content">
            <div class="mw-friend-header">
              <span class="mw-friend-nick" style="font-family: ${f.fontFamily};">${wrapLetters(f.nick)}</span>
              <span class="mw-friend-tag">${f.tag}</span>
            </div>
            <p class="mw-friend-desc">${f.short}</p>
          </div>
        </div>
      `).join('');

      friendsCardsContainer.querySelectorAll('.mw-friend-card').forEach(card => {
        const handler = () => {
          const friendId = card.getAttribute('data-friend-id');
          window.location.hash = '#friends/' + friendId;
        };
        card.addEventListener('click', handler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handler();
          }
        });
      });
    }

    function showFriendDetailPage(friendId) {
      const targetId = (friendId === 'denks') ? 'astartes' : (friendId === 'cybercat') ? 'fmawr' : friendId;
      const f = FRIENDS_DATA.find(x => x.id === targetId || x.id === friendId) || FRIENDS_DATA[0];
      if (!f) return;

      if (homeView) {
        homeView.hidden = true;
        homeView.style.display = 'none';
        homeView.classList.remove('is-active');
        homeView.classList.remove('is-active-back');
      }
      if (friendsView) {
        friendsView.hidden = false;
        friendsView.style.display = 'block';
        // Re-trigger animation
        friendsView.classList.remove('is-active');
        friendsView.classList.remove('is-active-back');
        void friendsView.offsetHeight;
        friendsView.classList.add('is-active');
      }
      if (friendsListSubpage) friendsListSubpage.style.display = 'none';
      if (friendsDetailSubpage) friendsDetailSubpage.style.display = 'block';
      if (friendsBackToListBtn) friendsBackToListBtn.style.display = 'inline-flex';
      if (friendsToHomeBtn) friendsToHomeBtn.style.display = 'inline-flex';

      // Photo 3: Interactive animated letters in detail nick with unique friend font
      if (detailNick) {
        detailNick.setAttribute('aria-label', f.nick);
        detailNick.innerHTML = wrapLetters(f.nick);
        detailNick.style.fontFamily = f.fontFamily;
        // Re-trigger the CSS animation
        detailNick.style.animation = 'none';
        detailNick.offsetHeight; // force reflow
        detailNick.style.animation = '';
      }
      if (detailRole) detailRole.textContent = f.role;
      if (detailBio) detailBio.textContent = f.bio;
      if (detailQuote) detailQuote.textContent = f.quote;
      if (detailTagAccent) detailTagAccent.textContent = f.tag;

      // Status row (green dot + status text): hide completely if status is empty
      if (detailStatusRow) {
        if (f.status && f.status.trim().length > 0) {
          detailStatusRow.style.display = 'inline-flex';
          if (detailStatus) detailStatus.textContent = f.status;
        } else {
          detailStatusRow.style.display = 'none';
        }
      } else if (detailStatus) {
        detailStatus.textContent = f.status || '';
      }

      // Photo 2: Organic rotation angles per friend
      const detailArts = document.querySelector('.mw-detail-arts');
      if (detailArts) {
        const r1 = f.rot1 !== undefined ? f.rot1 : -7;
        const r2 = f.rot2 !== undefined ? f.rot2 : 6;
        detailArts.style.setProperty('--art-rot-1', `${r1}deg`);
        detailArts.style.setProperty('--art-rot-2', `${r2}deg`);
      }

      if (detailArtImg1) {
        detailArtImg1.innerHTML = f.art1Img 
          ? `<img src="${f.art1Img}" alt="${f.nick} art 1" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">` 
          : createArtCard1Svg(f);
      }
      if (detailArtImg2) {
        detailArtImg2.innerHTML = f.art2Img 
          ? `<img src="${f.art2Img}" alt="${f.nick} art 2" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">` 
          : createArtCard2Svg(f);
      }
      if (detailArtBadge1) detailArtBadge1.textContent = f.badge1;
      if (detailArtBadge2) detailArtBadge2.textContent = f.badge2;

      if (detailPills) {
        const pillsHtml = (f.pills || []).map(p => `
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="mw-detail-pill-btn" aria-label="${p.label}">
            ${getPillIconSvg(p.icon)}
            <span>${p.label}</span>
          </a>
        `).join('');

        let copyBtnHtml = '';
        if (!f.hideCopyTag) {
          copyBtnHtml = `
            <button type="button" class="mw-detail-pill-btn" id="btn-copy-tag" data-tag="${f.tag}" aria-label="Скопировать ник">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span id="copy-btn-txt">${f.tag}</span>
            </button>
          `;
        }
        detailPills.innerHTML = pillsHtml + copyBtnHtml;

        const copyBtn = document.getElementById('btn-copy-tag');
        if (copyBtn) {
          copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(f.tag).then(() => {
              showToast(I18N[state.lang].detailCopyDone || 'Ник скопирован! :3');
              const txtEl = document.getElementById('copy-btn-txt');
              if (txtEl) {
                const old = txtEl.textContent;
                txtEl.textContent = 'Скопировано!';
                setTimeout(() => { txtEl.textContent = old; }, 1500);
              }
            }).catch(() => {
              showToast(`:3 ${f.tag}`);
            });
          });
        }
      }

      if (detailGames) {
        detailGames.innerHTML = (f.games || []).map(g => `<span class="mw-detail-chip">${g}</span>`).join('');
      }

      // Software / tools block: if empty, hide the entire block and adapt grid layout
      const hasTools = Boolean(f.tools && f.tools.length > 0);
      if (detailToolsBlock) {
        detailToolsBlock.style.display = hasTools ? '' : 'none';
        if (detailTools && hasTools) {
          detailTools.innerHTML = f.tools.map(t => `<span class="mw-detail-chip">${t}</span>`).join('');
        }
      } else if (detailTools) {
        detailTools.innerHTML = hasTools ? f.tools.map(t => `<span class="mw-detail-chip">${t}</span>`).join('') : '';
      }

      if (detailInfoGrid) {
        detailInfoGrid.classList.toggle('is-single-col', !hasTools);
      }

      if (friendsView) {
        friendsView.style.setProperty('--card-accent', f.accent);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showFriendsListView() {
      if (homeView) {
        homeView.hidden = true;
        homeView.style.display = 'none';
        homeView.classList.remove('is-active');
        homeView.classList.remove('is-active-back');
      }
      if (friendsView) {
        friendsView.hidden = false;
        friendsView.style.display = 'block';
        // Re-trigger animation
        friendsView.classList.remove('is-active');
        friendsView.classList.remove('is-active-back');
        void friendsView.offsetHeight;
        friendsView.classList.add('is-active');
      }
      if (friendsDetailSubpage) friendsDetailSubpage.style.display = 'none';
      if (friendsListSubpage) friendsListSubpage.style.display = 'block';
      if (friendsBackToListBtn) friendsBackToListBtn.style.display = 'none';
      if (friendsToHomeBtn) friendsToHomeBtn.style.display = 'inline-flex';
      if (friendsHeaderMeta) friendsHeaderMeta.style.display = 'flex';
      if (friendsView) {
        friendsView.style.removeProperty('--card-accent');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showHomeView() {
      if (friendsView) {
        friendsView.hidden = true;
        friendsView.style.display = 'none';
        friendsView.classList.remove('is-active');
        friendsView.classList.remove('is-active-back');
      }
      if (homeView) {
        homeView.hidden = false;
        homeView.style.display = 'block';
        // Use backward animation (slides from top)
        homeView.classList.remove('is-active');
        homeView.classList.remove('is-active-back');
        void homeView.offsetHeight;
        homeView.classList.add('is-active-back');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleRouting() {
      const hash = window.location.hash;
      if (hash.startsWith('#friends/')) {
        const friendId = hash.replace('#friends/', '').trim();
        showFriendDetailPage(friendId);
      } else if (hash === '#friends') {
        showFriendsListView();
      } else {
        showHomeView();
      }
    }

    // Initialize list view cards
    renderFriendsList();

    // Friends card & arrow button on the main page
    const friendsCard = document.getElementById('friends-card');
    const friendsArrowBtn = document.getElementById('btn-friends');
    if (friendsCard) {
      friendsCard.addEventListener('click', () => {
        window.location.hash = '#friends';
      });
      friendsCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.hash = '#friends';
        }
      });
    }
    if (friendsArrowBtn) {
      friendsArrowBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.hash = '#friends';
      });
    }

    // Full-page Navigation buttons
    if (friendsToHomeBtn) {
      friendsToHomeBtn.addEventListener('click', () => {
        history.pushState(null, '', window.location.pathname + window.location.search);
        showHomeView();
      });
    }
    if (friendsBackToListBtn) {
      friendsBackToListBtn.addEventListener('click', () => {
        window.location.hash = '#friends';
      });
    }
    if (logoLink) {
      logoLink.addEventListener('click', (e) => {
        if (window.location.hash) {
          e.preventDefault();
          history.pushState(null, '', window.location.pathname + window.location.search);
          showHomeView();
        }
      });
    }

    // Interactive sparkle star click animation & easter egg :3
    const heroSparkleStar = document.querySelector('.mw-friends-hero-title .mw-accent-dot');
    if (heroSparkleStar) {
      heroSparkleStar.addEventListener('click', () => {
        heroSparkleStar.classList.remove('is-clicked');
        void heroSparkleStar.offsetHeight;
        heroSparkleStar.classList.add('is-clicked');
        setTimeout(() => {
          heroSparkleStar.classList.remove('is-clicked');
        }, 750);
        showToast(state.lang === 'ru' ? '✦ Звёздочка сияет для тебя и твоих друзей :3' : '✦ The star sparkles for you and your friends :3');
      });
    }

    // Hash & popstate routing
    window.addEventListener('hashchange', handleRouting);
    window.addEventListener('popstate', handleRouting);

    // Initial route handling on load
    handleRouting();

    // Stack skill bars replay animation on hover
    // Stack skill bars replay animation on hover
    document.querySelectorAll('.mw-skill').forEach(skill => {
      skill.addEventListener('mouseenter', () => {
        const bars = skill.querySelectorAll('.mw-level-bars span.on');
        bars.forEach(bar => {
          bar.style.animation = 'none';
          void bar.offsetWidth; // Force reflow
          bar.style.animation = '';
        });
      });
    });
  }

  // ========== STEAM INTEGRATION (Profile: heck1337) ==========
  const STEAM_CONFIG = {
    profileId: 'heck1337',
    steamId64: '76561199103695244',
    profileUrl: 'https://steamcommunity.com/id/heck1337/',
    defaultData: {
      steamID: 'Heck_43',
      onlineState: 'offline',
      stateMessage: 'не в сети · Steam',
      avatar: 'media/steam-avatar.jpg',
      avatarFallback: 'https://avatars.fastly.steamstatic.com/d73b71adf12fec777c7f913a017cc92111f60b92_medium.jpg',
      level: 24,
      gamesCount: '135+',
      badgesCount: 17,
      summary: "«I'm just a regular gamer :3»",
      recentGames: [
        {
          name: 'Far Cry 6',
          appId: '2369390',
          link: 'https://steamcommunity.com/app/2369390',
          icon: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2369390/0155dcf6a44343b85e682b48648d95716f92a5c6/capsule_184x69.jpg?t=1793372616',
          iconFallback: 'media/steam-farcry6.jpg',
          hours: '43 ч',
          sub: 'запуск: 6 Nov'
        },
        {
          name: 'Easy Red 2',
          appId: '1324780',
          link: 'https://steamcommunity.com/app/1324780',
          icon: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1324780/2da4a16d4e489b91dee3caaf61c8862eb6a89e75/capsule_184x69.jpg?t=1793538691',
          iconFallback: 'media/steam-easyred2.jpg',
          hours: '46 ч',
          sub: 'запуск: 6 Nov'
        },
        {
          name: 'BOYKISSER IS COMING',
          appId: '5101080',
          link: 'https://steamcommunity.com/app/5101080',
          icon: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5101080/1172010344a07c41f264541b49e3cb264408a6ca/capsule_184x69.jpg?t=1791547473',
          iconFallback: 'media/steam-calltoarms.jpg',
          hours: '0.5 ч',
          sub: 'запуск: 5 Nov'
        },
        {
          name: 'Wallpaper Engine',
          appId: '431960',
          link: 'https://steamcommunity.com/app/431960',
          icon: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg',
          iconFallback: 'media/steam-calltoarms.jpg',
          hours: '22 ч',
          sub: 'в библиотеке'
        }
      ]
    }
  };

  function renderSteamProfile(data) {
    if (!data) return;

    // Avatar
    const avatarEl = document.getElementById('steam-avatar');
    if (avatarEl && data.avatar) {
      avatarEl.src = data.avatar;
      if (data.avatarFallback) {
        avatarEl.onerror = function() {
          this.src = data.avatarFallback;
        };
      }
    }

    // Level
    const levelEl = document.getElementById('steam-level');
    if (levelEl && data.level) {
      levelEl.textContent = data.level;
    }

    // Games count & Badges count
    const gamesCountEl = document.getElementById('steam-games-count');
    if (gamesCountEl && data.gamesCount) {
      gamesCountEl.textContent = data.gamesCount;
    }
    const badgesCountEl = document.getElementById('steam-badges-count');
    if (badgesCountEl && data.badgesCount) {
      badgesCountEl.textContent = data.badgesCount;
    }

    // Bio / Summary
    const bioEl = document.getElementById('steam-bio');
    if (bioEl && data.summary) {
      bioEl.textContent = data.summary;
    }

    // Status & Avatar Dot
    const statusEl = document.querySelector('.mw-steam-status');
    const avatarDot = document.querySelector('.mw-steam-avatar-dot');
    if (statusEl) {
      const isOnline = data.onlineState === 'online' || data.onlineState === 'in-game';
      const isInGame = data.onlineState === 'in-game' || (data.stateMessage && data.stateMessage.toLowerCase().includes('in-game')) || Boolean(data.currentGame);
      
      statusEl.classList.remove('online', 'in-game', 'offline');

      if (isInGame) {
        statusEl.classList.add('in-game');
        const gameName = data.currentGame || (data.stateMessage ? data.stateMessage.replace(/^In-Game<br\/>/i, '').replace(/<[^>]*>?/gm, '').trim() : '') || 'Steam';
        statusEl.innerHTML = '<span class="mw-steam-status-dot"></span>' + (state.lang === 'ru' ? ('в игре: ' + gameName) : ('in-game: ' + gameName));
        if (avatarDot) {
          avatarDot.style.background = '#38bdf8';
          avatarDot.style.boxShadow = '0 0 10px #38bdf8';
          avatarDot.setAttribute('title', 'In Game: ' + gameName);
        }
      } else if (isOnline) {
        statusEl.classList.add('online');
        statusEl.innerHTML = '<span class="mw-steam-status-dot"></span>' + (state.lang === 'ru' ? 'в сети · Steam' : 'online · Steam');
        if (avatarDot) {
          avatarDot.style.background = '#4ade80';
          avatarDot.style.boxShadow = '0 0 6px rgba(74, 222, 128, 0.8)';
          avatarDot.setAttribute('title', 'Online · Steam');
        }
      } else {
        statusEl.classList.add('offline');
        statusEl.innerHTML = '<span class="mw-steam-status-dot"></span>' + (state.lang === 'ru' ? 'не в сети · Steam' : 'offline · Steam');
        if (avatarDot) {
          avatarDot.style.background = '#94a3b8';
          avatarDot.style.boxShadow = 'none';
          avatarDot.setAttribute('title', 'Offline · Steam');
        }
      }
    }

    // Recent games list
    if (Array.isArray(data.recentGames) && data.recentGames.length > 0) {
      const container = document.getElementById('steam-recent-games');
      if (container) {
        container.innerHTML = data.recentGames.slice(0, 4).map(game => `
          <a class="mw-game-tile" href="${game.link || 'https://steamcommunity.com/app/' + (game.appId || '')}" target="_blank" rel="noopener noreferrer">
            <div class="mw-game-icon-wrap">
              <img class="mw-game-icon" src="${game.icon}" onerror="this.src='${game.iconFallback || game.icon}'" alt="${game.name} icon" width="42" height="42" loading="lazy" />
            </div>
            <div class="mw-game-info">
              <span class="mw-game-title">${game.name}</span>
              <span class="mw-game-sub"><b class="mw-game-hrs">${game.hours}</b> · ${game.sub || (state.lang === 'ru' ? 'недавняя активность' : 'recent play')}</span>
            </div>
          </a>
        `).join('');
      }
    }
  }

  function parseSteamXml(xmlDoc) {
    try {
      const steamID = xmlDoc.querySelector('steamID')?.textContent || 'Heck_43';
      const onlineState = xmlDoc.querySelector('onlineState')?.textContent || 'online';
      const stateMessage = xmlDoc.querySelector('stateMessage')?.textContent || 'Online';
      const avatarMedium = xmlDoc.querySelector('avatarMedium')?.textContent || '';
      const avatarFull = xmlDoc.querySelector('avatarFull')?.textContent || '';
      const rawSummary = xmlDoc.querySelector('summary')?.textContent || '';
      const cleanSummary = rawSummary ? rawSummary.replace(/<[^>]*>?/gm, '').trim() : "«I'm just a regular gamer :3»";

      let currentGame = null;
      if (onlineState === 'in-game' || /in-game/i.test(stateMessage)) {
        const cleanState = stateMessage.replace(/^In-Game<br\/>/i, '').replace(/<[^>]*>?/gm, '').trim();
        currentGame = cleanState && cleanState !== 'In-Game' ? cleanState : null;
      }

      const gameNodes = xmlDoc.querySelectorAll('mostPlayedGame');
      const recentGames = [];
      gameNodes.forEach(node => {
        const name = node.querySelector('gameName')?.textContent || '';
        const link = node.querySelector('gameLink')?.textContent || '';
        const icon = node.querySelector('gameIcon')?.textContent || '';
        const hoursOnRecord = node.querySelector('hoursOnRecord')?.textContent || '';
        const hoursPlayed = node.querySelector('hoursPlayed')?.textContent || '';
        const statsName = node.querySelector('statsName')?.textContent || '';
        if (name) {
          const hours = hoursOnRecord ? `${hoursOnRecord} ч` : (hoursPlayed ? `${hoursPlayed} ч` : '');
          recentGames.push({
            name: name,
            appId: statsName,
            link: link || `https://steamcommunity.com/app/${statsName}`,
            icon: icon,
            iconFallback: icon,
            hours: hours || 'недавно',
            sub: hoursPlayed && parseFloat(hoursPlayed) > 0 ? `${hoursPlayed} ч за 2 нед.` : 'в библиотеке'
          });
        }
      });

      return {
        steamID,
        onlineState,
        stateMessage,
        currentGame,
        avatar: avatarMedium || avatarFull || 'media/steam-avatar.jpg',
        avatarFallback: avatarFull || 'media/steam-avatar.jpg',
        level: 24,
        gamesCount: '135+',
        badgesCount: 17,
        summary: cleanSummary || "«I'm just a regular gamer :3»",
        recentGames: recentGames.length > 0 ? recentGames : STEAM_CONFIG.defaultData.recentGames
      };
    } catch (e) {
      return null;
    }
  }

  async function fetchFreshSteamProfile() {
    // 1. Try Vercel Serverless API endpoints first for instant real-time sync with CORS
    const endpoints = [
      '/api/steam?_t=' + Date.now(),
      'https://heck43githubio.vercel.app/api/steam?_t=' + Date.now(),
      'data/profile-live.json?_t=' + Date.now()
    ];

    for (const ep of endpoints) {
      try {
        const res = await fetch(ep, {
          cache: 'no-store',
          signal: AbortSignal.timeout(3500)
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.steam && data.steam.steamID) {
            renderSteamProfile(data.steam);
            return;
          }
        }
      } catch (e) {}
    }
  }

  function initSteamIntegration() {
    renderSteamProfile(STEAM_CONFIG.defaultData);
    fetchFreshSteamProfile();
    // Live polling every 15 seconds
    setInterval(fetchFreshSteamProfile, 15000);
    // Instant refresh when user returns to tab
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        fetchFreshSteamProfile();
      }
    });
  }

  // ========== YOUTUBE MUSIC REAL-TIME TRACKING ==========
  let ytmTrackState = {
    title: 'ALL THE TIME',
    artist: 'Femtanyl',
    album: 'CHASER',
    cover: 'media/tracks/femtanyl-all-the-time.jpg',
    url: 'https://music.youtube.com',
    duration: 172,
    position: 48,
    isPlaying: true,
    isPaused: false
  };

  function formatYtmTime(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  }

  function renderYtmNowPlaying(data) {
    if (!data) return;
    ytmTrackState = Object.assign(ytmTrackState, data);

    const card = document.getElementById('ytm-card');
    const badge = document.getElementById('ytm-badge');
    const badgeText = document.getElementById('ytm-badge-text');
    const titleEl = document.getElementById('ytm-title');
    const artistEl = document.getElementById('ytm-artist');
    const coverEl = document.getElementById('ytm-cover');
    const coverLink = document.getElementById('ytm-cover-link');
    const stateIcon = document.getElementById('ytm-state-icon');
    const posEl = document.getElementById('ytm-pos');
    const durEl = document.getElementById('ytm-dur');
    const barFill = document.getElementById('ytm-bar-fill');
    const deviceText = document.getElementById('ytm-device-text');

    const isPlaying = Boolean(ytmTrackState.isPlaying);
    const isPaused = Boolean(ytmTrackState.isPaused);

    if (card) {
      card.setAttribute('data-status', isPlaying ? (isPaused ? 'paused' : 'playing') : 'idle');
    }
    if (badge) {
      badge.setAttribute('data-status', isPlaying ? (isPaused ? 'paused' : 'playing') : 'idle');
    }
    if (badgeText) {
      if (!isPlaying) {
        badgeText.textContent = state.lang === 'ru' ? 'последний трек' : 'last played';
      } else if (isPaused) {
        badgeText.textContent = state.lang === 'ru' ? 'на паузе' : 'paused';
      } else {
        badgeText.textContent = state.lang === 'ru' ? 'слушаю сейчас' : 'listening now';
      }
    }
    if (stateIcon) {
      stateIcon.textContent = isPlaying && !isPaused ? '▶' : '⏸';
    }

    if (titleEl && ytmTrackState.title) {
      titleEl.textContent = ytmTrackState.title;
      if (ytmTrackState.url) titleEl.href = ytmTrackState.url;
    }
    if (artistEl && ytmTrackState.artist) {
      artistEl.textContent = ytmTrackState.artist;
    }
    if (coverEl && ytmTrackState.cover) {
      coverEl.src = ytmTrackState.cover;
    }
    if (coverLink && ytmTrackState.url) {
      coverLink.href = ytmTrackState.url;
    }

    const dur = ytmTrackState.duration || 200;
    const pos = Math.min(ytmTrackState.position || 0, dur);
    if (posEl) posEl.textContent = formatYtmTime(pos);
    if (durEl) durEl.textContent = formatYtmTime(dur);
    if (barFill) {
      const pct = Math.min(100, Math.max(0, (pos / dur) * 100));
      barFill.style.width = `${pct}%`;
    }
    if (deviceText) {
      if (ytmTrackState.date && !isPlaying) {
        deviceText.textContent = `YouTube Music · ${ytmTrackState.date}`;
      } else {
        deviceText.textContent = 'YouTube Music · на телефоне';
      }
    }
  }

  function initYtmIntegration() {
    renderYtmNowPlaying(ytmTrackState);

    // Live local clock ticker (increments seconds second-by-second when playing)
    setInterval(() => {
      if (ytmTrackState.isPlaying && !ytmTrackState.isPaused) {
        ytmTrackState.position += 1;
        if (ytmTrackState.duration && ytmTrackState.position >= ytmTrackState.duration) {
          ytmTrackState.position = 0;
        }
        const posEl = document.getElementById('ytm-pos');
        const durEl = document.getElementById('ytm-dur');
        const barFill = document.getElementById('ytm-bar-fill');
        const dur = ytmTrackState.duration || 200;
        const pos = ytmTrackState.position;
        if (posEl) posEl.textContent = formatYtmTime(pos);
        if (durEl) durEl.textContent = formatYtmTime(dur);
        if (barFill) {
          const pct = Math.min(100, Math.max(0, (pos / dur) * 100));
          barFill.style.width = `${pct}%`;
        }
      }
    }, 1000);

    async function fetchLiveTrack() {
      const endpoints = [
        '/api/ytm?user=heck43&_t=' + Date.now(),
        'https://heck43githubio.vercel.app/api/ytm?user=heck43&_t=' + Date.now()
      ];
      for (const ep of endpoints) {
        try {
          const res = await fetch(ep, { cache: 'no-store', signal: AbortSignal.timeout(3500) });
          if (res.ok) {
            const json = await res.json();
            if (json && json.success) {
              renderYtmNowPlaying(json);
              return;
            }
          }
        } catch (e) {}
      }
    }

    fetchLiveTrack();
    // Poll API every 10 seconds for real-time changes
    setInterval(fetchLiveTrack, 10000);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) fetchLiveTrack();
    });
  }
  
  // ========== INIT ==========
  function init() {
    // Set initial language
    setLanguage(state.lang);
    
    // Start clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Setup interactions
    setupAvatarTilt();
    initRandomAvatar();
    // Bind events
    initEvents();

    // Audio player initial state
    renderPlaylist();
    loadTrack(0, false);

    // Steam profile integration
    initSteamIntegration();

    // GitHub profile integration
    initGitHubIntegration();

    // YouTube Music real-time stream integration
    initYtmIntegration();
    
    // Add .js class
    document.documentElement.classList.add('js');

    // Expose player controller for easily adding tracks or inspection
    window.metawkaPlayer = {
      get tracks() { return state.tracks; },
      get currentTrack() { return state.tracks[state.currentTrack]; },
      loadTrack,
      play: playAudio,
      pause: pauseAudio,
      toggle: togglePlay,
      next: nextTrack,
      prev: prevTrack,
      setTracks: (newTracks) => {
        if (Array.isArray(newTracks)) {
          state.tracks = newTracks;
          renderPlaylist();
          loadTrack(0, false);
        }
      },
      addTrack: (track) => {
        if (track && track.title) {
          state.tracks.push(track);
          renderPlaylist();
        }
      }
    };
  }

  // ========== GITHUB INTEGRATION (Profile: Heck43) ==========
  const GITHUB_CONFIG = {
    username: 'Heck43',
    url: 'https://github.com/Heck43',
    defaultData: {
      publicRepos: 26,
      sinceYear: 2023,
      stars: 2,
      followers: 1
    }
  };

  async function initGitHubIntegration() {
    const pubEl = document.getElementById('gh-repos-public');
    const sinceEl = document.getElementById('gh-since');
    const followersEl = document.getElementById('gh-followers');

    if (pubEl) pubEl.textContent = GITHUB_CONFIG.defaultData.publicRepos;
    if (sinceEl) sinceEl.textContent = GITHUB_CONFIG.defaultData.sinceYear;
    if (followersEl) followersEl.textContent = `${GITHUB_CONFIG.defaultData.stars}★ · ${GITHUB_CONFIG.defaultData.followers}`;

    const cacheKey = 'mw_gh_profile_cache_v1';
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && (Date.now() - parsed.timestamp < 1000 * 60 * 30)) {
          if (parsed.data) {
            if (pubEl && parsed.data.publicRepos) pubEl.textContent = parsed.data.publicRepos;
            if (sinceEl && parsed.data.sinceYear) sinceEl.textContent = parsed.data.sinceYear;
            if (followersEl && parsed.data.stars !== undefined) followersEl.textContent = `${parsed.data.stars}★ · ${parsed.data.followers || 1}`;
            return;
          }
        }
      }
    } catch (e) {
      // ignore
    }

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}`, { signal: controller.signal });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.public_repos === 'number') {
          if (pubEl) pubEl.textContent = data.public_repos;
          let year = 2023;
          if (data.created_at) {
            const parsedYear = new Date(data.created_at).getFullYear();
            if (parsedYear) {
              year = parsedYear;
              if (sinceEl) sinceEl.textContent = year;
            }
          }
          const followers = data.followers !== undefined ? data.followers : 1;
          const stars = 2;
          if (followersEl) followersEl.textContent = `${stars}★ · ${followers}`;

          localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            data: {
              publicRepos: data.public_repos,
              sinceYear: year,
              followers: followers,
              stars: stars
            }
          }));
        }
      }
    } catch (err) {
      // Fallback is already displayed
    }
  }
  
  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
