const User = require('../dao/userDAO')

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        User.getAllUser((err,rows)=>{
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}
const getByIdUser = (req) => {
    return new Promise((resolve, reject) => {
        User.getByIdUser(req.params.id,(err,rows)=>{
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}
const createUser = (req) => {
    return new Promise((resolve, reject) => {
        User.createUser(req.body,(err,count)=>{
            if(err){
                reject(err)
            } else{
                resolve(count)
            }
        })
    })
}
const deleteUser = (req) => {
    return new Promise((resolve, reject) => {
        User.deleteUser(req.params.id,(err,rows)=>{
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}
const updateUser = (req) => {
    return new Promise((resolve, reject) => {
        User.updateUser(req.params.id,req.body,(err,rows)=>{
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}
module.exports = {
    getAllUser: getAllUser,
    createUser: createUser,
    getByIdUser: getByIdUser,
    deleteUser: deleteUser,
    updateUser: updateUser
}