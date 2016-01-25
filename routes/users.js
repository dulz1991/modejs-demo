var express = require('express');
var router = express.Router();

/* user management > home page. */
router.get('/', function(req, res, next) {
  res.render('user/index');
});

/* user management > task page. */
// router.get('/task', function(req, res, next) {
  // res.render('user/task');
// });

/* user management > blog page. */
router.get('/blog', function(req, res, next) {
  res.render('user/blog');
});

module.exports = router;
