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
module.exports = {
    getAllUser: getAllUser
}