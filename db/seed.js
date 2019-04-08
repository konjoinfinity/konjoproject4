const mongoose = require("./connection");
const seeds = require("./seed.json");
const User = require("../models/user");

mongoose.Promise = Promise;

User.remove({}).then(_ => {
  console.log("Dropped the DB");
  User.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries);
    mongoose.connection.close();
  });
});
