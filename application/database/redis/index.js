const config = require('../../bin/config').redis.development
const redis  = require('redis');

const client = redis.createClient(config.port, config.host); //연결

client.auth(config.password); //인증
client.on('error', (err) => {
  //에러 핸들링
  console.log('redis connection error !!!' + err)
});


module.exports = redisClient;