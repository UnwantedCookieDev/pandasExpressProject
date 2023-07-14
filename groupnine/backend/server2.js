var express = require('express');
var dao = require("./mongo-dao");
var app = express();

app.use(express.json()); //Parse JSON body


// get Customers
app.get("/Customers", (req, res) => {
  dao.findAllCustomers((err, customers) => {
    if (customers !== undefined) {
      //We have customers
      console.log("index.js GET all customers: " + customers );
      res.send(customers);
    } else {
      res.statusCode = 500;
      res.end();
    }
  });
});

// get single customer
app.get("/customers/:id", (req, res) => {
  dao.findCustomer(req.params.id, (err, customer) => {
    if (customer !== undefined) {
      //We have customer
      console.log("index.js GET single customer: " +  req.params.id );
      res.send(customer);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});


// delete single customer
app.get("/customers/:id", (req, res) => {
  dao.deleteCustomer(req.params.id, (err) => {
    if (err === null) {
      console.log("index.js DELETE single customer: " +  req.params.id );
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

// update a customer
app.put("/customers/:id", (req, res) => {
  if (req.params.id === undefined || req.body === undefined) {
    res.statusCode = 500;
    res.end();
    return;
  }
  dao.updateCustomer(req.params.id, req.body, (err) => {
    if (err === null) {
      console.log("index.js DELETE single customer: " + req.params.id );
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});


// add a customer
app.post("/customers", (req, res) => {
  if ( req.body === undefined) {
    res.statusCode = 500;
    res.end();
    return;
  }
  dao.addCustomer( req.body, (err) => {
    if (err === null) {
      console.log("index.js ADD customer: " + req.body.id );
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});


// server start-up
const port = 3000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);