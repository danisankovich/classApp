var Mongoose = require('mongoose');

var message = Mongoose.Schema({
  senderId: String,
  recipientId: String,
  subject: String,
  message: String,
  read: {type: String, default: false}
});

var Message = Mongoose.model('Message', message);
module.exports = Message;
