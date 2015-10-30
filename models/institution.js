var Mongoose = require('mongoose');

var institution = Mongoose.Schema({
  //added when user adds a new one (upsert?)
  name: {type: String, unique: true},
  alumni: [],
  picUrl: {type: String, default: "http://edukasyon.ph/assets/institution-default-logo-e8e6823adee81942cd3d2c9fd0161f87.png"},
  bannerUrl: {type: String, default: "http://edukasyon.ph/assets/institution-default-logo-e8e6823adee81942cd3d2c9fd0161f87.png"},
  events: [], //eventId
  bio: String,
  tag: String,
  contactPhone: String,
  contactEmail: String,
  contactFax: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  companySite: String
});

var Institution = Mongoose.model('Institution', institution);
module.exports = Institution;
