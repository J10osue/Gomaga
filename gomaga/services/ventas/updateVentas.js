const Ventas = require('../../models/ventas');



async function updateVentas({ iva, total, id_producto, _id, cantidad }) {
     try {
          const ventasUpdated = await Ventas.findOneAndUpdate(
               { _id },
               { iva, total, id_producto, cantidad },
               { new: true }
          );
          return ventasUpdated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { updateVentas };
