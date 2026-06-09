const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Teacher = sequelize.define('Teacher', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specialization: {
        type: DataTypes.STRING,
    }
})

module.exports = Teacher