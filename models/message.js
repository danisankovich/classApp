var Mongoose = require('mongoose');

var message = Mongoose.Schema({
  senderId: String,
  recipientId: String,
  subject: String,
  message: String,
});

var Message = Mongoose.model('Message', message);
module.exports = Message;
