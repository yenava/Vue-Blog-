var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 定义数据库路由
router.get('/mongooseTest',function(req,res,next){
	// 建立连接, pets是数据库名
	mongoose.connect('mongodb://localhost/pets',{useMongoClient:true});
	mongoose.Promise = global.Promise;

	var Cat = mongoose.model("Cat",{name:String});
	var tom = new Cat({name:'Tom'})

	tom.save(function(err){
		if(err){
			console.log(err);
		}else{
			console.log('success insert');
		}
	});
	res.send('数据库连接测试')

})
module.exports = router;
