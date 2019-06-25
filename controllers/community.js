const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Community = require("../models/community");
const jwt = require("jwt-simple");
const config = require("../config/config");
const passport = require("../config/passport");
const User = mongoose.model("User");
const verifyToken = require("../config/verifytoken");

router.get("/", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    Community.find({})
      .sort({ numberOfMembers: 1 })
      .then(community => res.json(community));
  });
});

router.post("/", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    Community.create(req.body).then(konjo => res.json(konjo));
  });
});

router.get("/:id", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    Community.findOne({ _id: req.params.id }).then(community =>
      res.json(community)
    );
  });
});

router.put("/:id", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
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
});

router.delete("/:id", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    Community.findOneAndDelete({ _id: req.params.id }).then(konjo =>
      res.json("/community")
    );
  });
});

router.put("/:id/comment", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
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
});

router.put("/:id/delete", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
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
});

//update to add user to attending

router.put("/:id/meet", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const member = { name: req.body.meet.creator };
    const createMeet = {
      name: req.body.meet.name,
      description: req.body.meet.description,
      location: req.body.meet.location,
      date: req.body.meet.date,
      time: req.body.meet.time,
      creator: req.body.meet.creator,
      attending: member
    };
    Community.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { meets: createMeet } }
    ).then(community => {
      res.json(community);
    });
  });
});

router.put("/:id/meet/delete", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
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
});

router.put("/:id/adduser", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const addUser = {
      name: req.body.member
    };
    Community.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { members: addUser }, $inc: { numberOfMembers: 1 } },
      { new: true }
    )
      .then(community => {
        community.save(community);
      })
      .then(member => {
        res.json(member);
      })
      .catch(err => console.log(err));
  });
});

router.put("/:id/removeuser", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const deleteMember = { _id: req.body.body };
    Community.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { members: deleteMember }, $inc: { numberOfMembers: -1 } },
      { new: true }
    )
      .then(community => {
        community.save(community);
      })
      .then(member => {
        res.json(member);
      })
      .catch(err => console.log(err));
  });
});

router.put("/:id/meet/edit", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const editMeet = {
      name: req.body.meet.name,
      description: req.body.meet.description,
      location: req.body.meet.location,
      date: req.body.meet.date,
      time: req.body.meet.time,
      creator: req.body.meet.creator,
      attending: req.body.meet.attending,
      notAttending: req.body.meet.notAttending,
      maybeAttending: req.body.meet.maybeAttending
    };
    const meetId = { _id: req.body.meetId };
    Community.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { meets: meetId } }
    ).then(community => {
      community.save((err, community) => {
        Community.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { meets: editMeet } }
        ).then(community => {
          res.json(community);
        });
      });
    });
  });
});

router.put("/:id/meet/attend", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const member = { name: req.body.name };
    Community.updateOne(
      { _id: req.params.id, "meets._id": req.body.meet },
      { $push: { "meets.$.attending": member } }
    )
      .then(community => {
        res.json(community);
      })
      .catch(err => console.log(err));
  });
});

router.put("/:id/meet/delattend", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const member = { name: req.body.name };
    Community.updateOne(
      { _id: req.params.id, "meets._id": req.body.meet },
      { $pull: { "meets.$.attending": member } }
    )
      .then(community => {
        res.json(community);
      })
      .catch(err => console.log(err));
  });
});

router.put("/:id/meet/notattend", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const member = { name: req.body.name };
    Community.updateOne(
      { _id: req.params.id, "meets._id": req.body.meet },
      { $push: { "meets.$.notAttending": member } }
    )
      .then(community => {
        res.json(community);
      })
      .catch(err => console.log(err));
  });
});

router.put("/:id/meet/delnotattend", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const member = { name: req.body.name };
    Community.updateOne(
      { _id: req.params.id, "meets._id": req.body.meet },
      { $pull: { "meets.$.notAttending": member } }
    )
      .then(community => {
        res.json(community);
      })
      .catch(err => console.log(err));
  });
});

router.put("/:id/meet/maybeattend", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const member = { name: req.body.name };
    Community.updateOne(
      { _id: req.params.id, "meets._id": req.body.meet },
      { $push: { "meets.$.maybeAttending": member } }
    )
      .then(community => {
        res.json(community);
      })
      .catch(err => console.log(err));
  });
});

router.put("/:id/meet/delmaybeattend", verifyToken, (req, res) => {
  User.findById(decodedId, { password: 0 }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    const member = { name: req.body.name };
    Community.updateOne(
      { _id: req.params.id, "meets._id": req.body.meet },
      { $pull: { "meets.$.maybeAttending": member } }
    )
      .then(community => {
        res.json(community);
      })
      .catch(err => console.log(err));
  });
});

module.exports = router;
