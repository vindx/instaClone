const multer = require('multer');

module.exports = async (req, res, next) => {
  const upload = multer({
    limits: {
      fileSize: 3145728,
    },
    fileFilter: (request, file, cb) => {
      const extension = file.mimetype.split('/')[0];
      if (extension !== 'image') {
        return cb(new Error('Please upload an image'));
      }
      cb(null, true);
    },
  }).single('img');

  upload(req, res, err => {
    if (err) {
      return res.status(400).json({ errors: [{ msg: err.message }] });
    }

    next();
  });
};
