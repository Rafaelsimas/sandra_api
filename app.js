const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

// Conexão
const connect = require("./db/conn")

// Conecta apenas quando a função serverless é chamada
connect()

// Rotas
const routes = require("./routes/router")
app.use("/api", routes)

// Não use app.listen() na Vercel!
module.exports = app
