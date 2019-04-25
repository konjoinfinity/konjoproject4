const mongoose = require("./connection");
const User = require("../models/user");
const Community = require("../models/community");

mongoose.Promise = Promise;

User.deleteMany({})
  .then(() => {
    User.create({
      name: "Konjo",
      email: "konjo@konjo.com",
      password: "777bmx777",
      interests: {
        one: "Music",
        two: "Art",
        three: "Technology"
      }
    }).then(console.log("User Created"));
  })
  .then(console.log("Users Deleted"));

User.create({
  name: "Tim",
  email: "tim@tim.com",
  password: "byebyebye",
  interests: {
    one: "Movies",
    two: "Television",
    three: "Dogs"
  }
}).then(console.log("User Created"));

User.create({
  name: "James",
  email: "james@james.com",
  password: "hihihi",
  interests: {
    one: "Walking",
    two: "Reading",
    three: "Cats"
  }
}).then(console.log("User Created"));

User.create({
  name: "Julie",
  email: "julie@julie.com",
  password: "whywhywhy",
  interests: {
    one: "Fashion",
    two: "Dancing",
    three: "Fitness"
  }
}).then(console.log("User Created"));

User.create({
  name: "Brian",
  email: "brian@brian.com",
  password: "hellohello",
  interests: {
    one: "Biking",
    two: "Kyaking",
    three: "Running"
  }
}).then(console.log("User Created"));

Community.deleteMany({})
  .then(() => {
    Community.create({
      name: "Running Club 🏃🏻‍",
      description: "For people who love running",
      category: "Athletic",
      creator: "konjo@konjo.com",
      numberOfMembers: 4,
      members: [
        {
          name: "julie@julie.com"
        },
        {
          name: "brian@brian.com"
        },
        {
          name: "james@james.com"
        }
      ],
      meets: {
        name: "Rock Creek Run",
        description: "Trail Running",
        location: "Rock Creek Park",
        time: "0700",
        date: "061419",
        creator: "brian@brian.com"
      },
      comments: {
        text: "Marathon here we come!",
        creator: "james@james.com"
      }
    }).then(console.log("Community Created"));
  })
  .then(console.log("Communities Deleted"));

Community.create({
  name: "Express Developers 💻",
  description: "Meet other express developers",
  category: "Developers, Coding",
  creator: "julie@julie.com",
  numberOfMembers: 3,
  members: [
    {
      name: "konjo@konjo.com"
    },
    {
      name: "brian@brian.com"
    }
  ],
  meets: [
    {
      name: "Espresso for Express Devs",
      description: "Code and coffee",
      location: "Clarendon",
      time: "1000",
      date: "030119",
      creator: "konjo@konjo.com"
    },
    {
      name: "Learn to code with Express",
      description: "Learn to Code",
      location: "Clarendon",
      time: "1200",
      date: "030129",
      creator: "brian@brian.com"
    }
  ],
  comments: [
    {
      text: "Node!!!",
      creator: "brian@brian.com"
    },
    {
      text: "Express!!!",
      creator: "konjo@konjo.com"
    }
  ]
}).then(console.log("Community Created"));

