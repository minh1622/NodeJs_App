const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const user_login_router = require('./src/routes/user_login.route')
const role_router = require('./src/routes/role.route')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get("/", (req, res, next)=>{
    res.send("HOME")
})

app.use('/api/v1/user', user_login_router)
app.use('/api/v1/role', role_router)

const port = process.env.port || 3000
app.listen(port, ()=>{
    console.log(`server listen on port ${port}`)
})