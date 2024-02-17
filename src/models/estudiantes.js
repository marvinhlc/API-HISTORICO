const db = require('../database/database')

function getAll(id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT JitCUM(${id}) AS CUM;`
        db.query(sql, (err, rows) => {
            if (err) return reject(err)
            resolve(rows)
        })
    })
}

module.exports = {
    getAll,
}