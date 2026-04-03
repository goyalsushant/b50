let result = 1
let num = 16
while (result <= num) {
    result = result * 2
}
/**
 * 1 iteration -> result = 1, num = 16 -> result = 2
 * 2 iteration -> result =2, num = 16 -> result = 2*2 = 4
 * 3 iteration -> result = 4, num = 16 -> result = 2*4 = 8
 * 4 iteratopn -> result = 8, num = 16 -> result = 2 * 8 = 16
 * 5 iteration -> result = 16, num = 16 -> result = 2 * 16 = 32
 * 6 iteration -> result = 32, num = 16 -> result = 32 while loop not executed.
 */
console.log(result)