const express = require('express')
const app = express()
const path = require('path')
const myApp = require('./src/routes/App.router')

app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.set('view engine', 'ejs')
app.set('views', './src/views/appViews')
app.use('/myapp', myApp)
app.get('/', (req,res)=>{
    res.render('homepage')
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, ()=>{
    console.log(`server listen on ${port}`)
})