const { Router } = require("express")
const userController = require("../controller/userController")
const postController = require("../controller/postController")
const userMiddleare = require("../middleware/userMiddleware")
const router = require("express").Router()

router.get('/', (req, res) => {
	res.send(`Server is running on port 5000`)
})

//  http://localhost:5000/user-api/user
router.post('/user', userMiddleare.checkLogin, userController.createCRUDUser)
router.get('/user/:id', userMiddleare.checkLogin, userController.getByIdCRUDUser)
router.delete('/user/:id', userMiddleare.checkLogin, userController.deleteCRUDUser)
router.put('/user/:id', userMiddleare.checkLogin, userController.updateCRUDUser)

//   http://localhost:5000/user-api/post
router.get('/post',postController.getCRUDAllPost)
router.post('/post', userMiddleare.checkLogin, postController.createCRUDPost)
router.get('/post/:id', userMiddleare.checkLogin, postController.getByIdCRUDPost)
router.delete('/post/:id', userMiddleare.checkLogin, postController.deleteCRUDPost)
router.put('/post/:id', userMiddleare.checkLogin, postController.updateCRUDPost)

module.exports = router