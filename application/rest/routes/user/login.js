const express = require('express');
const router = express.Router();
const models = require('../../models');

router.post('/', (req, res) =>{
    console.log('<<user/login>>');
    models.User.findOne({
        where: {
            email : req.body.email,
            pw : req.body.pw
        }
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
});
module.exports = router;