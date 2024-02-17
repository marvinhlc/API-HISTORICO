const produccion = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PSW: process.env.DB_PSW,
    DB: process.env.DB_NAME
}

const test = {
    HOST: process.env.TEST_HOST,
    PORT: process.env.TEST_PORT,
    USER: process.env.TEST_USER,
    PSW: process.env.TEST_PSW,
    DB: process.env.TEST_NAME
}

module.exports = {
    produccion,
    test
}