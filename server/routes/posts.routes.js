const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth.midddleware');
const Post = require('../models/Post');

// api/posts/all
router.get('/all', auth, async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ posts });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/posts/create
router.post(
  '/create',
  auth,
  check('description', 'This field is required.').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ msg: 'Some errors', errors: errors.array() });
      }

      const { description, postPhoto, tags } = req.body;
      const post = new Post({ owner: req.user.userId, description, postPhoto, tags });
      await post.save();
      res.status(201).json({ msg: 'Post creation successful', post });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  }
);

// api/posts/delete/id
router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.id);
    if (!removedPost) {
      return res.status(400).json({ msg: "Post didn't found" });
    }
    res.json({ msg: 'Post successfully deleted ', removedPost });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/posts/like
router.get('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ msg: "Post didn't found" });
    }
    if (post.likes.includes(req.user.userId)) {
      await Post.findByIdAndUpdate(req.params.id, { $pull: { likes: req.user.userId } });
      res.json({ wasLiked: false });
    } else {
      await Post.findByIdAndUpdate(req.params.id, { $push: { likes: req.user.userId } });
      res.json({ wasLiked: true });
    }
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
