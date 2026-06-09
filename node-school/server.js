const express = require('express')
const { sequelize } = require('./models')

const app = express()
app.use(express.json())

async function startServer() {
    try {
        await sequelize.authenticate()

        console.log('Database Connected')

        await sequelize.sync({
            alter: true
        })

        console.log('Tables Synced')

        app.listen(3000, () => {
            console.log('Server running on PORT 3000')
        })
    }
    catch (err) {
        console.log(err)
    }
}

startServer()