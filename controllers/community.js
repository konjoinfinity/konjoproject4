const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Community = require("../models/community");

router.get("/", function(req, res) {
  Community.find({})
    .sort({ numberOfMembers: 1 })
    .then(community => res.json(community));
});

router.post("/", (req, res) => {
  Community.create(req.body).then(konjo => res.redirect("/community"));
});

router.get("/:id", (req, res) => {
  Community.findOne({ _id: req.params.id }).then(community =>
    res.json(community)
  );
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  Community.findOneAndDelete({ _id: req.params.id }).then(konjo =>
    res.json("/community")
  );
});

router.put("/:id/comment", (req, res) => {
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

router.put("/:id/delete", (req, res) => {
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

router.put("/:id/meet", (req, res) => {
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

router.put("/:id/meet/delete", (req, res) => {
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

router.put("/:id/adduser", (req, res) => {
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

router.put("/:id/removeuser", (req, res) => {
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

module.exports = router;
