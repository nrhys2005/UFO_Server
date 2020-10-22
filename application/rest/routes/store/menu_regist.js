const express = require('express');
const router = express.Router();
const models = require('../../models');
//store regist
router.post('/', (req, res) =>{
    console.log('<<store/regist>>');
    image_path = ""
    models.Menu.findOne({
        where: {
          id: req.body.store_id
        }
    }).then((result) => {
        image_path = "./img_store"+result.name
    }).catch(()=>{
        res.json({"result" : 'fail'}); 
    });
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