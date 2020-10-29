const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('index page');
});

//routing
router.use('/user', require('./user/index'));
router.use('/store', require('./store/index'));
router.use('/menu', require('./menu/index'));


module.exports = router;