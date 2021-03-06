const express = require("express");
const jwt = require("jwt-simple");
const passport = require("../config/passport");
const config = require("../config/config");
const mongoose = require("../models/user");
const User = mongoose.model("User");
const router = express.Router();
const saltRounds = 10;
const bcrypt = require("bcrypt");
const verifyToken = require("../config/verifytoken");
// const jsonwt = require("jsonwebtoken"); will add in the future

router.post("/signup", (req, res) => {
  if (req.body.email && req.body.password) {
    if (req.body.password === req.body.confirmpass) {
      let newUser = {
        email: req.body.email,
        password: req.body.password
      };
      User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
          User.create(newUser).then(user => {
            if (user) {
              var payload = {
                id: user.id
              };
              var token = jwt.encode(payload, config.jwtSecret);
              // var token = jsonwt.sign(payload, config.jwtSecret, {
              //   expiresIn: 86400
              // });
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
        error: "Passwords don't match"
      });
    }
  } else {
    res.json({
      error: "Please enter both email and password"
    });
  }
});

router.post("/login", (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        let success = user.comparePassword(req.body.password, user.password);
        if (success === true) {
          var payload = {
            id: user.id
          };
          var token = jwt.encode(payload, config.jwtSecret);
          // var token = jsonwt.sign(payload, config.jwtSecret, {
          //   expiresIn: 86400
          // });
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

router.post("/changepass", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    if (req.body.email && req.body.password) {
      if (req.body.newpassword === req.body.confirmnewpassword) {
        User.findOne({ email: req.body.email }).then(user => {
          if (user) {
            let success = user.comparePassword(
              req.body.password,
              user.password
            );
            if (success === true) {
              let newpassword = bcrypt.hashSync(
                req.body.newpassword,
                saltRounds
              );
              User.findOneAndUpdate(
                { email: req.body.email },
                { $set: { password: newpassword } },
                { new: true }
              )
                .then(user => {
                  console.log("Password has been changed");
                  res.json("Password has been changed");
                })
                .catch(err => console.log(err));
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
          error: "New passwords do not match"
        });
      }
    } else {
      res.json({
        error: "Please enter both email and password"
      });
    }
  });
});

module.exports = router;
