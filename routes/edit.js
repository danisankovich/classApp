var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');

router.post('/username', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.username = req.body.username;
      user.save();
      res.send(user);
    }
  });
});
router.post('/email', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.username = req.body.email;
      user.save();
      res.send(user);
    }
  });
});
router.post('/fullname', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.fullName = req.body.fullName;
      user.save();
      res.send(user);
    }
  });
});

router.post('/bio', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.bio = req.body.bio;
      user.save();
      res.send(user);
    }
  });
});
router.post('/currentjob', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.currentJob = req.body.currentJob;
      user.save();
      res.send(user);
    }
  });
});
router.post('/hireable', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.hireable = req.body.hireable;
      user.save();
      res.send(user);
    }
  });
});
router.post('/hiring', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.hiring = req.body.hiring;
      user.save();
      res.send(user);
    }
  });
});
router.post('/phonenumber', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.phoneNumber = req.body.phoneNumber;
      user.save();
      res.send(user);
    }
  });
});
router.post('/address', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.address = req.body.address;
      user.save();
      res.send(user);
    }
  });
});
router.post('/facebook', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.facebook = req.body.facebook;
      user.save();
      res.send(user);
    }
  });
});
router.post('/personal', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.personalWebsite = req.body.personalWebsite;
      user.save();
      res.send(user);
    }
  });
});
router.post('/linkedin', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.linkedIn = req.body.linkedIn;
      user.save();
      res.send(user);
    }
  });
});
router.post('/twitter', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.twitter = req.body.twitter;
      user.save();
      res.send(user);
    }
  });
});
router.post('/blog', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.blog = req.body.blog;
      user.save();
      res.send(user);
    }
  });
});
router.post('/github', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.github = req.body.github;
      user.save();
      res.send(user);
    }
  });
});
router.post('/angelist', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.angelist = req.body.angelist;
      user.save();
      res.send(user);
    }
  });
});
router.post('/stackOverflow', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.stackOverflow = req.body.stackOverflow;
      user.save();
      res.send(user);
    }
  });
});
router.post('/quora', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.findById("562f1f88531578b89a64f3cf", function(err, user) {
  // User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      user.quora = req.body.quora;
      user.save();
      res.send(user);
    }
  });
});

module.exports = router;
