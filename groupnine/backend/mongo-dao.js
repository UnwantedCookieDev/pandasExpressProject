const mongodb = require("mongodb"); // mongo client library                    
const url = "mongodb://localhost:27017/store";
let dbPool; // database connection

mongodb.MongoClient.connect(url, function(err, db) {
    if (err === null) {
        dbPool = db; 
    }else{
      console.log("DB CONNECTION FAILED. Is database running?");
    }
});


  
  
  // retrieve all Customers
  module.exports.findAllCustomers = function(callback) {
    var col = dbPool.collection("customers");
    col.find()
      .toArray((err, customers) => {
        if (err === null) {
          callback(null, customers);
        } else {
          callback("Failed to find customers", undefined);
        }
    });
  };
  
  
  
  // retrieve single book
  module.exports.findCustomer = function(id, callback) {
    var col = dbPool.collection("customers");
    col.find({id: id})
      .toArray((err, customers) => {
        if (err === null) {
          callback(null, customers);
        } else {
          callback("Failed to find customer", undefined);
        }
    });
  };
  
  // delete single book
  module.exports.deleteCustomer = function(id, callback) {
    var col = dbPool.collection("customers");
    col.remove({id: id})
      .toArray((err, customers) => {
        if (err === null) {
          callback(null, '');
        } else {
          callback("Failed to delete customers", undefined);
        }
    });
  };
  
  // update a book
  module.exports.updateBook = function(id, customer, callback) {
    delete customer._id;
    var col = dbPool.collection("customers");
    col.update( {id: id}, {$set: customer}, {upsert: true}, callback);
  };
  