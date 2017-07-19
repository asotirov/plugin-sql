'use strict';
const Sequelize = require('sequelize');

module.exports = function (options, imports, register) {
    register(null, {
        sql: function (sqlOptions) {
            return new Sequelize(sqlOptions.sqlUrl, sqlOptions.sequelize);
        }
    });
};