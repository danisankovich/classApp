var express = require('express');
var router = express.Router();
var passport = require('passport');
var logout = require('express-passport-logout');
var User = require('../models/user');
var Institution = require('../models/institution');
var Message = require('../models/message');

router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
  // res.send();
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
  User.register(new User({
    username: req.body.username,
    email: req.body.email,
    fullName: req.body.fullName,
    institutions: []
  }),
    req.body.password, function(err, user) {
      if(user === undefined){
        res.send(err);
      }
      else {
        passport.authenticate('local', {failureRedirect: '/#/register' })(req, res, function() {
        Institution.find({name: req.body.institution}, function(err, institution) {
          if (institution[0] !== undefined) {
            institution[0].alumni.push(user._id);
            user.institutions = [{name: req.body.institution, dateGraduated: req.body.dateGraduated, instId: institution[0]._id}];
            user.save();
            institution[0].save();
          }
          else {
            Institution.create({
              name: req.body.institution,
              alumni: [user._id],
            }, function() {
              Institution.find({name: req.body.institution}, function(err, inst) {
                user.institutions = [{name: req.body.institution, dateGraduated: req.body.dateGraduated, instId: inst[0]._id}];
                user.save();
              });
            });
          }
        });
        res.redirect('/#/');
      });
    }
   });
});

router.get('/login', function(req, res) {
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/#/',
  failureRedirect: '/#/login' }
));

router.get('/logout', function(req, res) {
  if (req.isAuthenticated()){
    req.logout();
  }
  res.redirect('/#/');
});

router.get('/institutions', function(req, res) {
  Institution.find({}, function(err, institution) {
    res.json(institution);
  });
});

router.get('/institute/:id', function(req, res) {
  console.log(req.params.id);
  Institution.findById(req.params.id, function(err, institution) {
    res.json(institution);
  });
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.json(user);
  });
});

router.post("/institution/newalumni/:id", function(req, res) {
  Institution.findById(req.params.id, function(err, institution) {
    institution.alumni.push(req.user._id);
    institution.save();
    res.send(institution);
  });
});

// router.post("/alumni/newinstitution/:id", function(req, res) {
//   console.log(req.body);
//
//   Institution.findById(req.params.id, function(err, institution) {
//     // console.log("NOONONONONONON", req.user._id);
//     // User.findById(req.user._id, function(err, user) {
//     //   user.institutions.push({name: institution.name, dateGraduated: req.body.dateGraduated});
//     //   console.log(user);
//     //   user.save();
//     //   res.send(user);
//     // });
//     User.findByIdAndUpdate(
//       req.user._id,
//       {$push: {"institutions": {"name": institution.name, "dateGraduated": req.body.dateGraduated}}},
//       {safe: true, upsert: true},
//       function(err, updated) {
//         console.log("LOOK AT ME", updated);
//     });
//   });
// });

router.post('/addfriend/:id', function(req, res, next) {
  User.findByIdAndUpdate(
    req.params.id,
    {$push: {"friends": {friendId: req.user._id}}},
    {safe: true, upsert: true},
    function(err, newFriend) {
      console.log("newFriend", newFriend);
      User.findByIdAndUpdate(
        req.user._id,
        {$push: {"friends": {friendId: req.params.id}}},
        {safe: true, upsert: true},
        function(err, user) {
          console.log(user);
          res.status(err ? 400 : 200).send(err || user)

      });
    });
});

router.get('/friends/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, friend) {
    res.json(friend);
  });
});

module.exports = router;
