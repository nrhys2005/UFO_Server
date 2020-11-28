const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

app.use(cookieParser())
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', require('./routes'));

module.exports = app;