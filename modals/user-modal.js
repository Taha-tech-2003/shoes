const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Token: { type: String, required: false },
  Phone: { type: Number, required: true },
});

module.exports = mongoose.model('User', UserSchema);