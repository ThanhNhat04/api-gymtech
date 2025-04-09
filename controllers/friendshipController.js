// controllers/friendshipController.js
const Friendship = require('../models/Friendship');

exports.getAllFriendships = async (req, res) => {
  try {
    const friendships = await Friendship.find();
    res.json(friendships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFriendship = async (req, res) => {
  try {
    const newFriendship = new Friendship(req.body);
    await newFriendship.save();
    res.status(201).json(newFriendship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteFriendship = async (req, res) => {
  try {
    const deletedFriendship = await Friendship.findByIdAndDelete(req.params.id);
    if (!deletedFriendship)
      return res.status(404).json({ message: 'Quan hệ không tồn tại' });
    res.json({ message: 'Xoá bạn bè thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
