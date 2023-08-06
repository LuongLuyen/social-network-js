const { Router } = require("express")
const userController = require("../controller/userController")
const userMiddleare = require("../middleware/userMiddleware")
const router = require("express").Router()

//  http://localhost:5000/admin-api/user:role
router.get('/user', userMiddleare.checkAdmin)
router.get('/user/:role', userMiddleare.checkAdmin, userController.getCRUDAllUser)

module.exports = router