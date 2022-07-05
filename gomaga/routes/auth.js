const express = require('express')
const passport = require('../utils/auth')
const jwt = require('jsonwebtoken')
const {config} = require('../config/index')
const pid = encodeURIComponent (config.dbpayload)
const router = express.Router()

router.post('/login',
passport.authenticate('local', {session:false}),
async (req, res, next)=>{
     try{
       const user = req.user
       const payload = {
         sub: user.id,
         role: user.rol,
         name: user.name,
         _id: user._id
       }
       const token = jwt.sign(payload, pid)
       res.json({
            user,
            token
       })
       //res.json(req.user)
     } catch(error){
       next(error)
     }
}
)
module.exports = router
