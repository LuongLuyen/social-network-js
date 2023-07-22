const { Router } = require("express")
const userController = require("../controller/userController")
const postController = require("../controller/postController")
const router = require("express").Router()

router.get('/', (req, res) => {
	res.send(`Server is running on port 5000`)
})

//  http://localhost:5000/user
router.get('/user',userController.getCRUDAllUser)
router.post('/user',userController.createCRUDUser)
router.get('/user/:id',userController.getByIdCRUDUser)
router.delete('/user/:id',userController.deleteCRUDUser)
router.put('/user/:id',userController.updateCRUDUser)

//   http://localhost:5000/post
router.get('/post',postController.getCRUDAllPost)
router.post('/post',postController.createCRUDPost)
router.get('/post/:id',postController.getByIdCRUDPost)
router.delete('/post/:id',postController.deleteCRUDPost)
router.put('/post/:id',postController.updateCRUDPost)

module.exports = router