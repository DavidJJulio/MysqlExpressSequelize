const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Pokemon = sequelize.define('pokemon', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    elemento: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = Pokemon