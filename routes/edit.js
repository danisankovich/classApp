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

module.exports = router;
