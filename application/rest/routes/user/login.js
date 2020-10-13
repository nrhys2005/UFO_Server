const express = require('express');
const router = express.Router();
const { User } = require('../../models');

router.post('/', (req, res) =>{
    console.log('<<user/login>>');
    User.findOne({
        where: {
            email : req.body.email,
            pw : req.body.pw
        }
    }).then(() => {
        res.send(true);
    }).catch(() => {
        res.send(false);
    });
});
module.exports = router;