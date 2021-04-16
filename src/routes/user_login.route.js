'use strict';
const express = require('express')
const router = express.Router()
const user_login = require('../controllers/user_login.controller')

router.get('/', user_login.findAll)
router.post('/login', user_login.login)
router.post('/register', user_login.register)
module.exports = router