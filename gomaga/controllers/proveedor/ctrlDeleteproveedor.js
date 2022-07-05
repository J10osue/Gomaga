const { deleteProveedor } = require("../../services/proveedor/deleteProveedor")

async function ctrlDeleteProveedor(req, res){
try{
     const { name, fecha } = req.body
     const { email } = req.params
     const proveedor = await deleteProveedor({name, fecha, email})
     return res.status(200).send(proveedor)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
}

module.exports = { ctrlDeleteProveedor }
