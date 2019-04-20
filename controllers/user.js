const express = require("express");
const jwt = require("jwt-simple");
const passport = require("../config/passport");
const config = require("../config/config");
const mongoose = require("../models/user");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    };
    User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        User.create(newUser).then(user => {
          if (user) {
            var payload = {
              id: newUser.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token
            });
          } else {
            res.json({
              error: "Error in user creation"
            });
          }
        });
      } else {
        res.json({
          error: "Email has already been registered"
        });
      }
    });
  } else {
    res.json({
      error: "Please enter both email and password"
    });
  }
});

router.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
            token: token
          });
        } else {
          res.json({
            error: "Password does not match email account"
          });
        }
      } else {
        res.json({
          error: "Email has not been registered"
        });
      }
    });
  } else {
    res.json({
      error: "Please enter both email and password"
    });
  }
});

module.exports = router;
