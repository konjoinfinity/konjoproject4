const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const User = require("../models/user");

// Creator -- req.body.name

const Member = new Schema({
  name: String
});

const Comment = new Schema({
  text: String
});

// Creator -- req.body.email

const Meet = new Schema({
  Name: String,
  Description: String,
  Date: String,
  Time: String,
  Creator: String
});

// Creator -- req.body.email

const Community = new Schema({
  Name: String,
  Description: String,
  Category: String,
  Creator: String,
  Members: [Member],
  Meets: [Meet],
  Comments: [Comment],
  Location: {
    Lat: Number,
    Long: Number
  }
});

module.exports = mongoose.model("Community", Community);
