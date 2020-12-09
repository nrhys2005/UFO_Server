const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('../bin/config').aws.development
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', require('./routes'));

app.get('/awsCredential', (req, res) => {
    data = {
        accessKeyId: config.accesskeyid, 
        secretAccessKey: config.secretaccesskey,  
        region: config.region
    }

    res.json(data)
})

module.exports = app;