function Post (post){
    this.id = post.id
    this.userId = post.userId
    this.content = post.content
    this.contentUrl = post.contentUrl
    this.likeCount = post.likeCount
    this.shareCount = post.shareCount
    this.commentCount = post.commentCount
    this.category = post.category
}
module.exports = Post