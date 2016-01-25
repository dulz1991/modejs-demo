// dao/blogDao.js
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./exampleSqlMapping');

var pool  = mysql.createPool($conf.mysql);
//var connection = mysql.createConnection({multipleStatements: true});
 
 /* get all blogs */
var exampleMain = exports.exampleMain = function (callback) {
	pool.getConnection(function(err, connection) {
		connection.query(''+$sql.queryAll+';'+$sql.queryByUpdateTime+'', function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
}

/* insert blog  */
var insert = exports.insert = function (fields, files, callback) {
	
	var path1 = files.pic.path;
	var index1 = path1.lastIndexOf('\\')+1;
	var picPath = 'upload/resources/'+path1.substring(index1,path1.length);
	
	var path2 = files.att.path;
	var index2 = path2.lastIndexOf('\\')+1;
	var attPath = path2.substring(index2,path2.length)

	console.log("picPath:"+picPath);
	console.log("attPath:"+attPath);
	
	pool.getConnection(function(err, connection) {
        connection.query($sql.insert, [fields.title,fields.description,fields.url,picPath,attPath,new Date(),new Date()], function(err, result) {
			if (err) {
				callback(true);
				return;
			}
			callback(false, result);
		});
    });
}


