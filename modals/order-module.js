const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  Owner:{type:String,required:true},
  ProductName: { type: String, required: true },
  Image: { type: String, required: false },
  Price: { type: Number, required: true },
  Sku: { type: Number, required: true },
  Category: { type: String, required: true },
});
const Order = new mongoose.model("order",OrderSchema);
module.exports = Order;