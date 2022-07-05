const product = require('../../models/productos')

async function updateProduct({ name, user_id, precio, descripcion, cantidad, _id}){
try {
    const userUpdated = await product.findOneAndUpdate(
         {_id},
         { name,
          precio,
          user_id,
          descripcion,
          cantidad
     },
         {new: true}
    )
     return userUpdated
}    catch (error){
     return {message: error.message}
}
}
module.exports = {updateProduct}
