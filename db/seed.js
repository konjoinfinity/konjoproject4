const mongoose = require("./connection");
const User = require("../models/user");
const Community = require("../models/community");

mongoose.Promise = Promise;

User.deleteMany({})
  .then(() => {
    console.log("Users Deleted");
    User.create({
      name: "Konjo",
      email: "konjo@konjo.com",
      password: "777bmx777",
      interests: {
        one: "Music",
        two: "Art",
        three: "Technology"
      }
    });
  })
  .then(console.log("User Created"))
  .catch(err => console.log(err));
User.create({
  name: "Tim",
  email: "tim@tim.com",
  password: "byebyebye",
  interests: {
    one: "Movies",
    two: "Television",
    three: "Dogs"
  }
})
  .then(console.log("User Created"))
  .catch(err => console.log(err));
User.create({
  name: "James",
  email: "james@james.com",
  password: "hihihi",
  interests: {
    one: "Walking",
    two: "Reading",
    three: "Cats"
  }
})
  .then(console.log("User Created"))
  .catch(err => console.log(err));
User.create({
  name: "Julie",
  email: "julie@julie.com",
  password: "whywhywhy",
  interests: {
    one: "Fashion",
    two: "Dancing",
    three: "Fitness"
  }
})
  .then(console.log("User Created"))
  .catch(err => console.log(err));
User.create({
  name: "Brian",
  email: "brian@brian.com",
  password: "hellohello",
  interests: {
    one: "Biking",
    two: "Kyaking",
    three: "Running"
  }
})
  .then(console.log("User Created"))
  .catch(err => console.log(err));

Community.deleteMany({})
  .then(() => {
    console.log("Communities Deleted");
    Community.create({
      name: "Running Club",
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
        date: "061419"
      }
    });
  })
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Express Developers",
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
      date: "030119"
    },
    {
      name: "Learn to code with Express",
      description: "Learn to Code",
      location: "Clarendon",
      time: "1200",
      date: "030129"
    }
  ]
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Live Music Lovers",
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
    date: "051419"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Game of Thrones Fans",
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
    date: "April 14, 2019"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Must Love Dogs",
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
    date: "071719"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Cats are the Best",
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
    date: "061219"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Travel Enthusiasts",
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
    date: "050619"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Chess Enthusiasts",
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
    date: "050819"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "DC Walkers",
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
    date: "050219"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "DC Musicians",
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
    date: "Monday Weekly"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Random Activities",
  description:
    "For people who live life outside the box and enjoy doing different things",
  category: "Random, Spontaneous",
  creator: "julie@julie.com",
  numberOfMembers: 2,
  members: [
    {
      name: "konjo@konjo.com"
    }
  ]
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Karaoke Kooks",
  description: "For people who are RockStars at heart",
  category: "Music, Karaoke",
  creator: "konjo@konjo.com"
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "General Assembly WDI/SEI Alums",
  description: "For WDI/SEI GA Alumni",
  category: "Developers, Alumni",
  creator: "konjo@konjo.com",
  numberOfMembers: 2,
  members: [
    {
      name: "tim@tim.com"
    }
  ]
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));

Community.create({
  name: "Apple Fans",
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
    name: "Apple keynoete address",
    description: "Watch the keynote address with other fans",
    location: "John's house",
    time: "2000",
    date: "081019"
  }
})
  .then(console.log("Community Created"))
  .catch(err => console.log(err));
