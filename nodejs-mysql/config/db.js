const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSORD,
//     database: process.env.DB_NAME
// })

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// connection.connect((err) => {
//     if (err) {
//         console.log('Database connection failed')
//         console.log(err)
//         return
//     }
//     console.log('MySQL Connected')
// })

// module.exports = connection

module.exports = pool.promise()