'use strict';
const dbConn = require('../../config/db.config')
var Role = (role)=>{
    this.roleId = role.roleID,
    this.role_name = role.role_name
}



module.exports = Role