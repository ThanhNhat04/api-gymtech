// controllers/exerciseController.js
const Exercise = require('../models/Exercise');

exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createExercise = async (req, res) => {
  try {
    const newExercise = new Exercise(req.body);
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExercise)
      return res.status(404).json({ message: 'Bài tập không tồn tại' });
    res.json(updatedExercise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!deletedExercise)
      return res.status(404).json({ message: 'Bài tập không tồn tại' });
    res.json({ message: 'Xoá bài tập thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
