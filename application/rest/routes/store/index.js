const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('store index page');
});

//store routing
router.use('/regist', require('./regist'));


module.exports = router;