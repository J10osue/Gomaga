const { createUsuario } = require('../../services/usuarios/createUsuario');
const bcrypt = require('bcrypt')
async function ctrlCreateUsuario(req, res) {
     try {
          const { name, lastName, phone, email, password } = req.body;
          const securePassword =  bcrypt.hash(password,5);
          const hashPassword = await  securePassword.then(response => response)
          const usuario = await createUsuario({ name, lastName, phone, email, password: hashPassword });
          delete usuario.password;
          return res.status(200).send(usuario);
     } catch (error) {
          return res
               .status(error.status || 500)
               .send({ message: error.message });
     }
     //console.log('lo que solicitaste es', precio)
     //return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlCreateUsuario };
