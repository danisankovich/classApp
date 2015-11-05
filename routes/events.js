var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');

router.post('/new/:id', function(req, res) {
  Institution.findByIdAndUpdate(
    req.params.id,
    {$push: {"events": {
      name: req.body.name,
      creatorId: req.user._id,
      picUrl: req.body.picUrl,
      when: req.body.when,
      description: req.body.description,
      whoCanAttend: req.body.whoCanAttend,
      price: req.body.price
    }}},
    {safe: true, upsert: true},
    function(err, newEvent) {
      console.log(newEvent);
  });
});

module.exports = router;
