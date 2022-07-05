const Proveedor = require('../../models/proveedor');

async function selectProveedor(precio) {
     try {
          /*let users
     if (!precio){
        users =   await user.find()
     }
     else{
          users =  await user.find({precio})
     }*/
          const users = !precio
               ? await Proveedor.find()
               : await Proveedor.find({ precio }, 'name lastname');
          return users;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { selectProveedor };
