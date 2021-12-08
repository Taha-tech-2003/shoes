function auth(req,res,next) {
    console.log(req.session);
    if(req.session.user == null){
        res.redirect("/user/login")
    }
    else{
        next()
    }
}



module.exports = {
    auth,
}