const Usuario = require('../../models/usuarios');

async function createUsuario({ name, lastName, phone, email, password }) {
     try {
          const userCreated = await Usuario.create({
               name,
               lastName,



          });
          return userCreated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { createUsuario };
