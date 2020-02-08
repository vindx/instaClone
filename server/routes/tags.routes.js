const router = require('express').Router();
const auth = require('../middleware/auth.midddleware');
const Tag = require('../models/Tag');

// api/tags/all
router.get('/all', async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json({ tags });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/tags/id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) {
      return res.status(400).json({ msg: "Tag didn't found" });
    }
    res.json({ tag });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/tags/find
router.post('/find', async (req, res) => {
  try {
    const { tagName } = req.body;
    if (tagName.length < 3) {
      return res.status(400).json({ msg: 'At least 3 symbols' });
    }
    const tags = await Tag.find({ tagName: { $regex: tagName } });
    res.json({ tags });
  } catch (e) {
    res.status(500).json({ msg: 'Something went wrong. Please try again later.' });
  }
});

// api/tags/create
// admin dont have access
router.post('/create', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ msg: 'Login like common user to see this page' });
    }
    const { tagName } = req.body;
    if (tagName.length < 3) {
      return res.status(400).json({ msg: 'At least 3 symbols' });
    }
    const existedTag = await Tag.findOne({ tagName });
    if (existedTag) {
      return res.status(400).json({ msg: 'Tag exist already.' });
    }
    const tag = new Tag({ tagName });
    await tag.save();
    res.status(201).json({ msg: 'Tag creation successful', tag });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/tags/delete/id
// only for admin
router.delete('/delete/:id', auth, async (req, res) => {
  try {
    if (req.user.role === 'user') {
      return res.status(403).json({ msg: 'Login like admin to see this page' });
    }
    const removedTag = await Tag.findByIdAndDelete(req.params.id);
    if (!removedTag) {
      return res.status(400).json({ msg: "Tag didn't found" });
    }
    res.json({ msg: 'Tag successfully deleted' });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
