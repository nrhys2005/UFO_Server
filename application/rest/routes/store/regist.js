const express = require('express');
const router = express.Router();
const models = require('../../models');
//store regist
router.post('/', (req, res) =>{
    console.log('<<store/regist>>');
    models.Store.create({
        name : req.body.name,
        latitude : req.body.latitude,
        longitude: req.body.longitude
    }).then(() => { 
        res.send(true); 
    }).catch(()=>{
        res.send(false); 
    });
});

module.exports = router;