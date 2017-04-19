/* 主程序入口*/
 const http =require('http');
 //连接数据库
 const mongoose = require('mongoose');
 const CRUD = require('./mocker');
 //连接 db ==> slashhuang
 mongoose.connect('mongodb://localhost/slashhuang');
 mongoose.Promise = global.Promise;
 http.createServer((req,res)=>{
 	let {url} = req;
 	let map = {
 		'/update':{
 			action:"update",
 			mock:{
 				condition:{
 					title: '第一篇博客',
 				},
 				update:{
 					  content: '老师来改作业啦',
 				}
 			}
 		},
 		'/remove':{
 			action:"remove",
 			mock:{
 				title: '第一篇博客'
 			}
 		},
 		'/save':{
 			action:"save",
 			mock:{
 				title: '第一篇博客',
 				content: 'node班学生提交',
 				category:'1224'
 			}
 		},
 		'/query':{
 			action:"query",
 			mock:{
 				title: '第一篇博客'
 			}
 		}
 	};
 	let mongoAction = CRUD[`db_${map[url]['action']}`];
 	let mockData = Object.assign({},map[url]['mock'],{Date:Date.now()});
 	Promise.resolve(mongoAction(mockData)).then(data=>{
 		res.end('ok')
 	}).catch((err)=>{
 		res.end(`${err.name}+${err.stack}`)
 	})
 }).listen(3000)