const express = require('express')
const app = express()
const { useRespondedor } = require('../../tools/tools')
const { getAll, createEstudiante } = require('../../models/estudiantes')

app.get('/', (req, res) => {
    getAll()
        .then((rows) => {
            useRespondedor(true, 'Datos encontrados', rows, res)
        })
        .catch((error) => {
            useRespondedor(false, error, null, res)
        })
})

app.post('/', (req, res) => {
    const {
        Nombres,
        Apellidos,
        FechaNacimiento,
        Sexo
    } = req.body
    if (!Nombres || !Apellidos || !FechaNacimiento || !Sexo) {
        return useRespondedor(false, "Faltan datos necesarios", null, res)
    }
    createEstudiante(Nombres, Apellidos, FechaNacimiento, Sexo)
        .then((respuesta) => {
            useRespondedor(true, 'Registro creado correctamente', respuesta, res)
        })
        .catch((error) => {
            useRespondedor(false, error, null, res)
        })
})

module.exports = app