const router = require('express').Router();
const auth = require('../middleware/auth.midddleware');
const formData = require('../middleware/formData.middleware');
const User = require('../models/User');
const Post = require('../models/Post');
const imageServices = require('../services/imageServices');

// api/users/all
// only for admin
router.get('/all', auth, async (req, res) => {
  try {
    if (req.user.role === 'user') {
      return res.status(403).json({ msg: 'Login like admin to see this page' });
    }
    const users = await User.find();
    res.json({ users });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/auth
// admin dont have access
router.get('/auth', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }
    const user = await User.findById(req.user.userId);
    user.posts = await Post.find({ owner: req.user.userId });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/auth/removeRequest
// admin dont have access
router.get('/auth/removeRequest', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }
    const user = await User.findById(req.user.userId);
    await User.findByIdAndUpdate(req.user.userId, { $set: { removeRequest: !user.removeRequest } });
    const changedUser = await User.findById(req.user.userId);
    res.json(changedUser.removeRequest);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/auth/uploadPhoto
// admin dont have access
router.put('/auth/uploadPhoto', auth, formData, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }

    const updateProfilePhoto = async profilePhoto => {
      await User.findByIdAndUpdate(req.user.userId, { profilePhoto });
      const updatedUser = await User.findById(req.user.userId);
      res.json({ profilePhoto: updatedUser.profilePhoto });
    };

    const image = req.file;
    const user = await User.findById(req.user.userId);
    const imageId = user.profilePhoto.split('/').reverse()[0];
    if (imageId) {
      const newProfilePhoto = await imageServices.updateImageById(imageId, image);
      await updateProfilePhoto(newProfilePhoto);
    } else {
      const newProfilePhoto = await imageServices.createImage(image);
      await updateProfilePhoto(newProfilePhoto);
    }
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/auth/deletePhoto
// admin dont have access
router.delete('/auth/deletePhoto', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }

    const user = await User.findById(req.user.userId);
    const imageId = user.profilePhoto.split('/').reverse()[0];
    if (imageId) {
      await imageServices.deleteImageById(imageId);
      await User.findByIdAndUpdate(req.user.userId, { profilePhoto: '' });
      res.json({ profilePhoto: '' });
    } else {
      res.status(400).json({ msg: "Image didn't found" });
    }
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
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role === 'user') {
      return res.status(403).json({ msg: 'Login like admin to see this page' });
    }
    const removedUser = await User.findByIdAndDelete(req.params.id);
    if (!removedUser) {
      return res.status(400).json({ msg: "User didn't found" });
    }
    const userImageId = removedUser.profilePhoto.split('/').reverse()[0];
    if (userImageId) {
      await imageServices.deleteImageById(userImageId);
    }
    const userPosts = await Post.find({ owner: req.params.id });
    await Promise.all(
      userPosts.map(async post => {
        const postImageId = post.postPhoto.split('/').reverse()[0];
        if (postImageId) {
          await imageServices.deleteImageById(postImageId);
        }
      })
    );
    await Post.deleteMany({ owner: req.params.id });
    res.json({ msg: 'User successfully removed', removedUser });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
