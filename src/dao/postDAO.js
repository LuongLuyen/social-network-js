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
		const sql = "Insert into posts(userId,content,contentUrl,likeCount,shareCount,commentCount,category) values(?,?,?,?,?,?,?)"
		db.query(sql,[
			post.userId,
			post.content,
			post.contentUrl,
			post.likeCount,
			post.shareCount,
			post.commentCount,
			post.category
		], (err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve(post)
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
				resolve({"idDelete":id})
			}
		}) 
	})
}

const update = (data)=> {
	return new Promise((resolve, reject) => {
		const post = new Post(data)
        const sql = "update posts set userId=?,content=?,contentUrl=?,likeCount=?,shareCount=?,commentCount=?,category=? where Id=?"
		db.query(sql,[
			post.userId,
			post.content,
			post.contentUrl,
			post.likeCount,
			post.shareCount,
			post.commentCount,
			post.category,
			post.id
		], (err,results)=>{
			if(err){
				reject(err)
			} else {
				resolve({"idUpdated":post.id})
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