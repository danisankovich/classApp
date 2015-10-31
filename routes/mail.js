var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');
var Message = require('../models/message');

router.get('/', function(req, res) { //when messages is opened, mark unread/new messages as false.
  User.findById(req.user._id, function(err, user) {
    Message.find({recipient: user._id}, function(err, messages) {
      console.log(messages);
    });
  });
});
router.get('/markread', function(req, res) { //when message is opened, mark unread/new messages as false.
  User.findByIdAndUpdate(
    req.user._id,
    {$set: {"messages": false}},
    {safe: true, upsert: true},
    function(err, user) {
  });
});


module.exports = router;
