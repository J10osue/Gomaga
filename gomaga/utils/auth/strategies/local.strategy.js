const { Strategy } = require ('passport-local')
const bcrypt = require('bcrypt')
const { getUserEmail } = require('../../../services/usuarios/getUserEmail')


const localStrategy = new Strategy(

     async(email, password, done) => {
          try{
          // const userTest = [
          //      {name: 'josue', email:'user1@emial.com', password: '$2b$10$t6Lfge/s3vbB6HJV9jhifeQ1DDMUM0cxr2La9jwxNg1NKsr4pEg/2', rol: 'admi1'},
          //      {name: 'alan', email:'adm@emial.com', password: '$2b$10$t6Lfge/s3vbB6HJV9jhifeQ1DDMUM0cxr2La9jwxNg1NKsr4pEg/2', rol: 'user' },
          //      {name: 'oscar', email:'user2@emial.com', password: '$2b$10$t6Lfge/s3vbB6HJV9jhifeQ1DDMUM0cxr2La9jwxNg1NKsr4pEg/2' , rol: 'user2'},
          // ]
          const user  = await getUserEmail(email);
          if(!user) return done(null, null)
          const isMatch = await bcrypt.compare(password, user.password)
          if(!isMatch) throw {status: 401, message: 'no autorizado', error: true}
          delete user.password
          console.log(user)
          done(null, user)
     }
          catch(error){
          done(error, false)
     }

      }
)

module.exports = localStrategy
