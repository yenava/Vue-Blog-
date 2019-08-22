var article = require('../models/article');
var url = require('url');

function addArticleHandler(req,res,next){
	if(!req.body.articlename){
		res.json({status:1,message:"请输入标题"})
	}
	if(!req.body.content){
		res.json({status:1,message:"请输入内容"})
	}
	if(!req.body.author){
		res.json({status:1,message:"请选择作者"})
	}
	article.findByArticlename(req.body.articlename,function(err,articleSave){
		if(articleSave.length!=0){
			res.json({status:1,message:"文章标题已存在"})
		}else{
			var Tags = req.body.classify;
			console.log("Tags: "+Tags+typeof(Tags))
			var addArticle = new article({
				articlename: req.body.articlename,
				content: req.body.content,
				classify:Tags,// classify传递过来变成字符串了
				author:req.body.author,
			})
			addArticle.save(function(){
				console.log(addArticle,req.body.classify)
				res.json({status:0,message:"文章添加成功"})
			})
		}
	})
}

function articleList(req,res,next){
	article.findAll(function(err,articleSave){
		res.json(articleSave)
	})
}

function singleArticle(req,res,next){
	var params = url.parse(req.url,true).query;
	article.findById(params.id,function(err,articleSave){
		res.json(articleSave)
	})
}

function delArticle(req,res,next){
	var delId = {_id:req.body.id} 
	article.deleteOne(delId, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    res.json({message:"删除成功"})
}

function updateArticle(req,res,next){
	// 更新查询
	var wherestr = {_id:req.body.id};
	var Tags = req.body.classify
	
	var updatestr = {
		articlename:req.body.articlename,
		content : req.body.content,
		classify:req.body.classify,
		author : req.body.author,
	}
	article.updateOne(wherestr,updatestr,function(err,res){
		if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
	})
	res.json({status:0,message:"更新成功"})
}



exports.addArticleHandler = addArticleHandler
exports.articleList = articleList
exports.singleArticle = singleArticle
exports.delArticle = delArticle
exports.updateArticle = updateArticle