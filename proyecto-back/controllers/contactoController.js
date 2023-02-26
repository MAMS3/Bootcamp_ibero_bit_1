const modContacto = require("../models/modelContacto")
exports.obtenerContactos = (req, res) => {
    res.send('Consultando todos los contactos')
}


exports.obtenerContacto = (req, res) => {
    res.send('Consultando un contacto')
}


exports.crearContacto = async (req, res) => {
    try {
        let contacto
        contacto = new modContacto(req.body)
        await contacto.save()
        res.send(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Algo pasa al momento de guardar la información')
    }
}


exports.actualizarContacto = (req, res) => {
    res.send('Actualizando algo en la api')
}


exports.eliminarContacto = (req, res) => {
    res.send('Borrando algo en la api')
}


