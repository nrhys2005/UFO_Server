const express = require('express');
const router = express.Router();



//user routing
router.use('/regist', require('./regist'));

//로그인 라우팅
router.use('/login',  require('./login'));


module.exports = router;