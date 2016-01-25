// dao/blogSqlMapping.js
// CRUD
var example = {
    insert:'insert into example(title, description, url, picPath, resourcePath,createTime,updateTime) VALUES(?,?,?,?,?,?,?)',
    queryAll: 'select * from example order by id desc',
	queryByUpdateTime: 'select id, title, url from example order by updateTime desc',
	getCount: 'select count(1) from example'
};
 
module.exports = example;