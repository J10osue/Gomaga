const proveedor = require('../../models/proveedor')

async function updateProveedor({name, fecha, email}){
try {
    const userUpdated = await proveedor.findOneAndUpdate(
         {email},
         {name, fecha},
         {new: true}
    )
     return userUpdated
}    catch (error){
     return {message: error.message}
}
}
module.exports = {updateProveedor}
