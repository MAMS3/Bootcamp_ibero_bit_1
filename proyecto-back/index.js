//CREACION DEL SERVIDOR
const express = require('express'); //LLAMADA DEL SERVICIO DE EXPRESS 
const conectarDB = require('./config/db')//LLAMAMOS EL ARCHIVO db.js DE LA CARPETA CONFIG

//CREACION DEL SERVIDOR
let app = express();

//CONECTAMOS A LA DB
conectarDB();//LLAMAMOS LA FUNCION QUE HACE LA CONEXION A LA BASE DE DATOS

app.use(express.json())
//DEFINIMOS RUTA PRINCIPAL


app.use('/api', require('./routes/routes'))

//CREACION DEL SERVIDOR PARA EJECUTARLO EN http://localhost:4000/
app.listen(4000, () => {
    console.log("Ejecutando en el servidor...");
})

