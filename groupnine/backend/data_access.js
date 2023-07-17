// mongodb client driver
const { MongoClient } = require('mongodb');



module.exports.call = async function call(operation, parameters, callback) {

    // DB Connection URL
    var url = "mongodb://localhost:27017";

    // Create client
    const client = new MongoClient(url);

    // Database and collection variables
    const dbName = "store";
    const collectionName = "customers";
    const collectionProducts = "products";

    // connect to the db server
    await client.connect();

    // set the database to use
    const db = client.db(dbName);
    // set the collection to use
    const customers_collection = db.collection(collectionName);
    const products_collection = db.collection(collectionProducts);

    switch (operation.toLowerCase()) {
        case 'initcustomers':
            const initialRecords = [
                {
                    "_id": "6dfb7b3ccef0eaea7dedefd5",
                    "id": 501,
                    "first_name": "John",
                    "last_name": "Bush",
                    "address": "46213 Marist Falls\nJuarezstad, PA 74282",
                    "phone": "633.234.6575x84643",
                    "email": "Bethfolon@example.net",
                    "credit_card": { "pan": "6013487579635571", "cvv": "878", "expire": "05/24" }
                },
            ];
            await customers_collection.insertMany(initialRecords).then(
                (result) => { callback({ status: "customer records have been initialized." }) },
                (reason) => { callback({ status: "error initializing customer records" }) }
            );
            break;

        case 'clearcustomers':
            await customers_collection.deleteMany({}).then(
                (result) => { callback({ status: "customer records have been removed." }) },
                (reason) => { callback({ status: "error removing customer records." }) }
            );
            break;

        case 'findallcustomers':
            const customers = await customers_collection.find({}).toArray();
            callback({ customers: customers });
            break;

        case 'findallproducts':
            const products = await products_collection.find({}).toArray();
            callback({ products: products });
            break;

        case 'findcustomer':
            const customer = await customers_collection.findOne({ id: parameters.id });
            callback({ customer: customer });
            break;

        case 'updatecustomer':
            await customers_collection.updateOne(
                { id: parameters.customer.id },
                { $set: parameters.customer },
                { upsert: true });
            callback({ status: 'item updated:' + parameters.customer.id });
            break;

        default:
            break;
    }
    console.log('call complete: ' + operation);
    client.close();
    return 'call complete';

}






// let store = {}; //In-memory database
// store[100] = { "id": "100", "first_name": "Lauren", "last_name": "Griffith" }

// module.exports.findCustomers = function(id) {
//   return store[id];
// };

// module.exports.updateCustomers = function(id, customer) {
//   store[id] = customer;
// };


