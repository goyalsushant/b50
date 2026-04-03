/**
 * function <function_name> (parameters) {
 *  ... code goes here ...
 * }
 * 
 * <function_name>(arguments)
 */
// function add(a, b) {
//     return a + b
// }

// console.log(add(5, 9))

/**
 * add ( a , b)
 * 
 * add(5,9)
 * a = 5
 * b = 9
 * 
 */

// Function Expression
// let add = function (a, b) {
//     return a + b
// }

// console.log(add(4, 5))

// function factorial(num) {
//     let result = 1
//     for(let i=1;i<=num;i++) {
//         result = result * i
//     }
//     console.log(result)
// }

// factorial(5)

// let factorialValue = 1

// function factorial(number) {
//     if (number <= 0) {
//         console.log('Execution Completed')
//         return
//     }
//     factorialValue = factorialValue * number
//     factorial(--number)
// }
// factorial(5)
// console.log(factorialValue)

function factorial(num) {
    if (num === 1) return 1

    return num * factorial(num - 1)
}

console.log(factorial(5))

/**
 * 1 step -> num = 5 return 5 * factorial(4) = 5 * 4 * 3 * 2 * 1
 * 2 step -> num = 4 return 4 * factorial(3) = 4 * 3 * 2 * 1
 * 3 step -> num = 3 return 3 * factprial(2) = 3 * 2 * 1
 * 4 step -> num = 2 return 2 * factorial(1) = 2 * 1
 * 5 step -> num = 1 return 1
 */