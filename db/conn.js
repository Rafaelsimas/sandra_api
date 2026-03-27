const mongoose = require("mongoose")

let isConnected = false

async function connect() {
  if (isConnected) return

  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.MONGO_URL)
    isConnected = true
    console.log("MongoDB conectado ✓")
  } catch (error) {
    console.error("Erro ao conectar MongoDB:", error)
  }
}

module.exports = connect
