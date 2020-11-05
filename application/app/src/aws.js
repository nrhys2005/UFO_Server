const AWS = require('aws-sdk')
const config = require('../../bin/config').aws.development
const sts = new AWS.STS()

AWS.config.update({
    accessKeyId: config.accesskeyid,
    secretAccessKey: config.secretaccesskey,
    region: config.region
})

AWS.config.credentials = new AWS.ChainableTemporaryCredentials({
    params: { RoleArn: 'arn:aws:iam::829454201921:role/role-ufo-s3' }
})

const s3 = new AWS.S3()

var aws = {}
aws.s3 = s3



module.exports = aws