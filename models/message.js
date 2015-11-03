var Mongoose = require('mongoose');

var message = Mongoose.Schema({
  senderId: String,
  recipientId: String,
  subject: String,
  message: String,
  sent: {type: Date, default: Date.now},
  read: {type: String, default: false}
});

var Message = Mongoose.model('Message', message);
module.exports = Message;
