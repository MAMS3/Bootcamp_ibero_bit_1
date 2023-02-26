const express = require('express');
const router = express.Router()

const contactoController = require ('../controllers/contactoController')


router.get('/obtener-contactos', contactoController.obtenerContactos)

router.post('/crear-contactos', contactoController.crearContacto)

router.put('/actualizar-contactos', contactoController.actualizarContacto)

router.delete('/borrar-contactos', contactoController.eliminarContacto)

module.exports = router

