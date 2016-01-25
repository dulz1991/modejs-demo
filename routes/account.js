var express = require('express');
var router = express.Router();

/* login page */
router.get('/login', function(req, res, next) {
	res.render('account/login');
});

/* do log out */
router.get('/logout', function(req, res, next) {
	res.redirect('/');
});

module.exports = router;
