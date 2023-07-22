const postService = require('../service/postService')
const getCRUDAllPost = async (req, res) => {
    const data = await postService.getAllPost()
    return res.json(data)
}
const createCRUDPost = async (req, res) => {
    const data = await postService.createPost(req)
    return res.json(data)
}
const getByIdCRUDPost = async (req, res) => {
    const data = await postService.getByIdPost(req)
    return res.json(data)
}
const deleteCRUDPost = async (req, res) => {
    const data = await postService.deletePost(req)
    return res.json(data)
}
const updateCRUDPost = async (req, res) => {
    const data = await postService.updatePost(req)
    return res.json(data)
}
module.exports = {
    getCRUDAllPost: getCRUDAllPost,
    createCRUDPost: createCRUDPost,
    getByIdCRUDPost: getByIdCRUDPost,
    deleteCRUDPost: deleteCRUDPost,
    updateCRUDPost: updateCRUDPost
}