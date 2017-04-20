
/*
 * @Author slashhuang
 * 17/4/20
 */

const mongoose = require('mongoose') 
//blogschema
const $_blogSchema = mongoose.Schema({  //shape 
    title: String,
    content: String,
    category: String,
});
/*
 * mongoose.model的参数
 * @param collection的名字
 * @param schema
 */
exports.BlogModel = mongoose.model('Blog', $_blogSchema);