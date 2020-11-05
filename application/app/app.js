const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', require('./routes'));

module.exports = app;