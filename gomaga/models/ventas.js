const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ventasSchema = new Schema({
     user_id: {
          type: mongoose.Schema.ObjectId,
          ref: 'usuarios',
          required: 'Campo id usuario es requerido'
      },
      product_id: {
          type: mongoose.Schema.ObjectId,
          ref: 'productos',
          required: 'Campo id usuario es requerido'
      },
     total: {type: Number, require: true},
     precio: {type: Number, require: true},
     cantidad: {type: Number, require: true},
     iva: {type: Number, require: true},
     date: {type: String, trim: '25 octubre'},
},{
     timestamps: true
})

const Ventas = mongoose.model('Ventas', ventasSchema)
module.exports = Ventas
