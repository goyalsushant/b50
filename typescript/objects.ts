// const obj = {
//     name: 'ALex',
//     age: 26
// }

// type UserInfo = {
//     name: string
//     age: number
//     email: string
// }

// interface UserInfo {
//     name: string
//     age: number
//     email: string
//     mobile?: number
// }

// const user: UserInfo = {
//     name: 'Alex',
//     age: 26,
//     email: 'alex@mail.com'
// }

// const anotherUser: UserInfo = {
//     name: 'Jack',
//     age: 29,
//     email: 'jack@mail.com',
//     mobile: 777777
// }

// type UserInfo = {
//     readonly name: string,
//     address: {
//         city: string
//         pincode: number
//         state: string
//         country: string
//     }
//     mobile: number
// }

// type A = {
//     name: string
// }

// type B = {
//     age: number
// }

// type UserInfoType = A & B

// let user: UserInfoType = {
//     name: 'Jack',
//     age: 24
// }


// interface UserInfo {
//     name: string
//     age: number
//     address: {
//         city: string
//         pincode: number
//         state: string
//         country: string
//     }
//     mobile: number
// }

// interface Admin extends UserInfo {
//     role: string
// }


// type UserInfo = {
//     name: string
//     age: number
//     address: {
//         city: string
//         pincode: number
//         state: string
//         country: string
//     }
//     mobile: number
// }

// type Admin = UserInfo & {
//     role: string
// }

// let admin: Admin = {
//     role: 'admin',
//     name: 'Alex',
//     age: 26,
//     address: {
//         city: 'Delhi',
//         pincode: 1000001,
//         state: 'Delhi',
//         country: 'India'
//     },
//     mobile: 1111111
// }

// interface UserInfo {
//     name: string
// }

// interface UserInfo {
//     age: number
//     // name: boolean This is invalid as we can not change the type in subsequent type declarations
// }

// type UserInfo = { name: string }

// let user: UserInfo = {
//     name: 'John',
//     age: 26
// }

// interface UserInfo {
//     address: {
//         state: string
//         country: string
//     } | null
// }

// type UserInfo = {
//     address: {
//         state: string
//         country: string
//     } | null
// }

// let user: UserInfo = {
//     address : null
// }