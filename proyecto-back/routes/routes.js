const express = require('express');
const router = express.Router()

const contactoController = require ('../controllers/contactoController')
const productoController = require ('../controllers/productoController')

//RUTA DE CONTACTOS
router.get('/obtener-contactos', contactoController.obtenerContactos)
router.post('/crear-contactos', contactoController.crearContacto)
router.put('/actualizar-contactos', contactoController.actualizarContacto)
router.delete('/borrar-contactos', contactoController.eliminarContacto)

//RUTA DE PRODUCTOS
router.post('/crear-producto', productoController.crearProducto)
router.get('/productos', productoController.obtenerProductos)

module.exports = router

