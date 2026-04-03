//  Switch statements
// Example - Grading System
/**
 * 90+ - A
 * 80+ - B
 * 70+ - C
 * 60+ - D
 * 30+ - Pass
 */
// let marks = 74

// if(marks >= 90) {
//     console.log('Grade A')
// }
// else if(marks >= 80) {
//     console.log('Grade B')
// }
// else if(marks >= 70) {
//     console.log('Grade C')
// }
// else if(marks >= 60) {
//     console.log('Grade D')
// }
// else if(marks >= 30) {
//     console.log('Pass')
// }
// else {
//     console.log('Marks can not be disclosed')
// }

/**
 * 
 * value for the case is verified with the input in the switch statement.
 * 
 * switch(input) {
 *  case value:
 *      statement;
 *      break;
 *  case value1:
 *      statement;
 *      break;
 *  default:
 *      statement;
 * }
 */

// let marks = 92
// switch (true) { // switch (92) {}
//     // case 92: // case 92
//     //     console.log('90+ Achieved')
//     //     break;
//     case (marks >= 90): // case true
//         console.log('Grade A')
//         break
//     case (marks >= 80): // case true
//         console.log('Grade B')
//         break
//     case (marks >= 70): // case true
//         console.log('Grade C')
//         break
//     case (marks >= 30): // case true
//         console.log('Pass')
//         break
//     default:
//         console.log('Marks can not be disclosed')
// }

// let color = 'red'

// switch (true) {
//     case 'blue':
//         console.log('color blue')
//         break
//     case (color == 'green'):
//         console.log('color greeen')
//         break
//     case (color == 'red'): // case true:
//         console.log('color red')
//         break
//     default:
//         console.log('Not a valid color')
// }
// console.log('After switch')

let operator = 'subtraction'
let result = 0
let a = 5
let b = 2

switch (operator) {
    case 'addition':
        result = a + b
        break
    case 'subtraction':
        result = a - b
        break
    case 'multiplication':
        result = a * b
        break
    case 'division':
        result = a / b
        break
    default:
        console.log('Invalid operation')
}
console.log(result)