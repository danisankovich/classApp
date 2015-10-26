var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
  res.send();
});

router.get('/user', function(req, res, next) {
  User.findById(req.user.id, function(err, user) {
    if (err) {
      console.error(err);
    }
    else {
      res.json(req.user);
    }
  });
});

router.get('/register', function(req, res) {

});

router.post('/register', function(req, res) {
  console.log("reqajsdflkjadsfg", req.body);
  User.register(new User({
    username: req.body.username, email: req.body.email, institutions: {name: req.body.institution, dateGraduated: req.body.dateGraduated}}),
    req.body.password, function(err, user) {
      if (err) {
        console.error(err);
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/#/');
      });
   });
  //then(function(user) {
  //   console.log("look, a user", user);
  //   user.institutions[0] = {name: req.body.institution, dateGraduated: req.body.dateGraduated};
  //   user.save();
  // });
});

router.get('/login', function(req, res) {

});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

module.exports = router;
