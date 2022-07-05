const { deleteProduct } = require("../../services/productos/deleteProduct")

async function ctrlDeleteProduct(req, res){
try{
     const { _id } = req.params
     const productos = await deleteProduct({_id})
     return res.status(200).send(productos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
}

module.exports = { ctrlDeleteProduct }
