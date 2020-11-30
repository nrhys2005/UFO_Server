const config = require('../../bin/config').redis.development
const redis  = require('redis');
var os = require('os');

const client = redis.createClient(config.port, config.host); //연결

client.auth(config.password); //인증
client.on('error', (err) => {
  //에러 핸들링
  console.log('redis connection error !!!' + err)
});


function set_cache(req, res){

    var key = req.body.key;
    var value = req.body.value;

    // value 로 json전체를 저장 하려는 경우
    // 객체 그대로 넣으면 사용이 불편해서 string으로 변환작업
    // var value = JSON.stringify(req.body.value);


    //  key, value, 'EX'or'PX', time(s)
    // EX or PX 가 없으면 데이터 저장 시간을 지정할 수 없다.
    client.set(key, value,  'EX', 10,  (err, msg) => {
        if(err){
            console.log(err);
            res.send("error"+err);
            return;
        }
        console.log('caching ' + msg) //chcing OK.
        res.send("OK");
    });

}
  //데이터 보관은 초 단위로 설정하며, 설정한 시간이 넘으면 자동으로 파기
  
//키 값으로 데이터 불러오기
function get_cache(req, res){
    
    var key = req.params.key;

    client.get(key, (err, result) => {
        if(err){
            console.log(err);
            res.send("error"+err);
            return;
        }
        console.log(result);
        var data = JSON.parse(JSON.stringify(result));
        // res.status(200).json(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1>I'm ${os.hostname()}</h1><br><h2>And cache is ${data}</h2>`);
    });

}

module.exports={
    set_cache,
    get_cache
};