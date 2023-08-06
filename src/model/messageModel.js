function Message (data){
    this.id = data.id
    this.groupChatId = data.groupChatId
    this.userId = data.userId
    this.content = data.content
}
module.exports = Message