const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, default: '' },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: { type: Array, default: [] },
  profilePhoto: { type: String, default: '' },
  removeRequest: { type: Boolean, default: false },
});

module.exports = model('User', userSchema);
