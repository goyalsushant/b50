const dotenv = require('dotenv')
const express = require('express')
// const db = require('./config/db')
const sequelize = require('./config/database')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
const app = express()

app.use(express.json())

sequelize.authenticate()
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err))



app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/api/users', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})