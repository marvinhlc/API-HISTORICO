const useRespondedor = (status, mensaje, datos, res) => {
    res.json({
        status: status,
        mensaje: mensaje,
        data: datos,
        log: new Date()
    })
}

module.exports = {
    useRespondedor
}