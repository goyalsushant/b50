// Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.

// let n = 9
// let m = 2

// let sum = n + m

// if (sum % 2 == 0) {
//     console.log('odd')
// }
// else {
//     console.log('even')
// }

const userInput = ['0 9']
let str = userInput[0] // '0 9'
str = str.trim()
str = str.split(' ') // ['0', '9'] OR [0,9]
parseInt(str[0]) + parseInt(str[1])

// let num = 17
// if (num == 1) {
//     console.log('no')
// }

/**
 * i = 2 till i = 16
 * every time check if num is divisible by i
 * 
 * 1 iteration -> i = 2, num = 17, 17 % 2 = 1
 * 2 iteration -> i = 3, num = 17, 17 % 3 = 2
 * 3 iteration -> i = 4, num = 17, 17 % 4 = 1
 * 
 * Space Complexity = O(1)
 * Time Complexity = O(num)
 */
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log('no')
        return
    }
}
console.log('yes')

/**
 * 5 -> 2, 3 and 4
 * 9 -> 2,3,4,5,6,7,8 - 3
 * 11 -> 2,3,4,5,6,7,8,9,10 - 3 & 4
 * 16 -> 2,3,4,5,6,7,8,9,10,11,12,13,14,15 - 4
 * 20 -> sqrt = 4 & 5
 * 
 * 2,4,6,8,10,12,14,16,18,20
 * 3,6,9,12,15,18,21,24,27,30
 * 4,8,12,16,20,24,28,32,36,40
 * 5,10,15,20,25,30
 * 6,12
 * 
 * Space Complexity - O(1)
 * Time Complexity - O(sqrt(num))
 */
for(let i=2; i<= Math.sqrt(num); i++) {
    if(num % i == 0) 
        console.log('no')
}

console.log('yes')