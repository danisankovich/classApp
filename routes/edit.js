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
router.post('/street', function(req, res) {
  console.log("buncha", req.body.street);
  User.findByIdAndUpdate(
    req.user._id,
    {"street": req.body.street},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/city', function(req, res) {
  console.log("buncha", req.body.city);
  User.findByIdAndUpdate(
    req.user._id,
    {"city": req.body.city},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/state', function(req, res) {
  console.log("buncha", req.body.state);
  User.findByIdAndUpdate(
    req.user._id,
    {"state": req.body.state},
    {safe: true, upsert: true},
    function(err, user) {
      console.log(user);
  });
});
router.post('/zip', function(req, res) {
  console.log("buncha", req.body.zip);
  User.findByIdAndUpdate(
    req.user._id,
    {"zip": req.body.zip},
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
router.post('/institutiontag/:id', function(req, res) {
  Institution.findByIdAndUpdate(
    req.params.id,
    {"tag": req.body.tag},
    {safe: true, upsert: true},
    function(err, institution) {
      console.log(institution);
  });
});
router.post('/institutionpic/:id', function(req, res) {
  console.log(req.body.picUrl);
  Institution.findByIdAndUpdate(
    req.params.id,
    {"picUrl": req.body.picUrl},
    {safe: true, upsert: true},
    function(err, institution) {
      console.log(institution);
  });
});
router.post('/institutionbio/:id', function(req, res) {
  console.log("myid", req.params.id);
  console.log("bio stuff", req.body.bio);
  Institution.findByIdAndUpdate(
    req.params.id,
    {"bio": req.body.bio},
    {safe: true, upsert: true},
    function(err, institution) {
      console.log(institution);
  });
});
router.post('/institutionalumni/:id/:alum', function(req, res) {
    Institution.findById(req.params.id, function(err, institution) {
      User.findById(req.params.alum, function(err, user) {
        for (var i = 0; i < institution.alumni.length; i++) {
          if (institution.alumni[i] == req.params.alum) {
            // console.log('hello');
            var remove = institution.alumni.indexOf(institution.alumni[i]);
            institution.alumni.splice(remove, 1);
            for(var j = 0; j < user.institutions.length; j++) {
              if(user.institutions[j].name == institution.name) {
                var leave = institution.alumni.indexOf(institution.alumni[i]);
                user.institutions.splice(leave, 1);
                user.save();
              }
            }
          }
          institution.save();
        }
      });
    });
});
router.post('/leaveinstitution/:id/:alum', function(req, res) {
  console.log('TBC');
  User.findById(req.params.alum, function(err, user) {
    console.log("user removd", user);
  //   Institution.findById(req.params.id, function(err, institution) {
  //     for(var i = 0; i < user.institutions; i++) {
  //       if (user.institutions[i].name == institution.name) {
  //         console.log('hello');
  //         var remove = user.institutions.alumni.indexOf(institution.alumni[i]);
  //         institution.alumni.splice(remove, 1);
  //         console.log(institution.alumni);
  //       }
  //       // user.save()
  //     }
  //   });
  });
});


module.exports = router;
