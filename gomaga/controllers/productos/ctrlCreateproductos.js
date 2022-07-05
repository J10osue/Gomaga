const { createProduct } = require('../../services/productos/createProduct');

async function ctrlCreateProduct(req, res) {
     try {
          const { name, precio, descripcion } = req.body;
          const user_id = req.user._id;
          console.log(user_id, req.user);
          const productos = await createProduct({
               name,
               precio,
               descripcion,
               user_id,
          });
          return res.status(200).send(productos);
     } catch (error) {
          return res
               .status(error.status || 500)
               .send({ message: error.message });
     }
     //console.log('lo que solicitaste es', precio)
     //return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlCreateProduct };
