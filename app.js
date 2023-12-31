require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()

app.use(cors())
app.use(express.json())

const PORT= process.env.PORT || 3000

// Llamamos a las rutas
app.use("/api/v1", require("./routes"))


app.listen(PORT,()=>{
    console.log("Servidor escuchando en http://localhost:" + PORT)
})

dbConnect()