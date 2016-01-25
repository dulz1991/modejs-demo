// dao/blogDao.js
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./taskSqlMapping');

var pool  = mysql.createPool($conf.mysql);
//var connection = mysql.createConnection({multipleStatements: true});
 
 /* get all blogs */
var queryAll = exports.queryAll = function (req, callback) {
	console.log();
	if(req.query.taskStatus==2){
		pool.getConnection(function(err, connection) {
		connection.query($sql.queryAll+';'+$sql.getTargetTaskCount+';'+$sql.getDailyTaskCount, function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
	} else {
		pool.getConnection(function(err, connection) {
		connection.query($sql.queryAll+';'+$sql.getTargetTaskCount+';'+$sql.getDailyTaskCount, function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
	}
	
}

 /* update task content */
var updateTaskContent = exports.updateTaskContent = function(req,callback) {
	pool.getConnection(function(err, connection) {
		connection.query($sql.updateTaskContent,[req.body.taskContent,req.body.taskId], function(err, result) {
			callback(false, result);
		});
    });
}

/* insert task  */
var insert = exports.insert = function (req, callback) {
	console.log(1);
	pool.getConnection(function(err, connection) {
        connection.query($sql.insert,[req.body.taskContent,0], function(err, result) {
			callback(false, result);
		});
    });
}

/* update task status  */
var updateTaskStatus = exports.updateTaskStatus = function (req, callback) {
	pool.getConnection(function(err, connection) {
        connection.query($sql.queryById,[req.body.taskId], function(err, result) {
			var status=1;
			if(result[0].currentStatus==1){
				status=0;
			}
			connection.query($sql.updateTaskStatus,[status,req.body.taskId], function(err, result) {
				callback(false, result);
			});
		});
   });
}

