const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Class = sequelize.define('Class', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    className: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Class