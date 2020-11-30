const path = require('path')
const dotenv = require('dotenv')

var config = {}

dotenv.config({ path: path.join(__dirname, '.env') });
const env = process.env

web = {}
web.development = {}
web.development.port = env.PORT
web.development.host = env.HOST

db = {}
db.development = {}
db.development.username = env.DBUSERNAME
db.development.password = env.DBPASSWORD
db.development.database = env.DBDATABASE
db.development.host = env.DBHOST
db.development.port = env.DBPORT
db.development.dialect = env.DBDIALECT

redis = {}
redis.development = {}
redis.development.host = env.REDISHOST
redis.development.port = env.REDISPORT
redis.development.password = env.REDISPASSWORD
redis.development.secret = env.REDISSECRET

aws = {}
aws.development = {}
aws.development.accesskeyid = env.AWSACCESSKEYID
aws.development.secretaccesskey = env.AWSSECRETACCESSKEY
aws.development.region = env.AWSREGION
aws.development.bucket = env.AWSBUCKET

config.web = web
config.db = db
config.aws = aws
config.redis = redis

module.exports = config