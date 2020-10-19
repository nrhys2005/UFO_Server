const express = require('express');
const router = express.Router();
const models = require('../../models');
//store regist
router.get('/', (req, res) =>{
    console.log('<<store/search_all>>');
    models.Store.findAll({}).then((result) => { 
        res.json({"result":"ok",result}); 
    }).catch(()=>{
        res.json({"result":"fail"}); 
    });
});

module.exports = router;