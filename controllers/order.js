const orderModal = require("../modals/order-module")
const ProductModal = require("../modals/product-modal")







function order(req,res) {
    const Order = req.body
	const PIDS = Order.ProductIDS
	PIDS.forEach(element =>{
		ProductModal.find({_id:element.Proid}, function (err,data) {
			data.forEach(OrigData =>{
				 const NewOrder = new orderModal({
					Owner:req.session.user.Email,
				 	ProductName: OrigData.ProductName,
				 	Image:OrigData.path,
				 	Price: OrigData.Price,
				 	Sku: OrigData.Sku,
				 	Category: OrigData.Category,
				 });
				 NewOrder.save()
			})
		})
		
	})
	
	res.end()

}



module.exports = {
    order,
}