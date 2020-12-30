const express = require('express');
const router = express.Router();
var session = require('express-session');
var redisClient = require('../../database/redis/index.js');
let RedisStore = require('connect-redis')(session)
var os = require('os');
const config = require('../../bin/config').redis.development

// 로드밸런싱 테스트용. / => 컨테이너 ID가 출력된다.
router.get('/', (req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>I'm ${os.hostname()}</h1>`);
});

router.use(session({
    store: new RedisStore({
        client: redisClient,
        host: config.host,
        port: config.port,
        //prefix : "session:",
        ttl : 260 //세션만료기한
    }),
    secret : config.secret,
    //cookie : { maxAge: 2592000000 },
    saveUninitialized: false,
    resave: false
}));


router.use('/user', require('./user'));
router.use('/wallet', require('./wallet'));
router.use('/festival', require('./festival'));


module.exports = router;