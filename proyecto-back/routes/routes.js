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
router.delete('/eliminar-producto/:id', productoController.eliminarProducto)
router.get('/productos/:id', productoController.obtenerProducto)
router.put('/actualizar-producto/:id', productoController.actualizarProducto)

module.exports = router

