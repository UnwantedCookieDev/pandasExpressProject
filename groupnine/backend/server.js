const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
let databaseName = require("./model");
app.use(cors());

const router = express.Router();

mongoose.connect("mongodb://1237.0.0.1:270107/DatabaseName",{
    userNewUrlParser:true
});

const connection = mongoose.connection;

connection.once("open", function(){
    console.log("Connection with MongoDB was successful");
})

app.use("/", router);

router.route("/getData").get(function(req, res) {
    detail.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(PORT, function(){
    console.log("server is Running on Port:" + PORT);
});

