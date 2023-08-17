const db = require('../config/config')
const User = require('../model/userModel')

const find = ()=> {
	return new Promise((resolve, reject) => {
		const sql = "Select * from users"
		db.query(sql,(err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(results)
			}
		}) 
	})
}
const userAndInfo = ()=> {
	return new Promise((resolve, reject) => {
	// SELECT * FROM users u
	// LEFT JOIN userinfos ui ON u.id = ui.id
	// UNION
	// SELECT * FROM users u
	// RIGHT JOIN userinfos ui ON u.id = ui.id
		const sql = "SELECT * FROM users u LEFT JOIN userinfos ui ON u.id = ui.id UNION SELECT * FROM users u RIGHT JOIN userinfos ui ON u.id = ui.id"
		db.query(sql,(err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(results)
			}
		}) 
	})
}
const findById = (id)=> {
	return new Promise((resolve, reject) => {
        const sql = "select * from users where Id=?"
		db.query(sql,[id],(err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(results)
			}
		}) 
	})
}
const findOne = (data)=> {
	return new Promise((resolve, reject) => {
        const sql = "select * from users where userName =?"
		db.query(sql,[data],(err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(results[0])
			}
		}) 
	})
}
const create = (data)=> {
	return new Promise((resolve, reject) => {
		const user = new User(data)
		const sql = "Insert into users(userName,password,fullName,email,role) values(?,?,?,?,?)"
		db.query(sql,[
			user.userName,
			user.password,
			user.fullName,
			user.email,
			user.role
		], (err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(user)
			}
		}) 
	})
}
const destroy = (id)=> {
	return new Promise((resolve, reject) => {
        const sql = "delete from users where Id=?"
		db.query(sql, [id], (err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve({"idDelete":id})
			}
		}) 
	})
}
const update = (data)=> {
	return new Promise((resolve, reject) => {
		const user = new User(data)
        const sql = "update users set userName=?,password=?,fullName=?,email=?,role=? where Id=?"
		db.query(sql,[
			user.userName,
			user.password,
			user.fullName,
			user.email,
			user.role,
			user.id
		], (err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve({"idUpdated":user.id})
			}
		}) 
	})
}

module.exports = {
	find: find,
	findById: findById,
	findOne: findOne,
	create: create,
	destroy: destroy,
	update: update,
	userAndInfo: userAndInfo
}