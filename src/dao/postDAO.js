const db = require('../config/config')
const Post = require('../model/postModel')

const find = ()=> {
	return new Promise((resolve, reject) => {
		const sql = "Select * from posts"
		db.query(sql,(err,results)=>{
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
		const post = new Post(data)
		const sql = "Insert into posts(user_id,content,like_count) values(?,?,?)"
		db.query(sql,[
			post.user_id,
			post.content,
			post.like_count
		], (err,results)=>{
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
        const sql = "select * from posts where Id=?"
		db.query(sql,[id],(err,results)=>{
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
        const sql = "delete from posts where Id=?"
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
		const post = new Post(data)
        const sql = "update posts set user_id=?,content=?,like_count=? where Id=?"
		db.query(sql,[
			post.user_id,
			post.content,
			post.like_count,
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
	create: create,
	findById: findById,
	destroy: destroy,
	update: update
}