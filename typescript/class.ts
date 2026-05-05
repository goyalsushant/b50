class Person {
    public name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet (): string {
        // console.log(this)
        // console.log(`Hi, ${this.name}`)
        return `Hi ${this.name}`
    }
}

class Parent extends Person {
    show() {
        console.log(`Hi ${this.name}`)
    }
}

// Creating a person with specific name and age
// constructor will be called and assign a default value to the 
// specifics for that person object

/**
 * obj = {
 *  name: 'Alex'
 *  greet: () => {
 *  console.log(this.name)
 * }
 * }
 * 
 * obj = {
 *  name: 'Alex'
 *  greet: function () {
 *  console.log(this.name)
 * }
 * }
 */

// const person1 = new Person('Alex', 25)
// person1.name

const parent1 = new Parent('Jack', 40)
parent1.show()
