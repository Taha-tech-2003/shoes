const mongoose = require("mongoose")
require('dotenv').config();

const database = mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("db connect seccessfully");
    }
    else{
        console.log("db not connect");
    }
})




// https://cloud.mongodb.com/v2/5ff844c088f7a047513d434a#clusters