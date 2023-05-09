function User (id,username,password,full_name,email,avatar_url,interested_user){
    this.id = id
    this.username = username
    this.password = password
    this.full_name = full_name
    this.email = email
    this.avatar_url = avatar_url
    this.interested_user = interested_user
}
module.exports = User