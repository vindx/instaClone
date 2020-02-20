const router = require('express').Router();
const Image = require('../models/Image');

// api/images/all
router.get('/all', async (req, res) => {
  try {
    const images = await Image.find();
    res.json({ images });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// api/images/id
router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    res.set('Content-Type', 'image/jpeg');
    res.send(image.buffer);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
