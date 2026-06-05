const fs = require('fs')

console.log('Start')
fs.readFile('data.txt', 'utf8',(err, data) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(data)
})

fs.writeFile('output.txt', 'Welcome to fs tutorial', (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('File created')
})

fs.appendFile('output.txt', '\nAdded new line programatically', (err) =>{
    if(err) {
        console.log(err)
        return
    }
    console.log('File updated successfully')
})

console.log('End')