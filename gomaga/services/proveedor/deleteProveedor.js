const Proveedor = require('../../models/proveedor');

async function deleteProveedor({ email }) {
     try {
          const userDeleted = await Proveedor.deleteOne({ email });
          if (userDeleted.deletedCount == 0)
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'usuario no encontrado',
               };
          else
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'Usuario eliminado',
               };
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { deleteProveedor };
