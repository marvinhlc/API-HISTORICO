const express = require('express')
const app = express()
const { useRespondedor } = require('../../tools/tools')
const { getAll } = require('../../models/estudiantes')

app.get('/:id', (req, res) => {
    const { id } = req.params
    getAll(id)
        .then((rows) => {
            useRespondedor(true, 'Datos encontrados', rows[0], res)
        })
        .catch((error) => {
            useRespondedor(false, error, null, res)
        })
})

module.exports = app