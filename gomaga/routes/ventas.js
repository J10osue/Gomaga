const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ctrlSelectVentas} = require('../controllers/ventas/ctrlselectventas')
const {ctrlUpdateVentas} = require('../controllers/ventas/ctrlUpdateventas')
const {ctrlCreateVentas} = require('../controllers/ventas/ctrlCreateventas')
const {ctrlDeleteVentas} = require('../controllers/ventas/ctrlDeleteventas')

router.get('/',
passport.authenticate('jwt', {session: false}),
ctrlSelectVentas
)

router.post('/',
passport.authenticate('jwt', {session: false}),
ctrlCreateVentas
)

router.put('/:_id',
passport.authenticate('jwt', {session: false}),
ctrlUpdateVentas
)

router.delete('/:_id',
passport.authenticate('jwt', {session: false}),
ctrlDeleteVentas
)


module.exports = router
