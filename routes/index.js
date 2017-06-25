var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yik Yak' });
});

router.get('/createzone', function(req, res, next) {
  res.render('createzone', { title: 'Yik Yak' });
});

router.get('/createcomment', function(req, res, next) {
  res.render('createcomment', { title: 'Yik Yak' });
});

module.exports = router;
