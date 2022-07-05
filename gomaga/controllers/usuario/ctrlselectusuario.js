const { selectUsuario } = require('../../services/usuarios/selectUsuario');

async function ctrlSelectUsuario(req, res) {
     try {
          const { name } = req.query;
          const usuario = await selectUsuario(name);
          return res.status(200).send(usuario);
     } catch (error) {
          return res
               .status(error.status || 500)
               .send({ message: error.message });
     }
     //console.log('lo que solicitaste es', precio)
     //return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlSelectUsuario };
