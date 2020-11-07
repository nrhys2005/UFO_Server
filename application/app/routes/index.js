const express = require('express');
const router = express.Router();

//routing
// router.use('/user', require('./user/index.js'));
// router.use('/store', require('./store/index.js'));
// router.use('/menu', require('./menu/index.js'));

router.use('/user', require('./user'))
router.use('/store', require('./store'))
router.use('/menu', require('./menu'))
router.use('/wallet', require('./wallet'))


module.exports = router;