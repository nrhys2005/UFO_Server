var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var router = require('./routes/index');
var sequelize = require('./models/index').sequelize;

const PORT = 8080;
const HOST = '0.0.0.0';//HOST를 localhost로 하니까 response를 보내지 못한다.

// DB 연결
sequelize.sync().then((res)=>{
  console.log("DB connect success!!");
}).catch(function(error){
  console.log(error);
});

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use('/img_store', express.static('img_store'));

app.use('/', router);



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

