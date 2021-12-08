const express = require("express");
const db = require("./db/db")
const app = express();
require('dotenv').config();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
const control = require('./controllers')
const middlware = require('./middleware')
app.use(express.json());
const session = require('express-session');
app.set('view engine', 'ejs');




// mongodb://localhost:27017/shoes


// sessions
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: process.env.DB_CONNECTION,
    collection: 'sessions'
});
app.use(session({
	secret : 'yourSecret',
	resave : false,
	saveUninitialized : false,
    store: store,
	maxAge: 24 * 60 * 60 * 1000
}));
// sessions










// route



app.get("/",control.Home);
// ,middlware.auth
app.post("/user/login",middlware.Token,control.login);

app.post("/user/register",middlware.Token,control.register);

app.get("/admin/productuploaded",middlware.Token,(req,res)=>{
    res.render("form-product.ejs")
});

app.get("/user/login",middlware.Token,(req,res)=>{
    res.render("login.ejs")
});

app.get("/user/setting/userdetail",middlware.auth,control.Userdetail);

app.post("/user/setting/userupdate",middlware.auth,control.Updateuser);

app.get("/user/setting/userupdate-data",middlware.auth,(req,res)=>{
    res.render("update-user.ejs")
});

app.get("/admin/productupload", control.getProduct);

app.post("/admin/productuploaded", control.PostProduct);

// route








app.listen(port,(err)=>{
    if(!err){
        console.log(`your server is running on ${port}`);
    }
    else{
        console.log("check your server");
    }
});