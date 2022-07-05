const { createVentas } = require('../../services/ventas/createVentas');
const { getProduct } = require('../../services/productos/getProduct');
const { calculateTotal, calculateIva } = require('../../utils/calculate/calculateVentas');



async function ctrlCreateVentas(req, res) {
     try {
          const { description, email, cantidad, id_producto   } = req.body;
          const product = await  getProduct(id_producto);
          const precio = product.precio;
          const total = calculateTotal(cantidad,precio);
          const iva = calculateIva(total)
          const user_id = req.user._id;
          const ventas = await createVentas({ cantidad,precio, description, email, total, iva, user_id, product_id: product._id });
             return res.status(200).send(ventas);
     } catch (error) {
          return res
               .status(error.status || 500)
               .send({ message: error.message });
     }
     //console.log('lo que solicitaste es', precio)
     //return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlCreateVentas };
