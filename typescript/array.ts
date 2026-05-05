let array = [1, 2, 3, 4]

let arrayMix = [1, 'one']

// array.push('hello')

// array.push(5)

let array2: number[] = []
array2.push(1)


let strArray: string[] = ['A', 'B', 'C', 'D']

let boolArray: boolean[] = [true, false, false, true]

let mixArray: (number | string | boolean)[] = [1, '2', 3, true]

let arrArray: Array<string | number | boolean | object | null | undefined> = ['1', '2', '3', 2]
// Array<data_types>

let person: [string, number] = ['Jack', 26]

let product: [string, number | string, boolean] = ['iPhone', "70000", true]

let [userName, age] = person
console.log(userName)

let persons: readonly [string, number][] = [
    ['John', 23],
    ['Alex', 26],
    ['Jack', 28]
]