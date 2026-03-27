const express = require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000

/* MIDDLEWARES */
app.use(cors())
app.use(express.json())

//DB Connection

const conn = require("./db/conn")
conn()

//rotasssss
const routes = require("./routes/router")
app.use("/api", routes)

app.listen(port, function () {
  console.log(`
    ---------------------------------------------------------
    SERVIDOR RODANDO NA URL (http://localhost:${port})
    ---------------------------------------------------------
    `)
})
