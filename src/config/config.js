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

// PostgreSQL
// const { Client } = require('pg') 

// const connection = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'social_network',
//     password: 'luyen123',
//     port: 5432, 
// })

// connection.connect((err,connection)=>{
//     if(err) console.log("Kết nối csdl không thành công !")
// })



module.exports= connection