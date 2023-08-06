const express = require("express")
const http = require("http")
const dotenv = require("dotenv")
const routerAdmin = require("./router/routeAdmin")
const routerUser = require("./router/routeUser")

const app = express()
const server = http.createServer(app)

app.use((req, res, next) =>{
	res.setHeader('Access-Control-Allow-Origin', "*")
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

const PORT = process.env.PORT || 5000

dotenv.config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/admin-api',routerAdmin)
app.use('/user-api',routerUser)

server.listen(PORT, () =>
    console.log(`App listening on port ${PORT}!`)
)