var express = require('express');
var router = express.Router();
var fs= require("fs");
var path = require('path');
var formidable = require('formidable');

var exampleDao=require('../dao/exampleDao');

/* show exmaple list page. */
router.get('/', function(req, res, next) {
	exampleDao.exampleMain(function(err,callback){
        if(err){
            res.send('no example result！');
        }
		res.render('examples', { exampleList:callback[0],updateList:callback[1]});
    });
});

/* example page : show demo */
router.get('/example', function(req, res, next) {
    res.render(req.query.path);
});

/* upload example page */
router.get('/exampleUpload', function(req, res, next) {
    res.render('layout/exampleUpload',{id:'', title:'', url:'',description:''});
});

/* upload */
router.post('/doUpload', function(req, res, next) {
	var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    form.uploadDir = '../demo1/public/upload/resources';	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    //form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
	form.parse(req, function(err, fields, files) {
		if (err) {
			//res.locals.error = err;
			res.render('layout/exampleUpload',{id:'', title:'',url:'',description:''});
			return;		
		}	  
		
		exampleDao.insert(fields,files, function(err,callback){
			if(err){
				res.send('Insert failed！');
			}
			res.redirect('/examples');
		});
		
	});
});

/* download : download file */
router.get('/download', function(req, res, next) {
	var fullPath = path.resolve(req.query.filepath);
	fullPath = fullPath + '\\' + req.query.filename;
	res.download(fullPath,function(err){
		console.log('File download error：===》'+err);  
	}); 
	/*
	var fullPath = path.resolve(req.query.realpath);
	console.log(fullPath);
	console.log(req.query.filename);
	var fstream = fs.createReadStream(fullPath);
	res.writeHead(200, {
      'Content-Type': 'application/force-download',
      'Content-Disposition': 'attachment; filename='+req.query.filename
    });
	fstream.on('data',function(filebody){
		res.write(filebody);
	});
    fstream.pipe(res);
	fstream.on('error',function(err){
		console.log(err);
	});
	*/
});

module.exports = router;
