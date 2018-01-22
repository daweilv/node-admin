const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const dbConfig = require('../config').db;
const modelPath = path.resolve(__dirname, '../model');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
    port: dbConfig.port,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true,
        paranoid: true,
        createdAt:'create_at',
        updatedAt:'update_at',
        deletedAt:'delete_at',
    }
});

sequelize.importModels = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    sequelize.BaseDao = {};
    fs
        .readdirSync(modelPath)
        .filter(file => {
            return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
        })
        .forEach(file => {
            let model = sequelize.import(path.join(modelPath, file));
            sequelize.BaseDao[model.name + 'Dao'] = model;
        });
};

module.exports = db = sequelize;
