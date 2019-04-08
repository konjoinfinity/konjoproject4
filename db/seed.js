const mongoose = require("./connection");
const User = require("../models/user");

mongoose.Promise = Promise;

User.deleteMany({}).then(() => {
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
}),
  User.create({
    name: "Tim",
    email: "tim@tim.com",
    password: "byebyebye",
    interests: {
      one: "Movies",
      two: "Television",
      three: "Dogs"
    }
  }),
  User.create({
    name: "Brian",
    email: "brian@brian.com",
    password: "hellohello",
    interests: {
      one: "Biking",
      two: "Kyaking",
      three: "Running"
    }
  });
