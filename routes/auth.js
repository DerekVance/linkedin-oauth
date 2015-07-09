var express = require('express')
var router = express.Router();
var passport = require('passport');

router.get('/auth/linkedin', passport.authenticate('linkedin'));

router.get('/logout', function (req, res, next) {
  req.session = null
  res.redirect('/')
});

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: '/nowayjose  ',
    successRedirect: '/'
  }));

module.exports = router;
