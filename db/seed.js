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
  .then(console.log("User Created")),
  User.create({
    name: "Tim",
    email: "tim@tim.com",
    password: "byebyebye",
    interests: {
      one: "Movies",
      two: "Television",
      three: "Dogs"
    }
  }).then(console.log("User Created")),
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
    console.log("Communities Deleted");
    Community.create({
      name: "Running Club",
      description: "For people who love running",
      category: "Athletic",
      creator: "konjo@konjo.com"
    });
  })
  .then(console.log("Community Created"));

Community.create({
  name: "Game of Thrones Fans",
  description: "For Game of Thrones Fanatics",
  category: "Fantasy",
  creator: "brian@brian.com"
}).then(console.log("Community Created"));

Community.create({
  name: "Chess Enthusiasts",
  description: "Chess lovers, get your chess on!",
  category: "Board Games",
  creator: "tim@tim.com"
}).then(console.log("Community Created"));
