const express = require('express')
const app = express()

app.post('/', (req, res) => {
    const { nombre, apellido } = req.body
    res.json({ mensaje: 'recibido', body: { nombre, apellido } })
})

module.exports = app