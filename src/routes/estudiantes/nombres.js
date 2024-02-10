const express = require('express')
const app = express()

app.get('/:id', (req, res) => {
    const { id } = req.params
    res.json({ mensaje: 'recibido', recibido: id })
})
    .use('/:id/datosgenerales', require('./datosgenerales/datosgenerales'))

module.exports = app