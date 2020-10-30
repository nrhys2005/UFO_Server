const express = require('express');
const router = express.Router();


//routing
router.use('/user', require('./user/index.js'));
router.use('/store', require('./store/index.js'));
router.use('/menu', require('./menu/index.js'));


module.exports = router;