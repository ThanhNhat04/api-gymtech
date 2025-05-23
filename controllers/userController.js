// controllers/userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, req.body,
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    res.json({ message: 'Xoá người dùng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
