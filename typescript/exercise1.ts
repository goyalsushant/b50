/**
 * 1. Declare an array in TypeScript that stores a list of student names (strings).
 * 2. Add at least three student names to the array.
 * 3. Write a function that:
 *  3.1 Takes the array as input
 *  3.2 Returns a new array
 */

let students: string[] =  []
// let students: Array<string> = []

students.push('Jack', 'Alex', 'John')

function studentNames(students: string[]): string[] {
    const newArr: string[] = [...students]
    return newArr
}

studentNames(students)