const getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const user={
                name:"tuan",
                password:"123"
            }
            resolve(user)
        } catch (err) {
            reject(err)
        }
    })
}
module.exports = {
    getAllUser: getAllUser
}