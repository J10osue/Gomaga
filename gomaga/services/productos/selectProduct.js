const product = require('../../models/productos');

async function selectProduct(precio) {
     try {
          const users = !precio
               ? await product.find()
               : await product.find({ precio }, 'name lastname');
          return users;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { selectProduct };
