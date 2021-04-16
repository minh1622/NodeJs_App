'use strict';
const express = require('express')
const router = express.Router()
const role = require('../controllers/role.controller')

router.get('/', role.findAll)

module.exports = router