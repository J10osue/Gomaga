const { deleteVentas } = require("../../services/ventas/deleteVentas")

async function ctrlDeleteVentas(req, res){
try{
     const { _id } = req.params;
     console.log(_id, 'my id')
     const ventas = await deleteVentas({_id});
     return res.status(200).send(ventas);
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
}

module.exports = { ctrlDeleteVentas }
