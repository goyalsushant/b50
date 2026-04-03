let arr = [1, 2, 3, 4]

// for (let i = 0; i < 4; i++) {
//     console.log(arr[i])
// }
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let a = arr.forEach((item, index) => {
//     console.log(item + ' ' + index)
// })

// console.log(a)

// let a = arr.map((item) => item * 2)
// console.log(a)
// console.log(arr)

// const filterData = arr.filter(item => item % 2 == 0)
// console.log(filterData)
// console.log(arr)

// acc = accumulator
// const sum = arr.reduce((acc, item) => acc + item, 0)
// console.log(sum)

/**
 * 0 -> 1, acc=0, item = 1, acc = 0 + 1 = 1
 * 1 -> 2, acc=1, item = 2, acc = 1 + 2 = 3
 * 2 -> 3, acc = 3, item = 3, acc = 3 + 3 = 6
 * 3 -> 4, acc = 6, item = 4, acc = 6 + 4 = 10
 */

let numbers = [1, 2, 4, 5, 9, 10]
// const maxValue = numbers.reduce(
//     (acc, item) => {
//         if(item > acc) {
//             acc = item
//         }
//         return acc
//     }, numbers[0]
// )
// console.log(maxValue)

// const add = numbers.push(11)
// console.log(numbers, add)

// const remove = numbers.pop()
// console.log(numbers, remove)

// console.log(numbers.shift(), numbers)
// numbers.unshift(11)
// console.log(numbers)
// console.log(numbers.sort())
// [1,2,4,5,9,10]
// [1,10,2,4,5,9]
// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))
console.log(numbers.slice(2, 4))
console.log(numbers)

console.log(numbers.splice(2, 1))
console.log(numbers)