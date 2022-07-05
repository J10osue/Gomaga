const Usuario = require('../../models/usuarios');

async function selectUsuario(name) {
     try {
          /*let users
     if (!precio){
        users =   await user.find()
     }
     else{
          users =  await user.find({precio})
     }*/
          const users = !name
               ? await Usuario.find()
               : await Usuario.find({ name }, 'name lastname');
          return users;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { selectUsuario };
