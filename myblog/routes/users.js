var express = require('express');
var router = express.Router();
var user = require('../models/user');
var article = require('../models/article');
var user_controller = require('../controllers/userController');
// var mail = require('../models/mail');
// var comment = require('../models/comment');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册路由
router.post('/register',user_controller.Register)

router.post('/login',user_controller.Login)

router.post('/postComment',function(req,res,next){
})

router.post('/support',function(req,res,next){
})

router.post('/findPassword',function(req,res,next){
})

router.post('/sendEmail',function(req,res,next){
})

router.post('/showEmail',function(req,res,next){
})



module.exports = router;
