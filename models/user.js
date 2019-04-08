const mongoose = require("../db/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
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

UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = mongoose.model("User", UserSchema);
