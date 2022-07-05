const { selectVentas } = require("../../services/ventas/selectVentas")

async function ctrlSelectVentas(req, res){
try{
     const { precio } = req.query
     const ventas = await selectVentas(precio)
     return res.status(200).send(ventas)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlSelectVentas}
