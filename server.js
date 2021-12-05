const express = require("express");
const db = require("./db/db")
const app = express();
require('dotenv').config();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;



app.use(sessions({
    secret: "ahsanchutia",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));


app.get("/register",(req,res)=>{
    res.send("Welcome to login page")
});

app.get("/login",(req,res)=>{
    res.send("Welcome to login page")
});




app.listen(port,(err)=>{
    console.log(`your server is running on ${port}`);
});