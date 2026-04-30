let array = [1, 2, 3, 4]

// array.push('hello')

// array.push(5)

let array2: number[] = []
array2.push(1)


let strArray: string[] = ['A', 'B', 'C', 'D']

let boolArray: boolean[] = [true, false, false, true]

let mixArray: (number | string)[] = [1, '2', 3]

let arrArray: Array<string | number | boolean | object | null | undefined> = ['1', '2', '3', 2]

let person: [string, number] = ['Jack', 26]

let product: [string, number | string, boolean] = ['iPhone', "70000", true]

let [userName, age] = person

let persons: readonly [string, number][] = [
    ['John', 23],
    ['Alex', 26],
    ['Jack', 28]
]

