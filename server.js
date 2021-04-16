const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const user_login_router = require('./src/routes/user_login.route')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res, next)=>{
    res.send("HOME")
})

app.use('/api/v1/user', user_login_router)

const port = process.env.port || 3000
app.listen(port, ()=>{
    console.log(`server listen on port ${port}`)
})