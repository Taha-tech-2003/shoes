const express = require("express");
const app = express();
app.use(express.json());
const User = require("../modals/user-modal")
const bcrypt = require('bcrypt');
const saltRounds = 10;




function login(req, res) {
    const loginUser = req.body;
	User.findOne({Email: loginUser.Email},(err,data)=>{
        console.log("login stop1");
        const match = bcrypt.compareSync(loginUser.Password,  data.Password);
        console.log(match);
        if(match == true) {
            req.session.user = {
				Email: data.Email,
				Name: data.Name,
				token:data.tokens[0].token
		  	};
              res.redirect("/")
        }
        else{
            res.send("wrong password")
        }
	})
}









function register(req, res) {
    const personInfo = req.body;
    res.send(personInfo)
    if(!personInfo.Email || !personInfo.Name || !personInfo.Password || !personInfo.passwordConf){
		console.log("stop1");
	} else {
        if (personInfo.Password == personInfo.passwordConf) {
            User.findOne({ Email: personInfo.Email }, function (err, data) {
                console.log("step2");
                if (!data) {
                    User.findOne({}, function (err, data) {
                        const hash = bcrypt.hashSync(personInfo.Password, 10);
                        const newPerson = new User({
                            Name: personInfo.Name,
                            Email: personInfo.Email,
                            Password: hash,
                            Phone: personInfo.Phone,
                            Gender: personInfo.Gender,
                        });
                        console.log("step3");
                        const token = newPerson.generateauthtoken()
                        const registered = newPerson.save()
                    })
                } else {
                    console.log("fail Email is already used.");
                }
            });
        }
        else{
            res.send("check password");
        }
    }
}

module.exports = {
    login,
    register
}
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
//     "Password":"12345678",
// }


// Order
// {
//     "ProductIDS":[
//         {"Proid":"61ae367953deb498cba925bb"},
//         {"Proid":"61ae364653deb498cba925b8"}
//     ]
// }