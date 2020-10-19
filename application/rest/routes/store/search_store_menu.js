const express = require('express');
const router = express.Router();
const models = require('../../models');
//store regist
router.get('/', (req, res) =>{
    console.log('<<store/menu_search>>');
    models.Menu.findAll({
        where: {
          store_id: req.params.store_id
        }
      }).then((result) => { 
        res.json({"result":"ok",result}); 
    }).catch(()=>{
        res.json({"result":"fail"}); 
    });
});

module.exports = router;