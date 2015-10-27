var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');

router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
  res.send();
});

//Add full name to users on register.
//Add full name to users on register.
//Add full name to users on register.
//Add full name to users on register.
//Add full name to users on register.
//Add full name to users on register.
//Add full name to users on register.

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
    username: req.body.username,
    email: req.body.email,
    institutions: {
      name: req.body.institution,
      dateGraduated: req.body.dateGraduated
    }}),
    req.body.password, function(err, user) {
      if (err) {
        console.error(err);
      }
      passport.authenticate('local')(req, res, function() {
        Institution.find({name: req.body.institution}, function(err, institution) {
          // console.log("req inst", req.body.institution);
          // console.log("other inst", institution[0].name);
          if (institution[0] !== undefined) {
            // institution.alumni.push(user._id);
            // institution.save();
            institution[0].alumni.push(user._id);
            console.log("0 test", institution[0].alumni);
            institution[0].save();
          }
          else {
            Institution.create({
              name: req.body.institution,
              alumni: [user._id],
              // alumni: user._id,
            });
          }
        });
        res.redirect('/#/');
      });
   });
});

router.get('/login', function(req, res) {

});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

module.exports = router;
