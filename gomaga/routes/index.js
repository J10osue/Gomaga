
const express = require('express')
const productosRouters = require('./productos')
const proveedorRouters = require('./proveedor')
const usuarioRouters = require('./usuario')
const ventasRouters = require('./ventas')
const authRouters = require('./auth')

function routerApi(app){
  app.use(express.json())
  app.use('/auth', authRouters)
  app.use('/productos', productosRouters)
  app.use('/proveedor', proveedorRouters)
  app.use('/usuario', usuarioRouters)
  app.use('/ventas', ventasRouters)

}

module.exports = routerApi
