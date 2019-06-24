const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Member = new Schema({
  name: String
});

const Comment = new Schema({
  text: String,
  creator: String
});

const Meet = new Schema({
  name: String,
  description: String,
  location: String,
  date: String,
  time: String,
  creator: String,
  attending: String,
  notAttending: String,
  maybeAttending: String
});

const Community = new Schema({
  name: String,
  description: String,
  category: String,
  creator: String,
  numberOfMembers: {
    type: Number,
    default: 1
  },
  members: [Member],
  meets: [Meet],
  comments: [Comment],
  location: {
    lat: Number,
    long: Number
  }
});

module.exports = mongoose.model("Community", Community);
