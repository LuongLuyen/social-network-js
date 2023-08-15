const express = require("express")
const http = require("http")
const path = require("path")
const dotenv = require("dotenv")
const routerAdmin = require("./router/routeAdmin")
const routerUser = require("./router/routeUser")
const routerFilm = require("./router/routeFilm")

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)

app.use((req, res, next) =>{
	res.setHeader('Access-Control-Allow-Origin', "*")
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/admin-api', routerAdmin)
app.use('/user-api', routerUser)
app.use('/film-api', routerFilm)
app.use('/', (req,res)=> {res.send(`<h1>App listening on port ${PORT}!</h1>`)})

server.listen(PORT, () =>
    console.log(`App listening on port ${PORT}!`)
)