const db = require('../database/database')

function getAll() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT 
                        a.IDExpediente,
                        a.CodigoEstudiante,
                        CONCAT(a.PrimerApellido,' ',a.SegundoApellido,', ',a.PrimerNombre,' ',a.SegundoNombre) AS NombreEstudiante,
                        a.IdCarrera,
                        a.PlanVersion,
                        a.Genero
                    FROM estudiantes_identificaciones a
                    ORDER BY a.IdCarrera,a.PlanVersion,a.PrimerApellido,a.SegundoApellido,a.PrimerNombre,a.SegundoNombre
                    LIMIT 100;`
        console.log('sql->', sql)
        db.query(sql, (err, rows) => {
            if (err) return reject(err)
            resolve(rows)
        })
    })
}

function createEstudiante(Nombres, Apellidos, FechaNacimiento, Sexo) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO estudiantes_nuevos
                    (Nombres,Apellidos,FechaNacimiento,Sexo)
                    VALUES
                    (?,?,?,?);`
        db.query(sql, [Nombres, Apellidos, FechaNacimiento, Sexo], (err, rows) => {
            if (err) return reject(err)
            console.log(rows)
            resolve(rows)
        })
    })
}

module.exports = {
    getAll,
    createEstudiante
}