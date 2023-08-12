const mongoose = require('mongoose');

// Apna code Idhr edit kr
const mongooseURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectToMongo = ()=>{
    mongoose.connect(mongooseURI , ()=>{
        console.log("Mongoose connection is successfull");
    })
}

module.exports = connectToMongo;