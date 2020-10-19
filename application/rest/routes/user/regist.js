const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const models = require('../../models');

router.post('/', (req, res) =>{
    console.log('<<user/regist>>');
    models.User.create({
        email : req.body.email,
        pw: req.body.pw,
        name: req.body.name
    }).then(() => { 
        res.send(true); 
    }).catch(()=>{
        res.send(false); 
    });
});

router.get('/check/:id', (req, res) => {
    console.log('<<user/regist/check>>');
    models.User.findOne({
        where: { email: req.params.email }
    }).then(() => {
        res.send(true);
    }).catch(() => {
        res.send(false);
    });
});

module.exports = router;