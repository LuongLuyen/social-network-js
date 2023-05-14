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
const create = (data)=> {
	return new Promise((resolve, reject) => {
		const user = new User(data)
		const sql = "Insert into users(username,password,full_name,email,study_at,working_at,other_info,date_of_birth,avatar_url) values(?,?,?,?,?,?,?,?,?)"
		db.query(sql,[
			user.username,
			user.password,
			user.full_name,
			user.email,
			user.study_at,
			user.working_at,
			user.other_info,
			user.date_of_birth,
			user.avatar_url,
		], (err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(results)
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
				resolve(results)
			}
		}) 
	})
}
const update = (id,data)=> {
	return new Promise((resolve, reject) => {
		const user = new User(data)
        const sql = "update users set username=?,password=?,full_name=?,email=?,study_at=?,working_at=?,other_info=?,date_of_birth=?,avatar_url=? where Id=?"
		db.query(sql,[
			user.username,
			user.password,
			user.full_name,
			user.email,
			user.study_at,
			user.working_at,
			user.other_info,
			user.date_of_birth,
			user.avatar_url,
			id
		], (err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(results)
			}
		}) 
	})
}

module.exports = {
	find: find,
	findById: findById,
	create: create,
	destroy: destroy,
	update: update
}