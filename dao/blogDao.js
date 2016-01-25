// dao/blogDao.js
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./blogSqlMapping');

var pool  = mysql.createPool($conf.mysql);
//var connection = mysql.createConnection({multipleStatements: true});
 
 /* get all blogs */
var queryAll = exports.queryAll = function (callback) {
	pool.getConnection(function(err, connection) {
        //connection.query('select id, title from blog order by id desc;select id, title from blog order by updateTime desc limit 6', function(err, result) {
		connection.query(''+$sql.queryAll+';'+$sql.selectByUpdateTime+'', function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
}

 /* get blogs order by update time desc limit 6*/
var selectByUpdateTime = exports.selectByUpdateTime = function(callback) {
	pool.getConnection(function(err, connection) {
		connection.query($sql.selectByUpdateTime, function(err, result) {
			callback(false, result);
		});
    });
}

 /* get blog by id */
var queryById = exports.queryById = function (id, callback) {
    pool.getConnection(function(err, connection) {
        connection.query($sql.queryById, [id], function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
}


/* insert blog  */
var insert = exports.insert = function (req, callback) {
	pool.getConnection(function(err, connection) {
        connection.query($sql.insert, [req.body.title,req.body.content,new Date()], function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
}

/* update blog  */
var update = exports.update = function (req, callback) {
	pool.getConnection(function(err, connection) {
        connection.query($sql.update, [req.body.title,req.body.content,new Date(),req.body.id], function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
}

