const { Router } = require("express")
const filmController = require("../controller/filmController")
const userMiddleare = require("../middleware/userMiddleware")
const router = require("express").Router()

//  http://localhost:5000/film-api/film
router.get('/film', filmController.getCRUDAllFilm)

module.exports = router