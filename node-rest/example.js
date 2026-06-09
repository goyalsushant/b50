const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :body'))
app.use((err, req, res, next) => {
    res.status(500)
    res.json({
        success: 'false',
        message: 'Internal Server Error'
    })
})

app.get('/users', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Alex'
        }
    ])
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    res.json({
        id,
        name: 'John'
    })
})

app.post('/users', (req, res) => {
    const user = req.body

    res.status(201)
    res.json({
        message: 'User Created',
        user
    })
})

app.post('/users/:id', (req, res, next) => {
    try {
        const error = 'Failing try'
        next(error)
        // throw error
    }
    catch(error) {
        next(error)
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})