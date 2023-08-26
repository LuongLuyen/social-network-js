const { Router } = require("express")
const messageController = require("../controller/messageController")
const router = require("express").Router()

//  http://localhost:5000/mess-api/mess
router.post('/mess', messageController.getCRUDMess)

module.exports = router