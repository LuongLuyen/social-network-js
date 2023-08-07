const userService = require('../service/userService')
const getCRUDAllUser = async (req, res) => {
    const data = await userService.getAllUser()
    return res.json(data)
}
const getByIdCRUDUser = async (req, res) => {
    const data = await userService.getByIdUser(req)
    return res.json(data)
}
const createCRUDUser = async (req, res) => {
    const data = await userService.createUser(req)
    return res.json(data)
}
const deleteCRUDUser = async (req, res) => {
    const data = await userService.deleteUser(req)
    return res.json(data)
}
const updateCRUDUser = async (req, res) => {
    const data = await userService.updateUser(req)
    return res.json(data)
}
const loginUser = async (req, res) => {
    const data = await userService.loginUser(req,res)
    return data
}

module.exports = {
    getCRUDAllUser: getCRUDAllUser,
    createCRUDUser: createCRUDUser,
    getByIdCRUDUser: getByIdCRUDUser,
    deleteCRUDUser: deleteCRUDUser,
    updateCRUDUser: updateCRUDUser,
    loginUser: loginUser
}