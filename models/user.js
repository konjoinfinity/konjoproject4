const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: String,
  password: String,
  interests: {
    one: String,
    two: String,
    three: String
  },
  current_location: {
    lat: Number,
    long: Number
  }
});

module.exports = mongoose.model("User", User);
