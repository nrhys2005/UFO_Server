'use strict';

const Sequelize = require('sequelize');
const config = require('../bin/config').db.development

const db = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.User = require('./user')(sequelize, Sequelize);
db.Store = require('./store')(sequelize, Sequelize);
db.Menu = require('./menu')(sequelize, Sequelize);
db.Festival = require('./festival')(sequelize, Sequelize);

// Store, Menu 일대 다 관계
// db.Store.hasMany(db.Menu, {
//   foreignKey: '_id',
//   onDelete: 'CASCADE'
// });
// db.Menu.belongsTo(db.Store, {
//   foreignKey: 'store_id',
//   onDelete: 'CASCADE'
// });

module.exports = db;
