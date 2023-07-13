const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let databaseName = new Schema({
    name:{
        type:String
    },
    age:{
        type: Number
    }
});

module.exports = mongoose.model("databaseName", databaseName);