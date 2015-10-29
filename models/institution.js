var Mongoose = require('mongoose');

var institution = Mongoose.Schema({
  //added when user adds a new one (upsert?)
  name: {type: String, unique: true},
  alumni: [],
  picUrl: {type: String, default: 'http://edukasyon.ph/assets/institution-default-logo-e8e6823adee81942cd3d2c9fd0161f87.png'},
  events: [{
    when: Date,
    whoCanAttend: String,
    price: Number,
    address: String,
  },
 ],
  tag: String,
});

var Institution = Mongoose.model('Institution', institution);
module.exports = Institution;
