const Film = require('../dao/filmDAO')

const getAllFilm = async() => {
    try {
        const data = await Film.find()
        return data
    } catch (err) {
        return null
    }
}
module.exports = {
    getAllFilm: getAllFilm,
}