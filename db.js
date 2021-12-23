const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

var mongoDB = process.env.MONGO_URL;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true },()=>{
    console.log("Mongodb connected");
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));