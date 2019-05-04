const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Community = require("../models/community");
const jwt = require("jwt-simple");
const config = require("../config/config");
const passport = require("../config/passport");
const User = mongoose.model("User");

router.get("/", function(req, res) {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      Community.find({})
        .sort({ numberOfMembers: 1 })
        .then(community => res.json(community));
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.post("/", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      Community.create(req.body).then(konjo => res.redirect("/community"));
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.get("/search", function(req, res) {
  Community.find({})
    .sort({ numberOfMembers: 1 })
    .then(community => res.json(community));
});

router.get("/:id", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      Community.findOne({ _id: req.params.id }).then(community =>
        res.json(community)
      );
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.put("/:id", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      Community.findOne({
        _id: req.params.id
      }).then(community => {
        community.name = req.body.name;
        community.description = req.body.description;
        community.category = req.body.category;
        community.save((err, community) => {
          res.json(community);
        });
      });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.delete("/:id", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      Community.findOneAndDelete({ _id: req.params.id }).then(konjo =>
        res.json("/community")
      );
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.put("/:id/comment", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      const createComment = {
        text: req.body.comment,
        creator: req.body.creator
      };
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comments: createComment } }
      ).then(community => {
        community.save((err, community) => {
          res.json(community);
        });
      });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.put("/:id/delete", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      const deleteComment = { _id: req.body.body };
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { comments: deleteComment } }
      ).then(community => {
        community.save((err, community) => {
          res.json(community);
        });
      });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.put("/:id/meet", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      const createMeet = {
        name: req.body.meet.name,
        description: req.body.meet.description,
        location: req.body.meet.location,
        date: req.body.meet.date,
        time: req.body.meet.time,
        creator: req.body.meet.creator
      };
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { meets: createMeet } }
      ).then(community => {
        res.json(community);
      });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.put("/:id/meet/delete", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      const deleteMeet = { _id: req.body.body };
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { meets: deleteMeet } }
      ).then(community => {
        community.save((err, community) => {
          res.json(community);
        });
      });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.put("/:id/adduser", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      const addUser = {
        name: req.body.member
      };
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { members: addUser } }
      ).then(community => {
        community.save(community);
      });
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { numberOfMembers: 1 } },
        { new: true }
      )
        .then(member => {
          res.json(member);
        })
        .catch(err => console.log(err));
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

router.put("/:id/removeuser", (req, res) => {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      const deleteMember = { _id: req.body.body };
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { members: deleteMember } }
      ).then(community => {
        community.save(community);
      });
      Community.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { numberOfMembers: -1 } },
        { new: true }
      )
        .then(member => {
          res.json(member);
        })
        .catch(err => console.log(err));
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
});

module.exports = router;
