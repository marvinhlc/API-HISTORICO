const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
    .use('/estudiantes', require('./estudiantes/nombres'))
    .use('/materias', require('./materias/pensum'))
    .use('/nombres', require('./estudiantes/nombres'))

module.exports = app