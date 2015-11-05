var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Institution = require('../models/institution');
var Message = require('../models/message');


router.post('/:id', function(req, res, next) {
  console.log("hey bud", req.params.id);
  console.log('yaayay');
  User.findById("56396ff8afa0b8f92c69d141", function(err, user) {
    console.log(user);
    res.json(user);
  });
});


module.exports = router;