Community.create({
  name: "Live Music Lovers 🎸",
  description: "For people who love live music",
  category: "Music",
  creator: "james@james.com",
  numberOfMembers: 3,
  members: [
    {
      name: "julie@julie.com"
    },
    {
      name: "tim@tim.com"
    }
  ],
  meets: {
    name: "John Mayer",
    description: "John Mayer live in concert",
    location: "Capital One Arena",
    time: "1900",
    date: "051419",
    creator: "julie@julie.com"
  },
  comments: {
    text: "Get your groove on",
    creator: "julie@julie.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Game of Thrones Fans 📺",
  description: "For Game of Thrones Fanatics",
  category: "Fantasy",
  creator: "brian@brian.com",
  numberOfMembers: 3,
  members: [
    {
      name: "julie@julie.com"
    },
    {
      name: "tim@tim.com"
    }
  ],
  meets: {
    name: "Season 8 Debut",
    description: "Game of Thrones Season 8, the final season.",
    location: "Television",
    time: "9pm",
    date: "April 14, 2019",
    creator: "brian@brian.com"
  },
  comments: {
    text: "You know nothing Jon Snow...",
    creator: "tim@tim.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Must Love Dogs 🐶",
  description: "For people who are die hard dog owners",
  category: "Dogs, Animals",
  creator: "tim@tim.com",
  numberOfMembers: 4,
  members: [
    {
      name: "julie@julie.com"
    },
    {
      name: "brian@brian.com"
    },
    {
      name: "konjo@konjo.com"
    }
  ],
  meets: {
    name: "Must love dogs group movie watch",
    description: "Watch must love dogs with other dog lovers",
    location: "Ballston theater",
    time: "1300",
    date: "071719",
    creator: "brian@brian.com"
  },
  comments: {
    text: "Woof!",
    creator: "brian@brian.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Cats are the Best 🐈",
  description: "Cat lovers only!",
  category: "Cats, Animals",
  creator: "konjo@konjo.com",
  numberOfMembers: 4,
  members: [
    {
      name: "julie@julie.com"
    },
    {
      name: "brian@brian.com"
    },
    {
      name: "james@james.com"
    }
  ],
  meets: {
    name: "Meet other cat lovers",
    description: "Talk cats with other people",
    location: "Starbucks",
    time: "1930",
    date: "061219",
    creator: "james@james.com"
  },
  comments: {
    text: "Meow!",
    creator: "brian@brian.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Travel Enthusiasts ✈️",
  description: "For people who can't sit still and love to move across borders",
  category: "Travel",
  creator: "julie@julie.com",
  numberOfMembers: 3,
  members: [
    {
      name: "brian@brian.com"
    },
    {
      name: "james@james.com"
    }
  ],
  meets: {
    name: "Trip to France",
    description: "Tour the southern coast of France",
    location: "Nice",
    time: "1900",
    date: "050619",
    creator: "julie@julie.com"
  },
  comments: {
    text: "Anyone up for South Africa?",
    creator: "julie@julie.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Chess Enthusiasts ♟",
  description: "Chess lovers, get your chess on!",
  category: "Board Games",
  creator: "tim@tim.com",
  numberOfMembers: 4,
  members: [
    {
      name: "julie@julie.com"
    },
    {
      name: "brian@brian.com"
    },
    {
      name: "james@james.com"
    }
  ],
  meets: {
    name: "DC Chess Regionals",
    description: "Annual Regional DC Chess Competition",
    location: "Arlington Public Library",
    time: "1200",
    date: "050819",
    creator: "tim@tim.com"
  },
  comments: {
    text: "Checkmate...",
    creator: "tim@tim.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "DC Walkers 🚶🏻‍",
  description: "For people who like to walk in the DC area",
  category: "Fitness, Walking",
  creator: "brian@brian.com",
  numberOfMembers: 4,
  members: [
    {
      name: "julie@julie.com"
    },
    {
      name: "konjo@konjo.com"
    },
    {
      name: "james@james.com"
    }
  ],
  meets: {
    name: "A walk around the mall",
    description: "A group walk around the National Mall",
    location: "Washington Monument",
    time: "1100",
    date: "050219",
    creator: "konjo@konjo.com"
  },
  comments: {
    text: "Lets walk.",
    creator: "konjo@konjo.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "DC Musicians 🎵",
  description: "For people who love to play music or sing",
  category: "Music, Jam",
  creator: "james@james.com",
  numberOfMembers: 3,
  members: [
    {
      name: "konjo@konjo.com"
    },
    {
      name: "brian@brian.com"
    }
  ],
  meets: {
    name: "Soulfire Practice",
    description: "Band Practice",
    location: "The Allards",
    time: "1930",
    date: "Monday Weekly",
    creator: "james@james.com"
  },
  comments: {
    text: "Soulfire!!!",
    creator: "konjo@konjo.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Random Activities ❔",
  description:
    "For people who live life outside the box and enjoy doing different things",
  category: "Random, Spontaneous",
  creator: "julie@julie.com",
  numberOfMembers: 2,
  members: [
    {
      name: "konjo@konjo.com"
    }
  ],
  comments: {
    text: "Hi Julie",
    creator: "konjo@konjo.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Karaoke Kooks 🎤",
  description: "For people who are RockStars at heart",
  category: "Music, Karaoke",
  creator: "konjo@konjo.com"
}).then(console.log("Community Created"));

Community.create({
  name: "General Assembly WDI/SEI Alums 🎓",
  description: "For WDI/SEI GA Alumni",
  category: "Developers, Alumni",
  creator: "konjo@konjo.com",
  numberOfMembers: 2,
  members: [
    {
      name: "tim@tim.com"
    }
  ]
}).then(console.log("Community Created"));

Community.create({
  name: "Apple Fans 👨🏻‍💻👩🏻‍💻",
  description: "Fans of the company Apple and the products they create",
  category: "Fitness, Walking",
  creator: "julie@julie.com",
  numberOfMembers: 4,
  members: [
    {
      name: "konjo@konjo.com"
    },
    {
      name: "brian@brian.com"
    },
    {
      name: "james@james.com"
    }
  ],
  meets: {
    name: "Apple keynote address",
    description: "Watch the keynote address with other fans",
    location: "John's house",
    time: "2000",
    date: "081019",
    creator: "julie@julie.com"
  },
  comments: {
    text: "React Native kicks ass",
    creator: "konjo@konjo.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Beer Lovers 🍺",
  description: "For people who like to drink beer",
  category: "Beer, Drinks",
  creator: "konjo@konjo.com",
  numberOfMembers: 3,
  members: [
    {
      name: "james@james.com"
    },
    {
      name: "julie@julie.com"
    }
  ],
  meets: {
    name: "Beer Pub Crawl",
    description: "A walking tour between pubs",
    location: "Post Pub",
    time: "1900",
    date: "071519",
    creator: "julie@julie.com"
  },
  comments: {
    text: "Ballast Point 🍻",
    creator: "konjo@konjo.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Pickup Basketball 🏀",
  description: "Who wants to play pick up?",
  category: "Sports, B-Ball",
  creator: "brian@brian.com",
  numberOfMembers: 2,
  members: [
    {
      name: "tim@tim.com"
    }
  ],
  comments: {
    text: "Hoops! ⛹🏻‍",
    creator: "brian@brian.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Ice Hockey Fans 🏒🥅",
  description: "For fans of Ice Hockey",
  category: "Sports, Hockey",
  creator: "james@james.com",
  numberOfMembers: 2,
  members: [
    {
      name: "brian@brian.com"
    }
  ],
  comments: {
    text: "Goal!!! 🥅‍",
    creator: "brian@brian.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Football Fans ⚽️",
  description: "For people who call soccer by its real name - Football",
  category: "Sports, Football",
  creator: "tim@tim.com",
  comments: {
    text: "Soccer ⚽️‍",
    creator: "tim@tim.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Chuck TV Show Fans 👨🏻‍👩✈️💵💣🔫",
  description: "For fans of the spy comedy TV show",
  category: "Television",
  creator: "konjo@konjo.com",
  comments: {
    text: "Sarah is super hot!‍",
    creator: "konjo@konjo.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Harry Potter Fans 📚🎞🎥",
  description: "For people who love the Wizarding World Fandom",
  category: "Books, Movies, Fandom",
  creator: "julie@julie.com",
  numberOfMembers: 3,
  members: [
    {
      name: "tim@tim.com"
    },
    {
      name: "konjo@konjo.com"
    }
  ],
  meets: {
    name: "Trip to Universal Studios Wizarding World",
    description: "A group trip to the Harry Potter theme park",
    location: "Orlando, FL",
    time: "0900",
    date: "July 20th 2019",
    creator: "tim@tim.com"
  },
  comments: {
    text: "Hungarian Horntail 🐉🐲",
    creator: "konjo@konjo.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Art Appreciation Group 🖼",
  description: "For people passionate about the Arts",
  category: "Arts",
  creator: "james@james.com",
  comments: {
    text: "Anyone up for painting? 🎨🖌‍",
    creator: "james@james.com"
  }
}).then(console.log("Community Created"));

Community.create({
  name: "Book Club 📚",
  description: "For people who love to read",
  category: "Books, Reading",
  creator: "konjo@konjo.com",
  numberOfMembers: 3,
  members: [
    {
      name: "tim@tim.com"
    },
    {
      name: "julie@julie.com"
    }
  ],
  meets: {
    name: "Weekly book discussion",
    description: "A discussion about the current book club book",
    location: "Peets Coffee",
    time: "7pm",
    date: "Weekly",
    creator: "brian@brian.com"
  }
}).then(console.log("Community Created"));
