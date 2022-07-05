const { createProveedor } = require("../../services/proveedor/createProveedor")

async function ctrlCreateProveedor(req, res){
try{
     const { name, fecha, precio, email } = req.body
     const proveedor = await createProveedor({name, fecha, precio, email})
     return res.status(200).send(proveedor)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlCreateProveedor }
