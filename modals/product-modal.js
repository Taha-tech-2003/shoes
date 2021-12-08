const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
  ProductName: { type: String, required: false },
  Image: { type: String, required: false },
  Price: { type: Number, required: false },
  Sku: { type: Number, required: false },
  Category: { type: String, required: false },
});


const product = new mongoose.model("Product",ProductSchema);
module.exports = product;