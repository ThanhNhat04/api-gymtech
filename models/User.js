// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:   { type: String, required: true, unique: true },
  email:      { type: String, required: true, unique: true },
  password:   { type: String, required: true },
  fullName:   { type: String, required: true },
  role:       { type: String, enum: ['admin', 'user'], default: 'user' },
  // Thông tin cá nhân
  height: Number,
  weight: Number,
  gender: { type: String, enum: ['male', 'female', 'other'] },
  dateOfBirth: Date,
  fitnessGoals: String,
  // Kết bạn
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  sentRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  receivedRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
