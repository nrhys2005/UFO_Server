const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('index page');
});

//user routing
router.use('/user', require('./user/index'));

router.use('/store', require('./store/index'));
module.exports = router;