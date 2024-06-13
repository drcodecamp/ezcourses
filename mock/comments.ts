const comments = [
  {
    username: '@funCoder',
    thumbnail: 'https://picsum.photos/50?random=1',
    comment:
      'This video really cleared up a lot of my confusion about closures in JavaScript. Thanks!',
    numOfLikes: '250',
    replies: [
      {
        username: '@happyDev',
        thumbnail: 'https://picsum.photos/50?random=2',
        comment: 'Same here! The examples were super helpful.',
        numOfLikes: '80',
      },
      {
        username: '@learnJS',
        thumbnail: 'https://picsum.photos/50?random=3',
        comment: 'I finally get how closures work. Great explanation!',
        numOfLikes: '125',
      },
    ],
  },
  {
    username: '@techEnthusiast',
    thumbnail: 'https://picsum.photos/50?random=4',
    comment:
      "This video is gold! Can't believe how easily you explained this complex topic.",
    numOfLikes: '540',
    replies: [],
  },
  {
    username: '@codeLover',
    thumbnail: 'https://picsum.photos/50?random=5',
    comment: 'Really enjoyed the detailed explanation. Keep up the good work!',
    numOfLikes: '130',
    replies: [
      {
        username: '@devGuru',
        thumbnail: 'https://picsum.photos/50?random=6',
        comment: 'Agreed! The visuals were really helpful.',
        numOfLikes: '65',
      },
    ],
  },
  {
    username: '@jsMaster',
    thumbnail: 'https://picsum.photos/50?random=7',
    comment: 'A bit too fast for beginners, but very informative.',
    numOfLikes: '90',
    replies: [],
  },
  {
    username: '@webNinja',
    thumbnail: 'https://picsum.photos/50?random=8',
    comment: 'Loved it! Can you make a video on Promises next?',
    numOfLikes: '220',
    replies: [
      {
        username: '@promiseSeeker',
        thumbnail: 'https://picsum.photos/50?random=9',
        comment: 'Yes, please! A video on Promises would be amazing.',
        numOfLikes: '98',
      },
    ],
  },
  {
    username: '@frontendDev',
    thumbnail: 'https://picsum.photos/50?random=10',
    comment: 'Great video, really helped me understand the concept!',
    numOfLikes: '400',
    replies: [],
  },
  {
    username: '@reactFan',
    thumbnail: 'https://picsum.photos/50?random=11',
    comment: 'Wish I had seen this video earlier. Fantastic content!',
    numOfLikes: '310',
    replies: [
      {
        username: '@devNewbie',
        thumbnail: 'https://picsum.photos/50?random=12',
        comment: 'Totally agree! This video was a lifesaver.',
        numOfLikes: '200',
      },
    ],
  },
  {
    username: '@svelteLover',
    thumbnail: 'https://picsum.photos/50?random=13',
    comment: "Can't wait for more videos like this. Subscribed!",
    numOfLikes: '190',
    replies: [],
  },
  {
    username: '@fullStackDev',
    thumbnail: 'https://picsum.photos/50?random=14',
    comment: 'The part about closures was really insightful.',
    numOfLikes: '220',
    replies: [
      {
        username: '@codeMaster',
        thumbnail: 'https://picsum.photos/50?random=15',
        comment: "Glad it helped! It's a tricky topic for sure.",
        numOfLikes: '110',
      },
    ],
  },
  {
    username: '@backendPro',
    thumbnail: 'https://picsum.photos/50?random=16',
    comment: 'This was really well explained, thanks!',
    numOfLikes: '300',
    replies: [
      {
        username: '@debugger',
        thumbnail: 'https://picsum.photos/50?random=17',
        comment: 'I was struggling with closures. This video made it so clear.',
        numOfLikes: '180',
      },
      {
        username: '@scriptKing',
        thumbnail: 'https://picsum.photos/50?random=18',
        comment: 'Same here, finally understood it!',
        numOfLikes: '100',
      },
    ],
  },
  {
    username: '@jsGuru',
    thumbnail: 'https://picsum.photos/50?random=19',
    comment: 'Can you make a follow-up video on asynchronous JavaScript?',
    numOfLikes: '410',
    replies: [],
  },
  {
    username: '@devMentor',
    thumbnail: 'https://picsum.photos/50?random=20',
    comment: 'This was a bit hard to follow at first, but really informative.',
    numOfLikes: '190',
    replies: [],
  },
  {
    username: '@webDesigner',
    thumbnail: 'https://picsum.photos/50?random=21',
    comment: 'The examples were spot on, very helpful!',
    numOfLikes: '260',
    replies: [],
  },
  {
    username: '@uiExpert',
    thumbnail: 'https://picsum.photos/50?random=22',
    comment: 'Loved the way you explained the concepts.',
    numOfLikes: '170',
    replies: [],
  },
  {
    username: '@techGuru',
    thumbnail: 'https://picsum.photos/50?random=23',
    comment:
      'I have been struggling with closures for a while, and this video helped a lot!',
    numOfLikes: '320',
    replies: [],
  },
  {
    username: '@codePro',
    thumbnail: 'https://picsum.photos/50?random=24',
    comment: 'This video was exactly what I needed. Thank you!',
    numOfLikes: '280',
    replies: [
      {
        username: '@happyCoder',
        thumbnail: 'https://picsum.photos/50?random=25',
        comment: 'Same here! Finally got it!',
        numOfLikes: '150',
      },
    ],
  },
  {
    username: '@webEnthusiast',
    thumbnail: 'https://picsum.photos/50?random=26',
    comment: 'This video is amazing. Thank you so much!',
    numOfLikes: '390',
    replies: [],
  },
  {
    username: '@devFan',
    thumbnail: 'https://picsum.photos/50?random=27',
    comment: 'Really enjoyed this video. Looking forward to more.',
    numOfLikes: '270',
    replies: [],
  },
  {
    username: '@codingExpert',
    thumbnail: 'https://picsum.photos/50?random=28',
    comment: 'Very informative and easy to understand.',
    numOfLikes: '330',
    replies: [
      {
        username: '@debuggingNinja',
        thumbnail: 'https://picsum.photos/50?random=29',
        comment: 'This was really helpful. Thanks!',
        numOfLikes: '160',
      },
      {
        username: '@jsFanatic',
        thumbnail: 'https://picsum.photos/50?random=30',
        comment: 'I loved the way you explained everything!',
        numOfLikes: '110',
      },
    ],
  },
  {
    username: '@devBeginner',
    thumbnail: 'https://picsum.photos/50?random=31',
    comment: "I didn't understand closures before this video. Thanks!",
    numOfLikes: '200',
    replies: [],
  },
  {
    username: '@frontEndNinja',
    thumbnail: 'https://picsum.photos/50?random=32',
    comment: 'Great video! Please make more content like this.',
    numOfLikes: '240',
    replies: [
      {
        username: '@cssMaster',
        thumbnail: 'https://picsum.photos/50?random=33',
        comment: 'Yes, please! More videos like this.',
        numOfLikes: '130',
      },
    ],
  },
  {
    username: '@backendDev',
    thumbnail: 'https://picsum.photos/50?random=34',
    comment: 'I never understood closures until now. Great job!',
    numOfLikes: '310',
    replies: [],
  },
  {
    username: '@jsNerd',
    thumbnail: 'https://picsum.photos/50?random=35',
    comment: 'The examples made it so much easier to understand.',
    numOfLikes: '350',
    replies: [],
  },
  {
    username: '@codingFan',
    thumbnail: 'https://picsum.photos/50?random=36',
    comment: "This is one of the best explanations I've seen.",
    numOfLikes: '290',
    replies: [
      {
        username: '@scriptNinja',
        thumbnail: 'https://picsum.photos/50?random=37',
        comment: 'Totally agree! Super clear and concise.',
        numOfLikes: '140',
      },
    ],
  },
  {
    username: '@jsEnthusiast',
    thumbnail: 'https://picsum.photos/50?random=38',
    comment: 'This video is a lifesaver. Thank you!',
    numOfLikes: '410',
    replies: [],
  },
  {
    username: '@fullStackFan',
    thumbnail: 'https://picsum.photos/50?random=39',
    comment: 'Great video. Very easy to follow.',
    numOfLikes: '210',
    replies: [],
  },
  {
    username: '@devExpert',
    thumbnail: 'https://picsum.photos/50?random=40',
    comment:
      'Finally, a video that explains closures in a way that makes sense.',
    numOfLikes: '380',
    replies: [],
  },
]
