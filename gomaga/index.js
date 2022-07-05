const express = require('express')
const routerApi = require('./routes')
const app = express()
const { config } = require('./config/index')
const { checkApiKey }= require('./middleware/auth.handler')
const passport = require('passport')


app.use(passport.initialize())

const port = config.port

const mongoose = require('mongoose')
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)



const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority `


console.log('***************')
console.log(MONGO_URI)

mongoose.connect(MONGO_URI,
 {useNewUrlParser: true, useUnifiedTopoLogy: true}
).then(()=> console.log('Nuestra app ya esta en linea')).catch(e=>console.log(e))


require('./utils/auth')

app.get('/', (req, res) =>{
  res.send('Welcome to our local soccer app')
})

app.get('/futbol', checkApiKey, (req, res) =>{
  res.send('Ourr app is going to be the best')
})

app.get('/clientes', (req, res) =>{
  res.send('games22')
})

routerApi(app)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
