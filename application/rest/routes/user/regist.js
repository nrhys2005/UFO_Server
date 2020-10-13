const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const { User } = require('../../models');

router.post('/', (req, res) =>{
    console.log('<<user/regist>>');
    User.create({
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
    User.findOne({
        where: { email: req.params.email }
    }).then(() => {
        res.send(true);
    }).catch(() => {
        res.send(false);
    });
});

module.exports = router;