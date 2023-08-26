const messageService = require('../service/messageService')
const getCRUDMess = async (req, res) => {
    const data = await messageService.getMessByGroup(req)
    return res.json(data)
}
module.exports = {
    getCRUDMess: getCRUDMess,
}