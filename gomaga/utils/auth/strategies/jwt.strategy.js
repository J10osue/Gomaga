const {Strategy, ExtractJwt} = require('passport-jwt')
const {config} = require('../../../config/index')
const pid = encodeURIComponent (config.dbpayload)

const options = {
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey: pid
}

const JwtStrategy = new Strategy(options, (payload, done)=>{
     return done(null, payload)
})

module.exports = JwtStrategy
