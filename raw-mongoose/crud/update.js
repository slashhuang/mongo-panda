/*
 * 更新文档
 * http://mongoosejs.com/docs/api.html#model_Model.update
 */


/*
	Model.update(conditions, doc, [options], [callback])
	Parameters:

	conditions <Object>
	doc <Object>
	[options] <Object>
	[callback] <Function>

	Returns:

	<Query>

 */
MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);
MyModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, function (err, raw) {
  if (err) return handleError(err);
  console.log('The raw response from Mongo was ', raw);
});

/*---- 
	All top level keys which are not atomic operation 
	names are treated as set operations:
*/

var query = { name: 'borne' };
Model.update(query, { name: 'jason borne' }, options, callback)

// is sent as
Model.update(query, { $set: { name: 'jason borne' }}, options, callback)
// if overwrite option is false. If overwrite is true, sent without the $set wrapper.

/*
 * To update documents without waiting for a response from MongoDB, 
 * do not pass a callback, then call exec on the returned Query:
 */
 Comment.update({ _id: id }, { $set: { text: 'changed' }}).exec();









