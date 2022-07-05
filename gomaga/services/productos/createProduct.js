const product = require('../../models/productos');

async function createProduct({ name, user_id, precio, descripcion }) {
     try {
          const productCreated = await product.create({
               name,
               precio,
               user_id,
               descripcion
          });
          return productCreated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { createProduct };
