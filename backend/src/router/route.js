const { Router } = require("express")
const userController = require("../controller/userController")
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


module.exports = router