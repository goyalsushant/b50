// function addData(a, b) {
//     return a + b
// }

/**
 * function addData(a:any, b:any): any {
 *  return a+b
 * }
 */

// function greet(name: string) {
//     return 'Hello ' + name 
// }

// function greet(name = 'Guest') {
//     return 'Hello ' + name
// }

/**
 * name is of string type
 * return 'Hello ' + 'Guest' => 'Hello Guest'
 * parameter and return = string data type
 */


// function add(a: number, b: number) {
//     return a + b
// }

// type UserDetails = {
//     name: string,
//     mobile: number,
//     id: string
// }

// function getUserDetails(id: string): UserDetails {
//     userDataFromDB = {
//         name,
//         email,
//         id,
//         mobile,
//         address,
//         timestamp
//     }
//     return {
//         name:userDataFromDB[name],
//         id: userDataFromDB[id]
//         mobile: userDataFromDB[mobile]
//     }
// }

// const userDetails = getUserDetails('abcd@email.com')

const multiply = (a: number, b: number): number => {
    return a * b
}