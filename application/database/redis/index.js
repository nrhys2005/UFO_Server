const config = require('../../bin/config').redis.development
const redis  = require('redis');

const redisClient  = redis.createClient(config.port, config.host); //연결

redisClient .auth(config.password); //인증
redisClient .on('error', (err) => {
  //에러 핸들링
  console.log('redis connection error !!!' + err)
});


module.exports = redisClient;