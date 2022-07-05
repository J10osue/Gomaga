const product = require('../../models/productos');

async function deleteProduct({ _id }) {
     try {

          const userDeleted = await product.deleteOne({ _id });
          if (userDeleted.deletedCount == 0)
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'producto no encontrado',
               };
          else
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'producto eliminado',
               };
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { deleteProduct };
