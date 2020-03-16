const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth.midddleware');
const User = require('../models/User');

// api/auth/me
router.get('/me', auth, async (req, res) => {
  try {
    res.json({ msg: 'You are authorized', userId: req.user.userId, role: req.user.role });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'This field is required.').exists(),
    check('userName', 'This field is required.').exists(),
    check('password', 'This field is required.').exists(),
    check('email', 'Enter a valid email address.').isEmail(),
    check('password', 'Create a password at least 6 characters long.').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ msg: 'Some errors', errors: errors.array() });
      }

      let { email, userName } = req.body;
      const { fullName, password } = req.body;
      email = email.toLowerCase();
      userName = userName.toLowerCase();

      const emailExist = await User.findOne({ email });
      const userNameExist = await User.findOne({ userName });

      if (emailExist || userNameExist) {
        if (emailExist) {
          return res
            .status(400)
            .json({ errorFiled: 'email', msg: 'Another account is using this email.' });
        }
        if (userNameExist) {
          return res.status(400).json({
            errorFiled: 'userName',
            msg: "This username isn't available. Please try another.",
          });
        }
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        userName,
        fullName,
        password: hashedPassword,
      });
      await user.save();
      const existedUser = await User.findOne({ email });
      const token = jwt.sign({ userId: existedUser.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ msg: 'Register successful', userId: existedUser.id, token, role: 'user' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  }
);

// /api/auth/login
router.post(
  '/login',
  [
    check('emailOrUserName', 'This field is required.').exists(),
    check('password', 'This field is required.').exists(),
    check('password', 'Create a password at least 6 characters long.').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ msg: 'Some errors', errors: errors.array() });
      }

      const { emailOrUserName, password } = req.body;
      const user =
        (await User.findOne({ email: emailOrUserName.toLowerCase() })) ||
        (await User.findOne({ userName: emailOrUserName.toLowerCase() }));
      if (!user) {
        return res.status(400).json({
          errorFiled: 'userName',
          msg:
            "The username you entered doesn't belong to an account. Please check your username and try again.",
        });
      }
      const passwordIsMatched = await bcrypt.compare(password, user.password);
      if (!passwordIsMatched) {
        return res.status(400).json({
          errorFiled: 'password',
          msg: 'Sorry, your password was incorrect. Please double-check your password.',
        });
      }
      const role =
        emailOrUserName.toLowerCase() === 'admin' ||
        emailOrUserName.toLowerCase() === 'admin@a.admin'
          ? 'admin'
          : 'user';
      const token = jwt.sign(
        {
          userId: user.id,
          role,
        },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      );

      res.json({ msg: 'Login successful', userId: user.id, token, role });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  }
);

module.exports = router;
