//  Import express module into the application
const express = require('express')

// Create an object for express
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Create a route handle for GET request incoming on path as '/'
app.get('/', (req, res) => {
    // res.end('Hello Express')
    // validate user

    const autheticated = req.headers.authorization.split('.')[1]

    if (!autheticated) {
        return res.send('Not authorized')
    }
    res.send('Hello Express')
})

app.get('/about', (req, res) => {
    // res.end('Hello Express')
    // validate user
    const autheticated = req.headers.authorization.split('.')[1]

    if (!autheticated) {
        return res.send('Not authorized')
    }
    res.send('<h1>About Express</h1>')
})

app.get('/contact', (req, res) => {
    // res.end('Hello Express')
    // validate user
    const autheticated = req.headers.authorization

    if (!autheticated) {
        return res.send('Not authorized')
    }
    res.send('Contact Route')
})

app.post('/post', (req, res) => {
    res.send('Post data sent')
})

app.put('/post', (req, res) => {
    res.send('Put request received')
})

app.patch('/patch', (req, res) => {
    res.send('Patch request')
})

app.delete('/post', (req, res) => {
    res.send('Delete method received')
})

app.get('/json', (req, res) => {
    res.status(403)
    res.json({
        message: 'JSON response sent.'
    })
})

app.all('/handle', (req, res) => {
    res.json({
        message: 'I can accept all types of methods'
    })
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params.id)
})

app.get('/user/:id/orders/:orderId', (req, res) => {
    console.log(req.params)
    // res.send(req.params.id)
})

app.get('/products', (req, res) => {
    console.log(req.query)
    res.json({
        category: req.query.category,
        device: req.query.device,
        memory: req.query.memory
    })
})

app.post('/products', (req, res) => {
    console.log(req.headers)
    // res.send('Hello')
    res.json({
        ...req.body
    })
})

// Listening to the request coming over PORT 3000 and sending response as well
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})