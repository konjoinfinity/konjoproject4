const mongoose = require("../db/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;
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

User.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

User.method("comparePassword", function(password, dbpassword) {
  if (bcrypt.compareSync(password, dbpassword)) {
    return true;
  } else {
    return false;
  }
});

module.exports = mongoose.model("User", User);
