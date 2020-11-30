const express = require('express');
const router = express.Router();
var session = require('express-session');
var redis = require('./redis.js');

router.use(session({
    tore: new RedisStore({
        client: redis,
        host: 'localhost',
        port: 6379,
        prefix : "session:",
        db : 0,
        saveUninitialized: false,
        resave: false

    }),
    secret : 'UFO',
    cookie : { maxAge: 2592000000 }
}));
//routing
// router.use('/user', require('./user/index.js'));
// router.use('/store', require('./store/index.js'));
// router.use('/menu', require('./menu/index.js'));

router.use('/user', require('./user'));
router.use('/wallet', require('./wallet'));
router.use('/festival', require('./festival'));

module.exports = redisClient;
module.exports = router;