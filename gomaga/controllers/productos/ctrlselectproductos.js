const { selectProduct } = require("../../services/productos/selectProduct")

async function ctrlSelectProduct(req, res){
try{
     const { precio } = req.query
     const productos = await selectProduct(precio)
     return res.status(200).send(productos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlSelectProduct}
