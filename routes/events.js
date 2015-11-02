var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');
var InstituteEvent = require('../models/event');


router.post('/new', function(req, res) {
  console.log("event form data", req.body);
  InstituteEvent.create({
    name: req.body.name,
    creatorId: req.user._id,
    picUrl: req.body.picUrl,
    when: req.body.when,
    description: req.body.description,
    whoCanAttend: req.body.whoCanAttend,
    price: req.body.price,
    sponsor: req.body.sponsor
  }, function(err, newEvent) {
    //why is newEvent undefined here????
    console.log('saved event', newEvent);
    res.status(err ? 400 : 200).send(err || newEvent);
  });
});

module.exports = router;
