const { Router } = require("express")
const userController = require("../controller/userController")
const postController = require("../controller/postController")
const userMiddleare = require("../middleware/userMiddleware")
const router = require("express").Router()

router.get('/', (req, res) => {
	res.send(`Server is running on port 5000`)
})

//  http://localhost:5000/user-api/user
router.post('/user', userController.createCRUDUser)
router.get('/user/:id', userController.getByIdCRUDUser)

router.delete('/user', userMiddleare.checkLogin, userController.deleteCRUDUser)
router.put('/user', userMiddleare.checkLogin, userController.updateCRUDUser)

//   http://localhost:5000/user-api/post
router.get('/post',postController.getCRUDAllPost)
router.get('/post/:id', postController.getByIdCRUDPost)

router.post('/post', userMiddleare.checkLogin, postController.createCRUDPost)
router.delete('/post', userMiddleare.checkLogin, postController.deleteCRUDPost)
router.put('/post', userMiddleare.checkLogin, postController.updateCRUDPost)

module.exports = router