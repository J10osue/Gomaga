const Usuario = require('../../models/usuarios');

async function getUserEmail(email) {
     try {
          return await Usuario.findOne({ email });
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { getUserEmail };
