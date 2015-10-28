var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: String,
  email: String,
  fullName: String,
  password: String,
  institutions: [{//can also add one from profile
    name: String,
    dateGraduated: String
  }],
  //above this, from login. Below, dynamically added.
  friends: [{
    name: String,
    sharedInstitution: String,
    friendId: String, //their _id
    // dateCreated: {default: Date.now()},
  }],
  bio: String,
  currentJob: String,
  hireable: Boolean,
  hiring: Boolean,
  phoneNumber: String,
  address: [{
    street: String,
    city: String,
    state: String,
    zip: String
  }],
  facebook: String,
  linkedIn: String,
  twitter: String,
  personalWebsite: String,
  blog: String,
  github: String,
  angelist: String,
  stackOverflow: String,
  quora: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
