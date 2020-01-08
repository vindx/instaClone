const router = require('express').Router();
const User = require('../models/User');

// api/users/
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/users/:id
router.get('/:userName', async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.params.userName });
    if (!user) {
      return res.status(400).json({ msg: "User didn't found" });
    }
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedUser = await User.findByIdAndDelete(req.params.id);
    if (!removedUser) {
      return res.status(400).json({ msg: "User didn't found" });
    }
    res.json(removedUser);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});
module.exports = router;
