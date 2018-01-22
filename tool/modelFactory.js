const SequelizeAuto = require('sequelize-mysql-model');
const path = require('path');

const db = require('../config').db;

const dir = path.resolve(__dirname, '../model');
console.log(dir);

const auto = new SequelizeAuto(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql',
    port: db.port,
    directory: dir,
    additional: {
        timestamps: false
    },
    tables: ['t_topic', 't_user'],
    modelNameResolve: function(table_name) {
        if (table_name.indexOf('t_') !== -1) {
            return table_name.substring(2, 3).toUpperCase() + table_name.substring(3);
        } else {
            return table_name;
        }
    },
    fileNameResolve: function(table_name) {
        if (table_name.indexOf('t_') !== -1) {
            return table_name.substring(2, 3).toUpperCase() + table_name.substring(3) + 'Model';
        } else {
            return table_name;
        }
    }
});

auto.run(function(err) {
    if (err) throw err;
});
