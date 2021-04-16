'use strict';
const user_login = require('../models/user_login.model')

exports.findAll = (req, res)=>{
    user_login.findAll((err, user_login)=>{
        if(err)
        console.log(err);
        else{
            console.log(user_login);
            return res.send(user_login)
        }
    })
}

exports.login = (req, res) => {
    let loginInfo = req.body
    if(loginInfo.constructor === Object && Object.keys(loginInfo).length === 0){
        return res.status(400).send({ error:true, message: 'Invalid username or password' });
    }
    else {
        user_login.login(loginInfo, (err, checkLogin)=>{
            if(err)
            {
                res.send("Da co loi xay ra! vui long thu lai!")
            }
            else{
                if(checkLogin == false)
                {
                    res.send("sai tai khoan hoac mat khau!")
                }
                else
                {
                    if(checkLogin.role === 1)
                    {
                        res.send("Ban dang nhap voi quyen admin")
                    }
                    else if(checkLogin.role === 2){
                        res.send("Ban dang nhap voi quyen user")
                    }
                }
            }
        })
    }
}

exports.register = (req, res) => {
    let newUser = new user_login(req.body)
    user_login.register(newUser, (err, res)=>{
        console.log(res)
        res.send("Register done!")
    })
}