var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/fuck';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insertDocuments(db,()=>{
  	  db.close();
  	})
});

//插入文档
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  	console.log(collection.__proto__)

  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
 	console.log(result)
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
