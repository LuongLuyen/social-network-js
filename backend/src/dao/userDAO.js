const db = require('../config/config')
const User = require('../model/userModel')
const userDAO={
	getAllUser:(callback)=>{
        const sql = "Select * from users"
		return db.query(sql,callback)
	},
    getByIdUser:(id,callback)=>{
        const sql = "select * from users where Id=?"
		return db.query(sql,[id],callback)
	},
	createUser:(User,callback)=>{
        const sql = "Insert into users(username,password,full_name,email,avatar_url,interested_user) values(?,?,?,?,?,?)"
		return db.query(sql,[User.username,User.password,User.full_name,User.email,User.avatar_url,User.interested_user],callback)
	},
	deleteUser:(id,callback)=>{
        const sql = "delete from users where Id=?"
		return db.query(sql,[id],callback)
	},
	updateUser:(id,User,callback)=>{
        const sql = "update users set username=?,password=?,full_name=?,email=?,avatar_url=?,interested_user=? where Id=?"
		return db.query(sql,[User.username,User.password,User.full_name,User.email,User.avatar_url,User.interested_user,id],callback)
	}
}
module.exports = userDAO