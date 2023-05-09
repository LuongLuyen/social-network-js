const db = require('../config/config')
const User = require('../model/user')
const userDAO={
	getAllUser:(callback)=>{
		return db.query("Select * from users",callback)
	},
}
module.exports = userDAO