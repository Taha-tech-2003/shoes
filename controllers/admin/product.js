
var multer  = require('multer');
var fs  = require('fs');

const Product = require("../../modals/product-modal")



var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './upload';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({storage: storage}).array('files', 12);

function PostProduct(req,res) {
    upload(req, res, function (err) {
        const productData = req.body;
        if (err) {
            return res.end("Something went wrong:(");
        }
        Product.findOne({}, function (err, data) {
            const newProduct =new Product({
                ProductName: productData.ProductName,
                Image:req.files[0].path,
                Price: productData.Price,
                Sku: productData.Sku,
                Category: productData.Category,
            });
            newProduct.save()
        })
        res.end("asdasd")
    }); 
}



module.exports = {
    PostProduct
}