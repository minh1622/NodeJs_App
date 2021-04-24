'use strict';
const user_login = require('../models/user_login.model')
const jwt = require('jsonwebtoken')

exports.findAll = (req, res)=>{
    user_login.findAll((err, user_login)=>{
        if(err)
        console.log(err);
        else{
            console.log(user_login);
            res.send(user_login)
        }
    })
}

exports.login = (req, res, next) => {
    let loginInfo = req.body
    if(loginInfo.constructor === Object && Object.keys(loginInfo).length === 0){
        return res.status(400).send({ error:true, message: 'Invalid username or password' });
    }
    else {
        user_login.login(loginInfo, (err, token)=>{
            if(err)
            {
                return res.json({
                    value: false
                })
            }
            else
            {
                console.log(token)
                return res.json({
                    value: true,
                    token: token
                })
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