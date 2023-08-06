const Post = require('../dao/postDAO')

const getAllPost = () => {
    return new Promise((resolve, reject) => {
        try {
            const post = Post.find()
            resolve(post)
        } catch (err) {
            reject(err)
        }
    })
}
const createPost = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const post = Post.create(req.body)
            resolve(post)
        } catch (err) {
            reject(err)
        }
    })
}

const getByIdPost = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const post = Post.findById(req.params.id)
            resolve(post)
        } catch (err) {
            reject(err)
        }
    })
}

const deletePost = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const post = Post.destroy(req.body.id)
            resolve(post)
        } catch (err) {
            reject(err)
        }
    })
}
const updatePost = (req) => {
    return new Promise((resolve, reject) => {
        try {
            const post = Post.update(req.body)
            resolve(post)
        } catch (err) {
            reject(err)
        }
    })
}


module.exports = {
    getAllPost: getAllPost,
    createPost: createPost,
    getByIdPost: getByIdPost,
    deletePost: deletePost,
    updatePost: updatePost
}