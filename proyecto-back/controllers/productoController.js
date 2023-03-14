const { request } = require('express')
const modProducto = require ('../models/modelProducto')

exports.crearProducto = async (req, res) => {
    try {
        let producto
        producto = new modProducto(req.body)
        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Algo pasa al momento de guardar el producto')
    }
}

exports.obtenerProductos = async (req, res) => {
    try{
        let productos
        productos = await modProducto.find()
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.status(500).send('Algo pasa al momento de consultar los productos')
    }
}

exports.eliminarProducto = async (req, res) => {
    try{
        let producto
        producto = await modProducto.findById(req.params.id) 
        if(!producto) {
            res.status(404).json( { msg: 'Producto no encontrado en la base datos' })
        }
        await modProducto.findOneAndRemove ({ _id: req.params.id })
        res.json({msg:'Producto eliminado satisfactoriamente'})
        
    }catch (error){
        console.log(error)
        res.status(500).send('Algo pasa al momento de eliminar el productos')
    }
}

exports.obtenerProducto = async(req, res) => {
    try {
        let producto 
        producto = await modProducto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ msg: 'Producto no encontrado en la base datos' })
        }
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Algo sucede al buscar un producto especifico')
    }
}

exports.actualizarProducto = async(req, res) => {
    try {
        let { tipo, marca, nombre, precio, rutaImg } = req.body 
        let producto = await modProducto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ msg: 'Producto no encontrado en la base datos' })
        }

        producto.tipo = tipo
        producto.marca = marca
        producto.nombre = nombre
        producto.precio = precio
        producto.rutaImg = rutaImg

        producto = await modProducto.findOneAndUpdate({ _id: req.params.id }, producto, {new: true})
        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo sucede al actualizar el producto')
    }
}

