const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    tipo: {
        type: String,
        required : true
    },
    marca: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    rutaImg: {
        type: String,
        required: true  
    }, 
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
})


module.exports= mongoose.model('producto',contactoSchema)