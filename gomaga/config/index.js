require('dotenv').config()

const config = {
   dev: process.env.NODE_ENV !== 'production',
   port: process.env.PORT,
   cors: process.env.CORS,
   dbUser: process.env.DB_USER,
   dbPassword: process.env.DB_PASSWORD,
   dbHost: process.env.DB_HOST,
   dbName: process.env.DB_NAME,
   dbApiPassword: process.env.DB_APIIP,
   dbpayload: process.env.DB_SECRETA


}

module.exports = { config }

