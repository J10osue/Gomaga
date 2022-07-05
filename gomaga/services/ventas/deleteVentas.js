const Ventas = require('../../models/ventas');

async function deleteVentas({ _id }) {
     try {
          const userDeleted = await Ventas.deleteOne({ _id });
          if (userDeleted.deletedCount == 0)
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'venta no encontrada',
               };
          else
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'venta eliminada',
               };
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { deleteVentas };
