const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'social_network'
})
connection.connect((err,connection)=>{
    if(err) console.log("Kết nối csdl không thành công !")
})
module.exports= connection