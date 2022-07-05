const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ctrlSelectProveedor} = require('../controllers/proveedor/ctrlselectproveedor')
const {ctrlUpdateProveedor} = require('../controllers/proveedor/ctrlUpdateproveedor')
const {ctrlCreateProveedor} = require('../controllers/proveedor/ctrlCreateproveedor')
const {ctrlDeleteProveedor} = require('../controllers/proveedor/ctrlDeleteproveedor')

router.get('/',
passport.authenticate('jwt', {session: false}),
ctrlSelectProveedor
)

router.post('/',
passport.authenticate('jwt', {session: false}),
ctrlCreateProveedor
)

router.put('/:email',
passport.authenticate('jwt', {session: false}),
ctrlUpdateProveedor
)

router.delete('/:email',
passport.authenticate('jwt', {session: false}),
ctrlDeleteProveedor
)


module.exports = router
