'use strict';
const express = require('express')
const router = express.Router()
const user_login = require('../controllers/user_login.controller')

router.get('/', user_login.findAll)
//login
router.post('/login', user_login.login)
//register
router.post('/register', user_login.register)
// //thay doi mat khau
// router.put('/:id', user_login.update)
// //Xoa tai khoan
// router.delete('/:id', user_login.deleteAcc)
module.exports = router