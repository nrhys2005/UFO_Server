const express = require('express');
const router = express.Router();

var user = require('../../src/user/user.js');


router.post('/signin', (req, res) =>{
    user.signin(req,res);
});

router.post('/signup', (req, res) =>{
    user.signup(req,res);
});

router.get('/signup/check/:id', (req, res) => {
    user.check(req,res);
});

module.exports = router;