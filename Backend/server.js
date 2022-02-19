require("dotenv").config()
const express = require("express")
const cors = require("cors")
const Router = require("./routes/routes" )
const app = express()
require("./config/database")



//Usa los parametros de json que provengan de la base de datos
app.use(express.json()) // middleware que pasa los datos a una variable
app.use(cors()) 
app.use("/api", Router)


app.listen("4000", () => console.log("Servidor inicializado en puerto 4000"))

