module.exports = {
 		'/update':{
 			action:"update",
 			mock:{
 				condition:{
 					title: '第一篇博客',
 				},
 				updater:{
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