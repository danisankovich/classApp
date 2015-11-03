var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  fullName: {type: String, required: true},
  password: String,
  institutions: [{
    name: {type: String, required: true},
    dateGraduated: {type: String, required: true}
  }],
  friends: [{
    name: String,
    sharedInstitution: String,
    friendId: String,
    created_at: {type: Date, default: Date.now},
  }],
  bio: String,
  currentJob: String,
  hireable: Boolean,
  hiring: Boolean,
  phoneNumber: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  facebook: String,
  linkedIn: String,
  twitter: String,
  personalWebsite: String,
  blog: String,
  github: String,
  angelList: String,
  stackOverflow: String,
  quora: String,
  profilePic: {type: String, default: "http://www.placehold.it/200x200"},
  unreadMessages: {type: Boolean, default: false},
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
