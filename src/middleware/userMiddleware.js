const checkLogin = (req, res, next) => {
    const dangnhap = req.params.id
    if(dangnhap){
        next()
    }else{
        res.json("Bạn chưa đăng nhập")
    }
}
const checkAdmin = (req,res,next) => {
    const admin = req.params.token
    if(admin === 'ADMIN'){
        next()
    }else{
        res.json("Bạn không có quyền")
    }
}

module.exports = {
    checkLogin: checkLogin,
    checkAdmin: checkAdmin
}