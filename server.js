const express = require('express')
const app = express()
const path = require('path')
const myApp = require('./src/routes/App.router')

app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs')
app.set('views', './src/views/appViews')
app.use('/myapp', myApp)
app.get('/', (req,res)=>{
    res.render('homepage')
})

var server_port = process.env.PORT || 3000;
app.listen(server_port, ()=>{
    console.log(`server listen on ${server_port}`)
})