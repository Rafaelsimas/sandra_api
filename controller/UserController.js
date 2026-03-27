const { Users: UsersModel } = require("../model/User")

const usersController = {
  create: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        artisticName: req.body.artisticName,
        tel: req.body.tel,
        address: req.body.address,
        age: req.body.age,
      }

      const response = await UsersModel.create(user)
      res
        .status(201)
        .json({ response, msg: "Usuário cadastrado com sucesso com sucesso" })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await UsersModel.find()
      res.json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  teste: (req, res) => {
    res.status(201).json({ message: "Olá mundo" })
  },
}

module.exports = usersController
