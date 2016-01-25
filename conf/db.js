// conf/db.js
// MySQL connection config
module.exports = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database:'nodejs',
        port: 3306,
		multipleStatements: true //是否允许在一个query中传递多个查询语句. (Default: false)  
    }
};