const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Enrollments = sequelize.define('Enrollments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    enrollmentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

module.exports = Enrollments