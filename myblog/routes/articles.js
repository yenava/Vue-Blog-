var express = require('express');
var router = express.Router();


// 加载控制器
var article_controller = require('../controllers/articleController');


router.post('/add',article_controller.addArticleHandler)

router.get('/list',article_controller.articleList)

router.get('/single',article_controller.singleArticle)

router.post('/del',article_controller.delArticle)

router.post('/update',article_controller.updateArticle)

module.exports = router