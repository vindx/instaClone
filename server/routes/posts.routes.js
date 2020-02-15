const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth.midddleware');
const paginate = require('../middleware/paginate.middleware');
const Post = require('../models/Post');
const User = require('../models/User');

// api/posts/all
// admin dont have access
router.get('/all', auth, paginate(Post), async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }
    res.json({ posts: res.paginatedResults });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/posts/byTag/id
// admin dont have access
router.get('/byTag/:id', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }
    const posts = await Post.find().sort({ _id: -1 });
    const postsByTag = posts.filter(({ tags }) => tags.find(tag => tag._id === req.params.id));
    res.json({ posts: { results: postsByTag } });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/posts/create
// admin dont have access
router.post(
  '/create',
  auth,
  check('description', 'This field is required.').exists(),
  async (req, res) => {
    try {
      if (req.user.role === 'admin') {
        return res.status(403).json({ msg: 'Login like common user to see this page' });
      }
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ msg: 'Some errors', errors: errors.array() });
      }
      const ownerInfo = await User.findById(req.user.userId);
      const { description, postPhoto, tags } = req.body;
      const post = new Post({
        owner: req.user.userId,
        ownerInfo: { profilePhoto: ownerInfo.profilePhoto, userName: ownerInfo.userName },
        description,
        postPhoto,
        tags,
      });
      await post.save();
      res.status(201).json({ msg: 'Post creation successful', post });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  }
);

// api/posts/delete/id
// admin dont have access
router.delete('/delete/:id', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }
    const removedPost = await Post.findByIdAndDelete(req.params.id);
    if (!removedPost) {
      return res.status(400).json({ msg: "Post didn't found" });
    }
    res.json({ msg: 'Post successfully deleted' });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/posts/like
// admin dont have access
router.get('/like/:id', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ msg: "Post didn't found" });
    }
    if (post.likes.includes(req.user.userId)) {
      await Post.findByIdAndUpdate(req.params.id, { $pull: { likes: req.user.userId } });
      res.json({ byWhom: req.user.userId, wasLiked: false });
    } else {
      await Post.findByIdAndUpdate(req.params.id, { $push: { likes: req.user.userId } });
      res.json({ byWhom: req.user.userId, wasLiked: true });
    }
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
