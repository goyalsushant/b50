const http = require('http')
const axios = require('axios')

const server = http.createServer(async (request, response) => {
    response.writeHead(
        200,
        {
            'content-type': 'text/html'
        }
    )

    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    response.end(JSON.stringify(res.data))

    // response.end(`
    //     <h1> Welcome to Node.js Server Using Nodemon</h1>
    //     `)

    // console.log(response)

})

server.listen(3000)