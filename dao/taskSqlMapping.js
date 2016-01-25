// dao/blogSqlMapping.js
// CRUD
var task = {
    insert:'insert into task(taskContent, createTime, updateTime,currentStatus,type) VALUES(?,now(),now(),0,?)',
    updateTaskContent:'update task set taskContent=?, updateTime=now() where id=?',
	updateTaskStatus:'update task set currentStatus=?, updateTime=now() where id=?',
    queryAll: 'select id, taskContent,currentStatus,type from task order by id desc',
	queryByStatus: 'select id, taskContent,currentStatus,type from task where currentStatus=? order by id desc',
	getTargetTaskCount: 'select count(1) as targetCount from task where type=0',
	getDailyTaskCount: 'select count(1) as dailyCount from task where type=1',
	queryById:'select currentStatus from task where id = ?'
};
 
module.exports = task;