var mongoose = require('../common/db.js')
var article = new mongoose.Schema({
	articlename: String,
	content: String,
	classify: Array,
	author: String
})

// statics挂载静态方法
article.statics.findAll = function(callBack){
	this.find({},callBack);
};

article.statics.findByArticlename = function(name,callBack){
	this.find({articleName:name},callBack);
};

article.statics.findById = function(id,callBack){
	this.find({_id:id},callBack);
};

article.statics.delById = function(id,callBack){
	this.remove({_id:id},callBack)
}

// Models 是从 Schema 编译来的构造函数， 它们的实例就代表着可以从数据库保存和读取的 documents
var articleModel = mongoose.model('article',article)
module.exports = articleModel
