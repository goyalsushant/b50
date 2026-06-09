const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const errorHandler = require('./middleware/errorHandler')

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(errorHandler)

app.use('/api/users', userRoutes)

app.listen(3000, () => {
    console.log('Server Running on PORT 3000')
})