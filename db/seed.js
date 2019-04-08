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
      Name: "Running Club",
      Description: "For people who love running",
      Category: "Athletic",
      Creator: "konjo@konjo.com"
    });
  })
  .then(console.log("Community Created")),
  Community.create({
    Name: "Chess Enthusiasts",
    Description: "Chess lovers, get your chess on!",
    Category: "Board Games",
    Creator: "tim@tim.com"
  }).then(console.log("Community Created")),
  Community.create({
    Name: "Game of Thrones Fans",
    Description: "For Game of Thrones Fanatics",
    Category: "Fantasy",
    Creator: "brian@brian.com"
  }).then(console.log("Community Created"));
