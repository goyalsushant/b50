/**
 * For loop
 * for(initializer, limit, incremental/decremental condition) {
 *      ... code goes here ...
 * }
 */
// let arr = [1,2,3,4,5]

//  First Iteration -> 1
// Second Iteration -> 2

// for(let i = 0; i < 5; i++) {
//     console.log(arr[i])
// }


// for(let i = 4; i >= 0; i--) {
//     console.log(arr[i])
// }

// let sum = 0
// for(let i = 1; i <=1000; i++) {
//     sum = sum + i
// }

// console.log(sum)
// let i = 0
// console.log(i)
// console.log(i++) // incrementing the value after execution
// console.log(i)
// console.log(++i) // incrementing the value before execution
// console.log(i)

// While Loop
/**
 * while(condition) {
 *  ... code goes here ...
 * }
 */
// let i = 0
// let sum = 0
// while (i <= 1000) {
//     sum = sum + i
//     // i = i+1
//     console.log('inside while')
// }
// console.log(sum)

// for (let i = 0; i < 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// for (let i=0; i<=20; i = i+2) {
//     console.log(i)
// } 

// Do - While Loop
/**
 * do {
 *  ... code goes here ...
 * }
 * while(condition)
 */
// let i = 0
// let sum = 0
// do {
//     // console.log(i)
//     sum = sum + i
//     i++
// }
// while (i <= 1000)

// console.log(sum)

// Print multiples of 2 till 10 iterations

// for (let i = 1; i <= 10; i++) {
//     console.log("2 x " + i + " = " + 2 * i)
// }

// Print index of first 1 in the array
let arr = [0, 2, 3, 4, 1, 2, 1, 7, 8]
for (let i = 0; i < 9; i++) {
    if (arr[i] == 1) {
        console.log('result ', i)
        break
    }
    console.log(i)
}
// i = 0, arr[0] = 0
//  i=1, arr[1] = 2
// i=2, arr[2] = 3
// i=3, arr[3] = 4
// i=4, arr[4] = 1
