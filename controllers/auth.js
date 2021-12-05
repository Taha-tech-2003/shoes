function login (req, res) { 
    res.send("Welcome to login page")
}
function register (req, res) { 
    res.send("Welcome to register page")
}

module.exports = {
    login,
    register
}