const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    artisticName: {
      type: String,
      required: true,
    },

    tel: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
)

const Users = mongoose.model("Users", userSchema)

module.exports = {
  Users,
  userSchema,
}
