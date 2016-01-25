var express = require('express');
var router = express.Router();

var blogDao=require('../dao/blogDao');

/* blog main page. */
router.get('/', function(req, res, next) {
	blogDao.queryAll(function(err,callback){
        if(err){
            res.send('no blog result！');
        }
		res.render('blogs', { blogList:callback[0],updateList:callback[1]});
    });
});

/* blog page */
router.get('/blog', function(req, res, next) {
	blogDao.queryById(req.query.id, function(err,result){
        if(err){
            res.send('not result！');
        }
        res.render('blog', { content:result});
    });
});

/* create new blog */
router.get('/create', function(req, res, next) {
    res.render('layout/create',{id:'', title:'',content:''});
});

/* submit blog */
router.post('/doCreate', function(req, res, next) {
	if (req.body.id != '') {
		blogDao.update(req, function(err,result){
			if(err){
				res.send('Update failed！');
			}
			res.redirect('/blogs/blog?id='+req.body.id);
		});
	} else {
		blogDao.insert(req, function(err,result){
			if(err){
				res.send('Insert failed！');
			}
			res.redirect('/blogs');
		});
	}
});

/* edit blog */
router.get('/edit', function(req, res, next) {
	blogDao.queryById(req.query.id, function(err, result){
        if(err){
            res.send('Error！');
        }
        res.render('layout/create', { id:result[0].id, title:result[0].title, content:result[0].content});
    });
});

// auth check
function requiredAuthentication(req, res, next) {
    // permit
	// next();
    
	// not permit
    // res.redirect('/login');
}

module.exports = router;
