const mongoose = require("mongoose")

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI).then(
        ()=>{
            console.log('**** Conexión con base de datos establecidad')
        },
        err => {
            console.log('--- Error en la conexion con base de datos: ')
        },
    )
}

module.exports = dbConnect