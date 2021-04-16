'use strict';
const Role = require('../models/role.model')

exports.findAll = (req, res) => {
    Role.findAll( (err, Role) => {
        res.send(Role)
    })
}