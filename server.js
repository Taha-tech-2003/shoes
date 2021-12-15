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



// Post Routes==============================================================

app.post("/user/login",middlware.Token,control.login);

app.post("/user/register",middlware.Token,control.register);

app.post("/user/order",middlware.auth,control.order);

app.post("/user/setting/userupdate",middlware.auth,control.Updateuser);

app.post("/admin/productuploaded", control.PostProduct);

// route




// Get Routes==============================================================
app.get("/",control.Home);

app.get("/user/setting/userupdate-data",middlware.auth,(req,res)=>{
    res.render("update-user.ejs")
});

app.get("/admin/productupload", control.getProduct);

app.get("/user/setting/userdetail",middlware.auth,control.Userdetail);

app.get("/admin/productuploaded",middlware.Token,(req,res)=>{
    res.render("form-product.ejs")
});

app.get("/user/login",middlware.Token,(req,res)=>{
    res.render("login.ejs")
});







app.listen(port,(err)=>{
    if(!err){
        console.log(`your server is running on ${port}`);
    }
    else{
        console.log("check your server");
    }
});



// DB_CONNECTION="mongodb+srv://taha-shoes-ki-dukan-new:Ea6uU0BPHcV8cAjR@cluster0.y8cl4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// PORT=3000


// Register
// {
//     "Name":"TAHA",
//     "Email":"Ibad@gmail.com",
//     "Password":"12345678",
//     "passwordConf":"12345678",
//     "Phone":"123123123",
//     "Gender":"Male"
// }


// login
// {
//     "Email":"Ibad@gmail.com",
//     "Password":"12345678"
// }


// Order
// {
//     "ProductIDS":[
//         {"Proid":"61ae367953deb498cba925bb"},
//         {"Proid":"61ae364653deb498cba925b8"}
//     ]
// }



// mongodb://localhost:27017/shoes