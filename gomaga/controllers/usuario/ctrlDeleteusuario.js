const { deleteUsuario } = require('../../services/usuarios/deleteUsuario');

async function ctrlDeleteUsuario(req, res) {
     try {
          const { name, lastName } = req.body;
          const { email } = req.params;
          const usuario = await deleteUsuario({ name, lastName, email });
          return res.status(200).send(usuario);
     } catch (error) {
          return res
               .status(error.status || 500)
               .send({ message: error.message });
     }
}

module.exports = { ctrlDeleteUsuario };
