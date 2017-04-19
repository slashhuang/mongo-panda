/*
 * CRUD	入口
 * @Author slashhuang
 * 17/4/19
 */
 module.exports ={
	db_save : require('./save'),
	db_remove : require('./remove'),
	db_update : require('./update'),
	db_query : require('./query')
}
