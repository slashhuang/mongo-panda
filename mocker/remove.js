/*
 * 删除文档
 * http://mongoosejs.com/docs/api.html#model_Model-remove
 */
const _ = require('lodash');
const BlogModel = require('./model')['BlogModel'];
const db_removeBlog = condition=>{
	return BlogModel.remove(condition).then(product=>{
	 	console.log(`${product}removed successfully`)
	});
};

module.exports = db_removeBlog;
