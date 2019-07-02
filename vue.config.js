module.exports={
	baseUrl:"/",//根路径
	outputDir:"dist",//构建输出目录
	assetsDir:'assests',// 静态资源目录(js,css,img,fonts)
	lintOnSave:false,// 是否开启eslint保存检测,有效值：true||false||error
	devServer:{
		open:false,// 开启项目时打开浏览器
		host:"0.0.0.0",// 
		port:8080,
		https:false,
		hotOnly:false,
		proxy:{
			// 配置跨域
			'/api':{
				target:"http//localhost:5000/api",
				ws:true,
				changeOrigin:true,
				pathRwrite:{
					'^api':''
				}
			}
		},
		// before(app){
		// 	// http://localhost:8080/api/goods
		// 	app.get("/api/goods",(eq,res)=>{
		// 		res.json();
		// 	})
		// }
	}
}