'use strict';
const express = require('express')
const router = express.Router()


router.get('/AngleToRad', (req,res)=>{
    res.render('appViews/changeUnit/AngleToRad')
})
router.get('/billCircuit', (req, res)=>{
    res.render('appViews/tinhtoan/billCircuit')
})
router.get('/drawFunc', (req,res)=>{
    res.render('appViews/tinhtoan/drawFunc')
})
router.get('/dientich', (req,res)=>{
    res.render('appViews/tinhdientich/dientich')
})
router.get('/thetich', (req,res)=>{
    res.render('appViews/tinhdientich/thetich')
})
router.get('/giatribieuthuc', (req,res)=>{
    res.render('appViews/tinhtoan/giatribieuthuc')
})
router.get('/dientichdatdai', (req,res)=>{
    res.render('appViews/tinhdientich/dientichdatdai')
})
router.get('/caculator', (req,res)=>{
    res.render('appViews/tinhtoan/caculator')
})
router.get('/changeMoney', (req,res)=>{
    res.render('appViews/changeUnit/changeMoney')
})
router.get('/changeTemp', (req,res)=>{
    res.render('appViews/changeUnit/changeTemp')
})
router.get('/giavang', (req,res)=>{
    res.render('appViews/xemgia/giavang')
})
router.get('/changeImageColor', (req,res)=>{
    res.render('appViews/changeUnit/changeImageColor')
})
router.get('/tiendien-thue', (req,res)=>{
    res.render('appViews/tinhtoan/tiendien-thue')
})
module.exports = router
