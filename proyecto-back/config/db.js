const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

require('dotenv').config({path: "config.env"})

const conectarDB = async () => {
    try {
        console.log("Conectando DB...")
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //useFindAndModity: false
        })

        console.log("Base de datos conectada!!!")

    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB




