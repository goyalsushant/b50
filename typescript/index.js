let a = 2
console.log(typeof a)
a = 'hello'
console.log(typeof a)

a = {
    key: 'value'
}

console.log(typeof a)

if (typeof a == 'number') {
    console.log('Number found')
}
else if (typeof a == 'object') {
    console.log('Object found')
}

function firstFunction(a, b) {
    console.log(a, b)
}

firstFunction(10, 20)

// let arr = [1, 2, 3, 4]