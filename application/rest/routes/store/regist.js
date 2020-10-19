const express = require('express');
const router = express.Router();
const models = require('../../models');
//store regist
router.post('/', (req, res) =>{
    models.Store.create({
        name : req.body.name,
        img_url: req.body.img_url,
        desc: req.body.desc,
        latitude : req.body.latitude,
        longitude: req.body.longitude
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((err)=>{
        console.log(err);
        res.send(false); 
    });
});

module.exports = router;