const path = require('path')
const dotenv = require('dotenv')

var config = {}

dotenv.config({ path: path.join(__dirname, '.env') });
const env = process.env

web = {}
web.development = {}
web.development.port = env.PORT

db = {}
db.development = {}
db.development.username = env.DBUSERNAME
db.development.password = env.DBPASSWORD
db.development.database = env.DBDATABASE
db.development.host = env.DBHOST
db.development.dialect = env.DBDIALECT

aws = {}
aws.development = {}
aws.development.accesskeyid = env.AWSACCESSKEYID
aws.development.secretaccesskey = env.AWSSECRETACCESSKEY
aws.development.region = env.AWSREGION
aws.development.bucket = env.AWSBUCKET

config.web = web
config.db = db
config.aws = aws

module.exports = config