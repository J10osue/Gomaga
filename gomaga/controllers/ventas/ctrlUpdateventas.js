const { getProduct } = require("../../services/productos/getProduct");
const { updateVentas } = require("../../services/ventas/updateVentas");
const { calculateTotal, calculateIva } = require("../../utils/calculate/calculateVentas");



async function ctrlUpdateVentas(req, res){
try{
     const { cantidad, id_producto } = req.body
     const { _id } = req.params
     const product = await  getProduct(id_producto);
     const precio = product.precio;
     const total = calculateTotal(cantidad,precio);
     const iva = calculateIva(total);
     const ventas = await updateVentas({id_producto, iva, total, cantidad, _id});
     return res.status(200).send(ventas)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlUpdateVentas }
