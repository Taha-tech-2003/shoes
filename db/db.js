const mongoose = require("mongoose")
require('dotenv').config();

const database = mongoose.connect(process.env.DB_CONNECTION,(err)=>{
    if(!err){
        console.log("db connect seccessfully");
    }
    else{
        console.log("db not connect");
    }
})