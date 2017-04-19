var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/fuck';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insertDocuments(db, function() {
    updateDocument(db, function() {
      db.close();
    });
  });
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

//更新文档
var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('hekkk');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    //$set这一块和mongo原生提供的功能的set功能是一样的
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}





