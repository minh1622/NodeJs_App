'use strict';
const dbConn = require('../../config/db.config')
var user_login = (user_login)=>{
    this.username       = user_login.username,
    this.password       = user_login.password,
    this.user_role      = user_login.user_role 
}

user_login.findAll = (result) => {
    dbConn.query("select * from user_login", (err, res)=>{
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
    dbConn.query("select * from user_login", (err, res)=>{
        if(err)
        {
            result(err, false)
        }
        else{
            let checkLogin
            let i = 0
            res.forEach(user => {
                if(loginInfo.username == user.username && loginInfo.password == user.password)
                {
                    checkLogin = {
                        check: true,
                        role: user.user_role
                    }
                    i++
                }
            });
            if(i==0)
            {
                check = false
            }
            result(null, checkLogin)
        }
    })
}

module.exports = user_login;
