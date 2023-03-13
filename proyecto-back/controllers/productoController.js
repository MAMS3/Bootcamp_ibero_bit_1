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
