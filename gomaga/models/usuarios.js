const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
     name: {type: String, trim: 'Josue'},
     lastName: { type: String, default: 'Gomez' },
     Dateofbirth: {type: Number, trim: '01-12-22'},
     phone: { type: Number, default: '9211499619' },
     genre: { type: String, enum: ['H', 'M', 'U'], default: 'U'},
     email: {require: true, type: String, lowercase:true, trim: true, unique:true},
     password: {require: true, type: String}
},{
     timestamps: true
})

const Usuario = mongoose.model('Usuarios', usuarioSchema)
module.exports = Usuario

