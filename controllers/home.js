const product = require("../modals/product-modal")
const User = require("../modals/user-modal")




function Home(req,res) {
    // User.find({"Email":req.session.user.Email},(err,data)=>{
    //     console.log(data)
    // })
    // product.find({},(err,data)=>{
    //     const proData = data
    //     res.send(proData);
    // }).limit(6)
    // res.end()
    res.send("home")
}



module.exports = {
    Home,
}