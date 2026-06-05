const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        if(req.method ==='GET') {}
        if(req.method ==='POST') {}
        if(req.method ==='PUT') {}
        if(req.method ==='PATCH') {}
        if(req.method ==='DELETE') {}
        res.end('Home page')
    }

    else if(req.url === '/user') {
        res.end('User Page')
    }

    else if(req.url === '/about') {
        res.end('About Page')
    }

    else {
        res.end('Page not found')
    }
})

server.listen(3000)