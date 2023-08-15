const filmService = require('../service/filmService')
const getCRUDAllFilm = async (req, res) => {
    const data = await filmService.getAllFilm()
    return res.json(data)
}
module.exports = {
    getCRUDAllFilm: getCRUDAllFilm,
}