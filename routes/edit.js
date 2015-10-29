var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');

router.post('/email', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"email": req.body.email},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/fullname', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"fullName": req.body.fullName},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});

router.post('/bio', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"bio": req.body.bio},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/currentjob', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"currentJob": req.body.currentJob},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/hireable', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"hireable": req.body.hireable},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/hiring', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"hiring": req.body.hiring},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/phonenumber', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"phoneNumber": req.body.phoneNumber},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/address', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"address": req.body.address},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/facebook', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"facebook": req.body.facebook},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/personal', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"personalWebsite": req.body.personalWebsite},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/linkedin', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"linkedIn": req.body.linkedIn},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/twitter', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"twitter": req.body.twitter},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/blog', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"blog": req.body.blog},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/github', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"github": req.body.github},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/angelist', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"angelist": req.body.angelist},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/stackoverflow', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"stackOverflow": req.body.stackOverflow},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/quora', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"quora": req.body.quora},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/profilepic', function(req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    {"profilePic": req.body.profilePic},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});

module.exports = router;
