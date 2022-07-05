const { selectProveedor } = require("../../services/proveedor/selectProveedor")

async function ctrlSelectProveedor(req, res){
try{
     const { precio } = req.query
     const proveedor = await selectProveedor(precio)
     return res.status(200).send(proveedor)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlSelectProveedor}
