'use strict';
const express = require('express')
const router = express.Router()


router.get('/AngleToRad', (req,res)=>{
    res.render('AngleToRad')
})
router.get('/billCircuit', (req, res)=>{
    res.render('billCircuit')
})
router.get('/drawFunc', (req,res)=>{
    res.render('drawFunc')
})
router.get('/dientich', (req,res)=>{
    res.render('dientich')
})
router.get('/thetich', (req,res)=>{
    res.render('thetich')
})
router.get('/giatribieuthuc', (req,res)=>{
    res.render('giatribieuthuc')
})
router.get('/dientichdatdai', (req,res)=>{
    res.render('dientichdatdai')
})
module.exports = router
