const express = require('express');
const router = express.Router();
const models = require('../../models');
const fs = require('fs');
//store regist
router.post('/', (req, res) =>{
    image_path = "./img_store"+req.body.name
    models.Store.create({
        name : req.body.name,
        img_url: image_path,
        desc: req.body.desc,
        latitude : req.body.latitude,
        longitude: req.body.longitude
    }).then((result) => {
        fs.mkdirSync(image_path, { recursive: true })
        
        console.log(result);
        res.send(true);
    }).catch((err)=>{
        console.log(err);
        res.send(false); 
    });
});

module.exports = router;