const db = require('../config/config')
const Message = require('../model/messageModel')

const findMessByGroup = (id)=> {
	return new Promise((resolve, reject) => {
	// 	SELECT
	//  u.userName,
	// 	u.fullName,
	// 	ui.avatarUrl,
	// 	m.id,
	// 	m.content,
	// 	m.groupChatId
	// FROM
	// 	users u
	// JOIN
	// 	userinfos ui ON u.id = ui.id
	// JOIN
	// 	messages m ON u.id = m.userId
	// WHERE
	// 	m.groupChatId = 1
		const sql = "SELECT  u.userName, u.fullName, ui.avatarUrl, m.id, m.content, m.groupChatId FROM users u JOIN userinfos ui ON u.id = ui.id JOIN messages m ON u.id = m.userId WHERE m.groupChatId = ?"
		db.query(sql,(err,results)=>{
			db.query(sql,[id],(err,results)=>{
				if(err){
					reject(err)
				} else {
					resolve(results)
				}
			}) 
		}) 
	})
}


module.exports = {
	findMessByGroup: findMessByGroup,
}