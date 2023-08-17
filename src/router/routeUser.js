const { Router } = require("express")
const userController = require("../controller/userController")
const postController = require("../controller/postController")
const userMiddleare = require("../middleware/userMiddleware")
const router = require("express").Router()

//  http://localhost:5000/user-api/user
router.post('/user', userController.createCRUDUser)
router.get('/user/info', userController.getAllUserAndInfo)
router.get('/user/:id', userController.getByIdCRUDUser)

router.delete('/user', userMiddleare.checkLogin, userController.deleteCRUDUser)
router.put('/user', userMiddleare.checkLogin, userController.updateCRUDUser)

//   http://localhost:5000/user-api/login
router.post('/login', userController.loginUser)

//   http://localhost:5000/user-api/post
router.get('/post',postController.getCRUDAllPost)
router.get('/post/:id', postController.getByIdCRUDPost)

router.post('/post', userMiddleare.checkLogin, postController.createCRUDPost)
router.delete('/post', userMiddleare.checkLogin, postController.deleteCRUDPost)
router.put('/post', userMiddleare.checkLogin, postController.updateCRUDPost)

module.exports = router