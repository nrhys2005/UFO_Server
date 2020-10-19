const express = require('express');
const router = express.Router();
const models = require('../../models');
//store regist
router.post('/', (req, res) =>{
    console.log('<<store/regist>>');
    models.Menu.create({
        store_id : req.body.store_id,
        name : req.body.name,
        price: req.body.price
    }).then(() => { 
        res.send(true); 
    }).catch(()=>{
        res.send(false); 
    });
});

module.exports = router;