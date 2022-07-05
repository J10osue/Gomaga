const { getProduct } = require("../../services/productos/getProduct")

async function ctrlGetProduct(req, res){
try{
     const { _id } = req.params
     const productos = await getProduct(_id)
     return res.status(200).send(productos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlGetProduct}
