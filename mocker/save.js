/*
 * 保存
 * http://mongoosejs.com/docs/api.html#model_Model-save
 */

 //Model#save([options], [options.safe], [options.validateBeforeSave], [fn])
/*
	Parameters:

	[options] <Object> options optional options
	[options.safe] <Object> overrides schema's safe option
	[options.validateBeforeSave] <Boolean> set to false to save without validating.
	[fn] <Function> optional callback

	Returns:

	<Promise> Promise
*/
//设定schema
const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String,
});
const BlogModel = mongoose.model('Blog', blogSchema);

const db_saveBlog = (blogData)=>{
	let $blog = new BlogModel(blogData);
	$blog.save().then(blog=> {
	   console.log(blog);
	   console.log('save successfully')
	});
};

module.exports = db_saveBlog;








