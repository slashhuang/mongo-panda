
/*
 * @Author slashhuang
 * 17/4/20
 */

const mongoose = require('mongoose') 
//blogschema
const $_blogSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String,
});

exports.BlogModel = mongoose.model('Blog', $_blogSchema);