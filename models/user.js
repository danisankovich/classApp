var Mongoose = require('mongoose');

var user = Mongoose.Schema({
  username: String,
  password: String,
  email: String,
  institutions: [{//can also add one from profile
    name: String,
    dateGraduated: String
  }],
  //above this, from login. Below, dynamically added.
  friends: [{
    name: String,
    friendId: "their _id",
    dateCreated: {default: Date.now()},
  }],
  bio: String,
  currentJob: String,
  hireable: Boolean,
  hiring: Boolean,
  phoneNumber: String,
  address: String,
  linkedIn: String,
  twitter: String,
  personalWebsite: String,
  blog: String,
  github: String,
  angelist: String,
  stackOverflow: String,
  quora: String,
});

var User = Mongoose.model('User', user);
module.exports = User;
