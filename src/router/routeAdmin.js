const { Router } = require("express")
const userController = require("../controller/userController")
const userMiddleare = require("../middleware/userMiddleware")
const router = require("express").Router()

//  http://localhost:5000/admin-api/user:token
router.get('/user', userMiddleare.checkAdmin)
router.get('/user/:token', userMiddleare.checkAdmin, userController.getCRUDAllUser)

module.exports = router