// models/Exercise.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: String,
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  muscleGroups: [String],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exercise', exerciseSchema);
