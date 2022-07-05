const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productosSchema = new Schema({
     name: 'String',
     descripcion: {type: String},
     user_id: {
          type: mongoose.Schema.ObjectId,
          ref: 'usuarios',
          required: 'Campo id usuario es requerido'
      },
     fecha: Date,
     precio: {type: Number, default: ' 1000 , costo , ropa'},
     cantidad: {type: Number, trim: true, default: 0},
},{
     timestamps: true
})

const Productos = mongoose.model('Productos', productosSchema)
module.exports = Productos
