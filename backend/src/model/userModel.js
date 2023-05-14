function User (user){
    this.id = user.id
    this.username = user.username
    this.password = user.password
    this.full_name = user.full_name
    this.email = user.email
    this.study_at = user.study_at
    this.working_at = user.working_at
    this.other_info = user.other_info
    this.date_of_birth = user.date_of_birth
    this.avatar_url = user.avatar_url
}
module.exports = User