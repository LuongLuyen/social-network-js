const express = require("express")
const http = require("http")
const dotenv = require("dotenv")
const cors = require("cors")
const routes = require("./router/route")

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
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/',routes)


server.listen(PORT, () =>
    console.log(`App listening on port ${PORT}!`)
)