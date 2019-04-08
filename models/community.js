const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// Creator -- req.body.name

const Member = new Schema({
  name: String
});

const Comment = new Schema({
  text: String
});

// Creator -- req.body.email

const Meet = new Schema({
  name: String,
  description: String,
  date: String,
  time: String,
  creator: String
});

// Creator -- req.body.email

const Community = new Schema({
  name: String,
  description: String,
  category: String,
  creator: String,
  members: [Member],
  meets: [Meet],
  comments: [Comment],
  location: {
    lat: Number,
    long: Number
  }
});

module.exports = mongoose.model("Community", Community);
