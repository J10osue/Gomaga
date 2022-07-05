const Venta = require('../../models/ventas');

async function createVentas({  date, total, precio, cantidad, iva, user_id, product_id }) {
     try {
          const ventasCreated = await Venta.create({
               total,
               iva,
               precio,
               cantidad,
               date,
               user_id,
               product_id
          });
          return ventasCreated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { createVentas };
