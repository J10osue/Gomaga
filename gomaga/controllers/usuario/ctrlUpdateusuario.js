const { updateUsuario } = require("../../services/usuarios/updateUsuario")

async function ctrlUpdateUsuario(req, res){
try{
     const { name, lastName, phone } = req.body
     const { email } = req.params
     const usuario = await updateUsuario({name, lastName, email, phone})
     return res.status(200).send(usuario)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlUpdateUsuario }
