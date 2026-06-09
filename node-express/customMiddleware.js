const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

// function logger(req, res, next) {
//     console.log('Request Received')
//     next()
// }

function updateRequest(req, res, next) {
    // console.log('Inside Second Middleware')
    req.user = {
        id: 1,
        name: 'Alex'
    }

    res.status(201)
    next()
}

function validateRole(req, res, next) {
    req.role = 'ADMIN'
    if(!['ADMIN', 'MANAGER'].includes(req.role)) {
        res.status(403)
        res.send('You do not have sufficient privileges')
        return
    }

    next()
}

function routeSpecific(req, res, next) {
    console.log('Specific to about handler')
    next()
}

app.use(updateRequest)
app.use(validateRole)

app.get('/home', (req, res) => {
    console.log('Reached handler home')
    console.log(req.user)
    res.send('Response sent')
})


// app.use(logger)

app.get('/', (req, res) => {
    console.log('Reached handler')
    console.log(req.user)
    res.send('Response sent')
})

app.get('/about', routeSpecific, (req, res) => {
    console.log('Reached handler about')
    console.log(req.user)
    res.send('Response sent')
})

app.listen(3000, () => {
    console.log('Server running on PORT - 3000')
})