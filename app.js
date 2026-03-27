const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

// Conexão Mongo
const connect = require("./db/conn")
connect()

// Rotas
const routes = require("./routes/router")
app.use("/api", routes)

// Exporta o app sem listen()
module.exports = app
