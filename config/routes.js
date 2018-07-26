const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
     res.render('pages/index');
});
router.get('/login', function (req, res) {
  res.render('pages/login');
});
router.get('/profile', function (req, res) {
  res.render('pages/profile');
});
router.get('/video-chat', function (req, res) {
  res.render('pages/video-chat');
});
router.get('/browse-jobs', function (req, res) {
  res.render('pages/browse-jobs');
});
router.get('/video-chat', function (req, res) {
  res.render('pages/video-chat');
});
router.get('/about-us', function (req, res) {
  res.render('pages/about-us');
});
router.get('/contact', function (req, res) {
  res.render('pages/contact');
});
router.get('/post-job', function (req, res) {
  res.render('pages/post-job');
});

module.exports = router
