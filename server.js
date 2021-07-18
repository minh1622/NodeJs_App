const express = require('express')
const app = express()
const path = require('path');
require('app-module-path').addPath(path.join(__dirname, '../'));
const myApp = require('./src/routes/App.router')

app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs')
app.use('/myapp', myApp)
app.get('/', (req,res)=>{
    res.render('appViews/homepage')
})

var server_port = process.env.PORT || 3000;
app.listen(server_port, ()=>{
    console.log(`server listen on ${server_port}`)
})