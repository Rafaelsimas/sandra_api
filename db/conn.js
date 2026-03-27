const mongoose = require("mongoose")

let isConnected = false

async function connect() {
  if (isConnected) return

  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.MONGO_URL)
    isConnected = true
    console.log("MongoDB conectado")
  } catch (err) {
    console.error("Erro ao conectar MongoDB:", err)
  }
}

module.exports = connect
