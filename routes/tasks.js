var express = require('express');
var router = express.Router();

var taskDao=require('../dao/taskDao');

/* task main page. */
router.get('/user', function(req, res, next) {
	taskDao.queryAll(req, function(err,callback){
		if(err){
			res.send('no task result！');
		}
		var status=0;
		
		if(req.query.taskStatus=='' || req.query.taskStatus==undefined){
			status=0;
		} else {
			status=req.query.taskStatus;
		}
		res.render('user/task', { taskList:callback[0],countTarget:callback[1],countDaily:callback[2],status:status});
	});	
});

/* submit task */
router.post('/doSubmit', function(req, res, next) {
	if (req.body.taskId != '') {
		taskDao.updateTaskContent(req, function(err,result){
			if(err){
				res.send('Update failed！');
			}
			res.redirect('/tasks/user');
		});
	} else {
		taskDao.insert(req, function(err,result){
			if(err){
				res.send('Insert failed！');
			}
			res.redirect('/tasks/user');
		});
	}
});

/* modify task status */
router.post('/doModifyStatus', function(req, res, next) {
	taskDao.updateTaskStatus(req, function(err, result){
        if(err){
            res.send('Error！');
        }
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
