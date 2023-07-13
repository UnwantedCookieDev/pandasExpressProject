// const express = require("express");
// const app = express();
// const cors = require('cors');
// const PORT = 4000;
// const mongoose = require('mongoose');
// let databaseName = require("./model");
// app.use(cors());

// const router = express.Router();

// mongoose.connect("mongodb://1237.0.0.1:270107/DatabaseName",{
//     userNewUrlParser:true
// });

// const connection = mongoose.connection;

// connection.once("open", function(){
//     console.log("Connection with MongoDB was successful");
// })

// app.use("/", router);

// router.route("/getData").get(function(req, res) {
//     detail.find({}, function(err, result) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });

// app.listen(PORT, function(){
//     console.log("server is Running on Port:" + PORT);
// });





const express = require("express");
const bodyParser = require('body-parser');
const dao = require("./data_access");

// server app
let app = express();

//Parse JSON body
app.use(bodyParser.json());

// initCustomers
app.get("/init", (req, res) => {
  dao.call('initcustomers',{}, (result)=>{
      console.log("result: " + result.status);
      res.send('done with init');
  })
});


// clearCustomers
app.get("/clear", (req, res) => {
  dao.call('clearCustomers',{}, (result)=>{
      console.log("result: " + (result.status));
      res.send('done with clear');
  })
});


//findAllBooks
app.get("/customers", (req, res) => {
  dao.call('findAllCustomers', {}, (result) => {
      if (result.customers !== undefined) {
          res.send(result.customers);
      } else {
          res.statusCode = 404;
          res.end();
      }
  });
});


// findOneBook
app.get("/customers/:id", (req, res) => {
  dao.call('findCustomer', { id: req.params.id }, (result) => {
      if (result.customer !== undefined) {
          res.send(result.customer);
      } else {
          res.statusCode = 404;
          res.end();
      }
  });
});


// updateCustomer
app.put("/customers/:id", (req, res) => {
  if (req.params.id === undefined || req.body === undefined) {
      res.statusCode = 500;
      res.end();
      return;
  }
  // use isbn from path if available
  let id = req.params.id;
  if (id != undefined) {
      req.body.id = id;
  }
  // make call to db
  dao.call('updateCustomer', { customer: req.body, id: id }, (result) => {
      if (result.status !== undefined) {
          res.send(result.status);
      } else {
          res.statusCode = 404;
          res.end();
      }
  });
});

// start the rest service
var port = 3000;
console.log('service opening on port: ' + port)
app.listen(port);




















// app.get("/customers/:id", function(req, res) {
//   let customer = dao.findCustomers(req.params.id);

//   if (customer === undefined) {
//     res.statusCode = 404;
//     res.end();
//   } else {
//     res.send(customer);
//   }
// });


// app.put("/customers/:id", function(req, res) {
//   if (req.params.id === undefined || req.body === undefined) {
//     res.statusCode = 500;
//     res.end();

//     return;
//   }

//   dao.updateCustomers(req.params.id, req.body);
//   res.end();
// });

// const port = 3000;
// console.log("server starting on port: " + port );
// app.listen(port);

