// conf/db.js
// MySQL connection config
module.exports = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database:'nodejs',
        port: 3306,
		multipleStatements: true //�Ƿ�������һ��query�д��ݶ����ѯ���. (Default: false)  
    }
};