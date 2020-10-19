const express = require('express');
const router = express.Router();


//store routing
router.use('/regist', require('./regist'));

//menu_regist
router.use('/menu_regist', require('./menu_regist'));

module.exports = router;