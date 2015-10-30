var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');

router.post('/new', function(res, req) {
  console.log("this new event", req.body);

});

module.exports = router;
