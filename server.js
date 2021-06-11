const express = require('express')
const app = express()
const path = require('path')
port = process.env.port || 3000
const myApp = require('./src/routes/App.router')

app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.set('view engine', 'ejs')
app.set('views', './src/views/appViews')
app.use('/myapp', myApp)



app.listen(port, ()=>{
    console.log(`server listen on ${port}`)
})