const Proveedor = require('../../models/proveedor');

async function createProveedor({ name, fecha, precio, email }) {
     try {
          const proveedorCreated = await Proveedor.create({
               namee,
               fecha,
               precio,
               email,
          });
          return proveedorCreated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { createProveedor };
