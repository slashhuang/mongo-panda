/*
 * 查询文档
 * http://mongoosejs.com/docs/api.html#model_Model-remove
 */
const _ = require('lodash');
const BlogModel = require('./model')['BlogModel'];
const db_queryBlog = (condition)=>{
	return BlogModel.
			  find(condition).
			  // where('name.last').equals('Ghost').
			  // where('age').gt(17).lt(66).
			  // where('likes').in(['vaporizing', 'talking']).
			  limit(10).
			  // sort('-occupation').
			  select('name occupation').
			  exec((err,blog)=>{
			  	if(err){
			  		console.log(err)
			  	}else{
			  		console.log(`find blog ${blog}`)
			  	}
			  });
	
};

module.exports = db_queryBlog;