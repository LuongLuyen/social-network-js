const CRUDservice = require('../service/CRUDservice')
const getCRUDAllUser = async (req, res) => {
    const data = await CRUDservice.getAllUser()
    return res.json(data)
}
module.exports = {
    getCRUDAllUser: getCRUDAllUser,
}