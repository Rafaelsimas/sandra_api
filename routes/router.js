const router = require("express").Router()

const userRouter = require("./Users")

router.use("/", userRouter)

module.exports = router
