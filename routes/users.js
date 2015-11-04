var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.post('/addfriend/:id', function(req, res, next) {
//   console.log("hey bud", req.params.id);
//   User.findById(req.params.id, function(err, user) {
//     console.log(user);
//     res.json(user);
//   });
// });

router.post('/:id', function(req, res, next) {
  console.log("hey bud", req.params.id);
  console.log('yaayay');
  User.findById("56396ff8afa0b8f92c69d141", function(err, user) {
    console.log(user);
    res.json(user);
  });
});


module.exports = router;
