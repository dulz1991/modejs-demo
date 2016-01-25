function Blog(blog){
	this.id = blog.id;
	this.title = blog.title;
	this.content = blog.content;
	this.createTime = blog.createTime;
	this.updateTime = blog.updateTime;
};

module.exports = Blog;