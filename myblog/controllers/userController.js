var user = require('../models/user');
var crypto = require('crypto');

function Register(req,res,next){
	// 各项不能为空，用户重复注册报错，最后一步添加进
    // res.json发送错误信息
    console.log("req")
	if (!req.body.username) {
		return res.json({status:1,message:"用户名为空"})
	}
	if (!req.body.password) {
		return res.json({status:1,message:"密码为空"})
	}
	if (!req.body.userMail) {
		return res.json({status:1,message:"用户邮箱为空"})
	}
	if (!req.body.userPhone) {
		return res.json({status:1,message:"用户手机为空"})
	}
	// 根据传递进来的名字去找出表中是否有重复的用户名
	user.findByUsername(req.body.username,function(err,userSave){
		if(userSave.length!=0){
			// 返回错误信息
			res.json({status:1,message:"用户已注册"})
		}else{
			var registerUser = new user({
				username:req.body.username,
				password: req.body.password,
				userMail:req.body.userMail,
				userPhone:req.body.userPhone,
				userAdmin:0,
				userPower:0,
				userStop:0,
			})
			registerUser.save(function(){
			res.json({status:0,message:"注册成功"})
		})
		}
	})
}

function Login(req,res,next){
	if(!req.body.username){
	 	return res.json({status:1, message:"用户名为空"})
	}
	if(!req.body.password){
		return res.json({status:1, message:"密码为空"})
	}
	user.findUserLogin(req.body.username,req.body.password,function(err,userSave){
		if(userSave.length !=0){
			// 通过MD5查看密码
			var token_after = getMD5Password(userSave[0]._id)
			res.json({status:0,data:{token:token_after,user:userSave},message:"用户登陆成功"})
		}else{
			res.json({status:1,message:"用户名或密码错误"})
		}
	})
}
const init_token = 'TKL02o'
function getMD5Password(id){
	var md5 = crypto.createHash('md5')
	var token_before = id + init_token
	// res.json(userSave[0].id)
	return md5.update(token_before).digest('hex')
}

exports.Register = Register;
exports.Login = Login;