const { Router } = require("express")
const homeController = require("../controller/homeController")
const router = require("express").Router()

router.get('/', (req, res) => {
	res.send(`Server is running on port 5000`)
})

//  http://localhost:5000/user
router.get('/user',homeController.getCRUDAllUser)

module.exports = router