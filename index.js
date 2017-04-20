/* 主程序入口*/
 const http =require('http');
 //连接数据库
 const mongoose = require('mongoose');
 const CRUD = require('./mocker');
 const map =require('./util');
 //连接 db ==> slashhuang
 mongoose.connect('mongodb://localhost/slashhuang');
 mongoose.Promise = global.Promise;
 http.createServer((req,res)=>{
 	let {url} = req;
 	Promise.resolve().then(()=>{
 		let mongoAction = CRUD[`db_${map[url]['action']}`];
	 	let mockData = map[url]['mock']
	 	return mongoAction(mockData)
 	}).then(data=>{
 		console.log('data----'+data)
 		res.end('ok')
 	}).catch(err=>res.end(`${err.name}+${err.stack}`))
 }).listen(3000)













