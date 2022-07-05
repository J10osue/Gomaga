const { updateProduct } = require("../../services/productos/updateProduct")

async function ctrlUpdateProduct(req, res){
try{
     const {  name, precio, descripcion, cantidad } = req.body
     const { _id } = req.params;
     const productos = await updateProduct({ name, precio, descripcion, cantidad,_id})
     return res.status(200).send(productos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlUpdateProduct }
