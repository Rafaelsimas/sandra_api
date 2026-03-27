const router = require("express").Router()
const usersController = require("../controller/UserController")
//funções
router.route("/users").post((req, res) => usersController.create(req, res))
router.route("/users").get((req, res) => usersController.getAll(req, res))
router.route("/users1").get((req, res) => usersController.teste(req, res))

module.exports = router
