// let username: string = 'Alex'
// let age: number = 25
// // let isWorking: boolean = true

// // function tsFunction(a: string, b: number) {
// //     console.log(a, b)
// //     // return
// // }

// // tsFunction('10', 20)

// // username = 10

// type User = {
//     name: string
//     age: number
// }

// let user = {
//     name: 'Alex',
//     age: 25
// }

// // // Can i use reference from user object to create other similar objects?
// let user2: User = {
//     name: '',
//     age: 1
// }

// // With type safety, we have a defined structure of User
// // Else we have to consider possibilities of user being null, string, or even name is missing or not?
// function printUserDetails(user: User) {
//     console.log(user.age)
// }

// function multiply(a: number, b: number) {
//     return a * b
// }

// multiply(5, 2)


// let a = true
// // a = 10

// let variable: object
// variable = [1,2,3,4]
// variable = 'string'

// // Creating a variable as an empty string

type User = {
    age: number
    name: string
}

type ApiResponse = {
    success: boolean
    data: {
        id: number
        name: string
        price: {
            mrp: number
            discount: number
            cost: number
        }
        // May contain product details inside product key
        // product can be undefined
        product?: {
            name: string
            description: string
        }
    }
}

// function handle(response: ApiResponse) {
//     console.log(response.data.price)
// }

// let user: 

function userData(user: User | null) {
    console.log(user?.age, user?.name)
}

let a: number | string | object | boolean | null | undefined

function secondHandler(response: ApiResponse) {
    console.log(response.data.product?.name)
}

secondHandler({
    success: true,
    data: {
        id: 1,
        name: 'data 1',
        price: {
            mrp: 50,
            cost: 30,
            discount: 20
        }
    }
}
)