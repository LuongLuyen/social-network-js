const db = require('../config/config')
const Film = require('../model/filmModel')

const find = ()=> {
	return new Promise((resolve, reject) => {
		// SELECT
		// 	u.fullName,
		// 	ui.avatarUrl,
		// 	f.title,
		// 	f.content,
		// 	f.contentUrl
		// FROM
		// 	users u
		// JOIN
		// 	userinfos ui ON u.id = ui.id
		// JOIN
		// 	films f ON u.id = f.userId

		const sql = "SELECT u.fullName, ui.avatarUrl, f.title, f.content, f.contentUrl FROM users u JOIN userinfos ui ON u.id = ui.id JOIN films f ON u.id = f.userId"
		db.query(sql,(err,results)=>{
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
}