'use strict';
const dbConn = require('../../config/db.config')
const mysql = require('mysql')
const jwt = require('jsonwebtoken')
var checkLogin = false
var user_login = function(user_login){
    this.username       = user_login.username,
    this.password       = user_login.password,
    this.user_role      = user_login.user_role 
}

user_login.findAll = (result) => {
    var a = dbConn.query("select * from user_login", (err, res) => {
        if(err)
        {
            result(err, null)
            console.log('find err')
        }
        else{
            result(null, res)
        }
    })
}

user_login.login = (loginInfo, result) => {
    dbConn.query(`SELECT * FROM user_login where username=${mysql.escape(loginInfo.username)} and password=${mysql.escape(loginInfo.password)}`, (err, res)=>{
        if(err || res.length == 0){
            console.log("query fail")
            return result(true)
        }
        else{
            let dataLogin = {_id: res[0].userId}
            let token = jwt.sign(dataLogin, 'loginToken')
            result(null, token)
        }
    })
}
user_login.changePassword = (newPassword, result) => {

}

user_login.register = (newUser, result) => {
    dbConn.query('insert into user_login set ?', newUser, (err, res) => {
        if(err)
        {
            result(err, null)
            return err
        }
        else {
            result(null, res.insertId)
        }
    })
}

module.exports = user_login;
