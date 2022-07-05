const Usuario = require('../../models/usuarios');

async function updateUsuario({ name, lastName, email, phone }) {
     try {
          const userUpdated = await Usuario.findOneAndUpdate(
               { email },
               { name, lastName, phone },
               { new: true }
          );
          return userUpdated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { updateUsuario }
