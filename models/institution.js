var Mongoose = require('mongoose');

var institution = Mongoose.Schema({
  //added when user adds a new one (upsert?)
  name: {type: String, unique: true},
  alumni: [{
    alumniId: String, //user _id
  }],
  events: [{
    when: Date,
    whoCanAttend: String,
    price: Number,
    address: String
  }]
});

var Intstitution = Mongoose.model('Intstitution', institution);
module.exports = Institution;
