function Token(req,res,next) {
    console.log(req.session);
    if(req.session.user){
        res.redirect("/")
    }
    else{
        next()
    }
}



module.exports = {
    Token,
}