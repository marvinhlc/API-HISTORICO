require('dotenv').config()
require('./src/database/database')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const apiroutes = require('./src/routes/index')
app.use('/apihistorico/v1', apiroutes)

app.set('port', process.env.PORT || 5075)
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto ', app.get('port'))
})