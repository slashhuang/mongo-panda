var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/fuck';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insertDocuments(db,()=>{
  	  findDocuments(db,()=>{
        db.close
      })
  	})
});

//插入文档
var insertDocuments = function(db, callback) {
  db.dropCollection('hekkk');
  // Get the documents collection
  var collection = db.collection('hekkk');
  //由于mongo以_id为主键，因此不存在增量覆盖一说
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
  console.log(result)
    console.log("Inserted 3 hekkk into the collection");
    callback(result);
  });
}
//查找
var findDocuments = function(db, callback) {
  var collection = db.collection('hekkk');
  //条件查询
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });      
}
