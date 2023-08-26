const Message = require('../dao/messageDAO')

const getMessByGroup = async(req) => {
    try {
        const data = await Message.findMessByGroup(req.body.id)
        return data
    } catch (err) {
        return null
    }
}
module.exports = {
    getMessByGroup: getMessByGroup,
}