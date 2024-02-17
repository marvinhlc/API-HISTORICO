const mysql = require('mysql')
const { promisify } = require('util')
const { test, produccion } = require('./config')

const pool = mysql.createPool({
    host: produccion.HOST,
    user: produccion.USER,
    password: produccion.PSW,
    database: produccion.DB,
    multipleStatements: true
})

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err)
    }
    if (connection) {
        connection.release()
        console.log('DB is connected')
        return
    }
})

pool.query = promisify(pool.query)
module.exports = pool;