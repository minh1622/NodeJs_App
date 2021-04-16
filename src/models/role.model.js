'use strict';
const dbConn = require('../../config/db.config')
var Role = function(role){
    this.roleId = role.roleID,
    this.role_name = role.role_name
}

Role.findAll = (result) => {
    dbConn.query('select * from role', (err, res) => {
        if(err)
        {
            return err;
        }
        else {
            result(null, res)
        }
    })
}

module.exports = Role