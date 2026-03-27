const mongoose = require("mongoose")

async function main() {
  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect(process.env.MONGO_URL)
    console.log(`
      ---------------------------------------------------------
      SUCCESSFULLY CONNECTED TO THE DATABASE SUCCESSFULLY (MongoDB
      -----------------------------------------------------
      `)
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main
