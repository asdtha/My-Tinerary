require("dotenv").config()
const express = require("express")
require("./config/database")
const app = express()
//Usa los parametros de json que provengan de la base de datos
app.use(express.json())

app.listen("4000", () => console.log("Servidor inicializado en puerto 4000"))