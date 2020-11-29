const express = require('express');
const router = express.Router();
var os = require('os');
//routing
// router.use('/user', require('./user/index.js'));
// router.use('/store', require('./store/index.js'));
// router.use('/menu', require('./menu/index.js'));

// 로드밸런싱 테스트용. / => 컨테이너 ID가 출력된다.
router.get('/', (req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>I'm ${os.hostname()}</h1>`);
})

router.use('/user', require('./user'));
router.use('/wallet', require('./wallet'));
router.use('/festival', require('./festival'));


module.exports = router;