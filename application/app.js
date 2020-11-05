const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database').sequelize;
const config = require('./bin/config').web.development

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', require('./routes'));

const port = config.port;
app.listen(port, () => {

  // console.log(`Running on http://${HOST}:${PORT}`);

  // DB 연결
  db.sync().then( () => {
    console.log("DB connect success!!");
  })
})


