const path = require('path')

const file = '/files/data.txt'

console.log(path.basename(file))
console.log(path.dirname(file))
console.log(path.extname(file))

console.log(__dirname)

const fullPath = path.join(__dirname, file)

console.log(fullPath)