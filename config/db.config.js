'use strict';
const mysql = require("mysql")
var dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'anhmaiyeuem1A',
    database : 'server_login_test'
});

dbConn.connect((err)=>{
    if(err) throw err
    console.log("Connected to database server_login_test");
})
module.exports = dbConn;