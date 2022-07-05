const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proveedorSchema = new Schema({

     name: 'String',
     fecha: Date,
     lastname: { type: String, default: '' },
     address: { type: String,lowercase: true, trim: true, default: 'Estados Unidos' },
     phone: { type: Number, default: '' },
     precio: {type: Number, default: ' 1000 , costo , ropa'},
     email: {require: true, type: String, lowercase:true, trim: true, unique:true}

},{
     timestamps: true
})

const Proveedor = mongoose.model('Proveedor', proveedorSchema)
module.exports = Proveedor
