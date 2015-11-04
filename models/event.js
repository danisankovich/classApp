var Mongoose = require('mongoose');

var instituteEvent = Mongoose.Schema({
  name: {type: String, required: true},
  attendeeIds: [],
  creatorId: String,
  picUrl: {type: String, default: "https://www.noblehour.com/public/front-end/layouts/images/event-default-logo.png"},
  when: {type: Date, required: true},
  description: String,
  whoCanAttend: String,
  price: Number,
  address: String,
  sponsor: String
});

var InstituteEvent = Mongoose.model('InstituteEvent', instituteEvent);
module.exports = InstituteEvent;
