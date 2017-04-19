/*
 * 更新文档
 * http://mongoosejs.com/docs/api.html#model_Model.update
 */
const _ = require('lodash');
const BlogModel = require('./model')['BlogModel'];
const db_updateBlog = updateObj=>{
	let { condition,updater} = updateObj
	return BlogModel.update(condition, { $set: updater}).exec();
};

module.exports = db_updateBlog;