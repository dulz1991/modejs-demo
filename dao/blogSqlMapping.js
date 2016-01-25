// dao/blogSqlMapping.js
// CRUD
var blog = {
    insert:'insert into blog(title, content, createTime) VALUES(?,?,?)',
    update:'update blog set title=?, content=?, updateTime=? where id=?',
    //delete: 'delete from user where id=?',
    queryAll: 'select id, title from blog order by id desc',
	queryById: 'select * from blog where id=?',
	selectByUpdateTime: 'select id, title from blog order by updateTime desc limit 6',
	getBlogCount: 'select count(1) from blog'
};
 
module.exports = blog;