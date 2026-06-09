// For Sequelize ORM
const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 2,
            idle: 10000,
            acquire: 30000
        }
    }
)

module.exports = sequelize    
