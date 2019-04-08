const mongoose = require("mongoose");
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const User = require("../models/user");

const Comment = new Schema({
  text: String
});

// Creator -- req.body.username

const Meet = new Schema({
  Name: String,
  Description: String,
  Date: String,
  Time: String,
  Creator: [User]
});

// Creator -- req.body.username

const Community = new Schema({
  Name: String,
  Description: String,
  Category: String,
  Creator: String,
  Members: [User],
  Meets: [Meet],
  Comments: [Comment],
  Location: {
    Lat: Number,
    Long: Number
  }
});

module.exports = mongoose.model("Community", Community);
