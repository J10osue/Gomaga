const Ventas = require('../../models/ventas');

async function selectVentas() {
     try {

         return await  Ventas.find({});

     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { selectVentas };
