const { Router } = require("express")
const homeController = require("../controller/userController")
const router = require("express").Router()

router.get('/', (req, res) => {
	res.send(`Server is running on port 5000`)
})

//  http://localhost:5000/user
router.get('/user',homeController.getCRUDAllUser)
router.post('/user',homeController.createCRUDUser)
router.get('/user/:id',homeController.getByIdCRUDUser)
router.delete('/user/:id',homeController.deleteCRUDUser)
router.put('/user/:id',homeController.updateCRUDUser)


module.exports = router