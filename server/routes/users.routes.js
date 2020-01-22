const router = require('express').Router();
const auth = require('../middleware/auth.midddleware');
const admin = require('../middleware/admin.middleware');
const User = require('../models/User');
const Post = require('../models/Post');

// api/users/all
// only for admin
router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/auth
router.get('/auth', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.posts = await Post.find({ owner: req.user.userId });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/auth/removeRequest
router.get('/auth/removeRequest', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    await User.findByIdAndUpdate(req.user.userId, { $set: { removeRequest: !user.removeRequest } });
    const changedUser = await User.findById(req.user.userId);
    res.json(changedUser.removeRequest);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/userName
router.get('/:userName', async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.params.userName });
    if (!user) {
      return res.status(400).json({ msg: "User didn't found" });
    }
    user.posts = await Post.find({ owner: user.id });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/id
// only for admin
router.delete('/:id', async (req, res) => {
  try {
    const removedUser = await User.findByIdAndDelete(req.params.id);
    if (!removedUser) {
      return res.status(400).json({ msg: "User didn't found" });
    }
    await Post.deleteMany({ owner: req.params.id });
    res.json({ msg: 'User successfully removed', removedUser });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});
module.exports = router;
