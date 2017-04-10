


//批量操作，order和unordered意味着不同的操作策略
var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db.dropCollection('bulkops');
  var col = db.collection('bulkops');
  // Create ordered bulk, for unordered initializeUnorderedBulkOp()
  var bulk = col.initializeOrderedBulkOp();
  // Insert 10 documents
  for(var i = 0; i < 10; i++) {
    bulk.insert({a: i});
  }

  // Next perform some upserts
  for(var i = 0; i < 10; i++) {
    bulk.find({b:i}).upsert().updateOne({b:1})
  }

  // Finally perform a remove operation
  bulk.find({b:1}).deleteOne();

  // Execute the bulk with a journal write concern
  bulk.execute(function(err, result) {
    assert.equal(null, err);
    db.close();
  });
});