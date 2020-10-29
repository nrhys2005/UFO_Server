const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const models = require('../../models');

router.post('/', (req, res) =>{
    models.User.create({
        email : req.body.email,
        pw: req.body.pw,
        name: req.body.name
    }).then((result) => { 
        console.log(result);
        res.send(true); 
    }).catch((error)=>{
        console.log(error);
        res.send(false); 
    });
});

router.get('/check/:id', (req, res) => {
    models.User.findOne({
        where: { email: req.params.email }
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((error) => {
        console.log(error);
        res.send(false);
    });
});

module.exports = router;