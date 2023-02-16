const express = require('express');
const passport = require('passport');
const router = express.Router();

/* GET users listing. */
router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.post('/profile', (req, res, next) => {
  res.send('Posted')
});

module.exports = router;
