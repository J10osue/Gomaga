const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ctrlSelectUsuario} = require('../controllers/usuario/ctrlselectusuario')
const {ctrlUpdateUsuario} = require('../controllers/usuario/ctrlUpdateusuario')
const {ctrlCreateUsuario} = require('../controllers/usuario/ctrlCreateusuario')
const {ctrlDeleteUsuario} = require('../controllers/usuario/ctrlDeleteusuario')

router.get('/',

ctrlSelectUsuario
)

router.post('/',
passport.authenticate('jwt', {session: false}),
ctrlCreateUsuario
)

router.put('/:email',
passport.authenticate('jwt', {session: false}),
ctrlUpdateUsuario
)

router.delete('/:email',
passport.authenticate('jwt', {session: false}),
ctrlDeleteUsuario
)


module.exports = router
