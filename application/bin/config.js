var config = {}

db = {}
db.development = {}
db.development.username = "root"
db.development.password = ""
db.development.database = "knucoin"
db.development.host = "localhost"
db.development.dialect = "mysql"

config.db = db

module.exports = config