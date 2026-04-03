// You are given an array of non-negative integers representing height of walls at index i as Ai and the width of each block is 1.
// Compute how much air can be encapsulated between the walls of chamber.

// element value is greater equal to 0
let arr = [3,7,5,1,7,9,6,8,10]
// let arr = [7,4,9]

/**
 * height, left max, right max, min (left and right), trap value
 * 3       3         8          3                     3-3=0
 * 7       7         8          7                     7-7=0
 * 5       7         8          7                     7-5=2
 * 1       7         8          7                     7-1=6
 * 7       7         8          7                     7-7=0
 * 9       9         8          8                     8-9= -1
 * 6       9         8          8                     8-6=2
 * 8       9         8          8                     8-8=0
 */

let left = 0
let right = arr.length - 1
let leftMax = 0
let rightMax = 0
let trapValue = 0
// [3,7,5,1,7,9,6,8,10]
while(left < right) {
    if(arr[left] < arr[right]) {
        if(arr[left] >= leftMax) {
            leftMax = arr[left]
        }
        else {
            trapValue += leftMax - arr[left]
        }
        left++
    }
    else {
        if(arr[right] >= rightMax) {
            rightMax = arr[right]
        }
        else {
            trapValue += rightMax - arr[right]
        }
        right--
    }
}

console.log(trapValue)