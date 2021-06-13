'use strict';
const express = require('express')
const router = express.Router()

const views = __dirname + '../../views/appViews/'

router.get('/AngleToRad', (req,res)=>{
    res.render(views + 'AngleToRad')
})
router.get('/billCircuit', (req, res)=>{
    res.render(views + 'billCircuit')
})
router.get('/drawFunc', (req,res)=>{
    res.render(views + 'drawFunc')
})
router.get('/dientich', (req,res)=>{
    res.render(views + 'dientich')
})
module.exports = router
