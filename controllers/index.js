const {login, register} = require('./auth');
const {getProduct} = require('./product');
const {PostProduct} = require('./admin/product');
const {Home} = require('./home');
const {Userdetail,Updateuser} = require('./getuser');
const {order} = require('./order');




module.exports = {
    login,
    register,
    getProduct,
    PostProduct,
    Home,
    Userdetail,
    Updateuser,
    order
}