require("dotenv").config()
const express = require("express")
const cors = require("cors")
require("./config/database")

const Router = require("./route/route")

const app = express()
//Usa los parametros de json que provengan de la base de datos
app.use(express.json())
app.use("/api", Router)
app.use(cors())


app.listen("4000", () => console.log("Servidor inicializado en puerto 4000"))

