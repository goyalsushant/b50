const person = {
    name: 'Alice',
    age: 28,
    city: 'New Delhi',
    language: ['JS', 'Python', 'Java'],
    greet: function () {
        console.log(this.name)
    }
}

// for (const key in person) {
//     console.log(key + " " + person[key])
// }
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

person.greet()