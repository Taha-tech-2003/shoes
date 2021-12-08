const User = require("../modals/user-modal")


function Userdetail(req,res) {
    const userdtl = req.session.user.Email
    console.log(userdtl);
    User.findOne({"Email":userdtl},(err,data)=>{
        res.send(data)
    })
}



function Updateuser(req,res) {
    const userdtl = req.session.user.Email
    User.findOneAndUpdate({"Email":userdtl},{$set: {"Name":req.body.Name,"Email":req.body.Email,"Phone":req.body.Number}},{new: true}, (err,doc)=>{
        if (err) { throw err; }
        else { console.log("Updated"); }
    });  
    res.end("end")
}


module.exports = {
    Userdetail,
    Updateuser
}