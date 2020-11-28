const express = require('express');
const router = express.Router();
var session = require('express-session');

router.use(session({
    secret: 'session_secret!',
    resave: false,
    saveUninitialized: true,
}));
//routing
// router.use('/user', require('./user/index.js'));
// router.use('/store', require('./store/index.js'));
// router.use('/menu', require('./menu/index.js'));

router.use('/user', require('./user'));
router.use('/wallet', require('./wallet'));
router.use('/festival', require('./festival'));


module.exports = router;