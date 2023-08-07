const User = require('../dao/userDAO')

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            const user = User.find()
            resolve(user)
        } catch (err) {
            reject(err)
        }
    })
}
const getByIdUser = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const user = User.findById(req.params.id)
            resolve(user)
        } catch (err) {
            reject(err)
        }
    })
}
const createUser = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const user = User.create(req.body)
            resolve(user)
        } catch (err) {
            reject(err)
        }
    })
}
const deleteUser = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const user = User.destroy(req.body.id)
            resolve(user)
        } catch (err) {
            reject(err)
        }
    })
}
const updateUser = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const user = User.update(req.body)
            resolve(user)
        } catch (err) {
            reject(err)
        }
    })
}
const loginUser =  async(req, res) => {
    try {
        const user = await User.findOne(req.body.userName)
        if(user.userName === req.body.userName && user.password === req.body.password){
            res.redirect('http://localhost:3000/home')
        }
        return res.redirect('http://localhost:3000')
    } catch (err) {
        return res.redirect('http://localhost:3000')
    }
}


module.exports = {
    getAllUser: getAllUser,
    createUser: createUser,
    getByIdUser: getByIdUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    loginUser: loginUser
}