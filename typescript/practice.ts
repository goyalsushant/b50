class BankAccount {
    balance: number
    name: string
    accNumber: number | string

    constructor(balance = 0, name: string, accNumber: number | string) {
        this.balance = balance
        this.accNumber = accNumber
        this.name = name
    }

    deposit(amount: number): void {
        if (amount <= 0) console.log('Amount can not be used as a deposit')
        else {
            this.balance += amount
        }
    }

    withdraw(amount: number): void {
        if (amount <= 0) console.log('Amount can not be used as a withdrawal amount')
        else if (amount > this.balance) {
            console.log('Amount is greater than balance')
        }
        else {
            this.balance -= amount
        }
    }

    getBalance(): number {
        return this.balance
    }
}

const acc1 = new BankAccount(0, 'Alex', 123)
acc1.deposit(5000)
acc1.withdraw(2000)
console.log(acc1.name, acc1.getBalance())

const acc2 = new BankAccount(1000, 'John', 12345)
acc2.deposit(1000)
acc2.withdraw(2000)
console.log(acc2.name, acc2.getBalance())


const acc3 = new BankAccount(0, 'Jack', 123456)
acc3.deposit(3000)
acc3.withdraw(6000)
console.log(acc3.name, acc3.getBalance())
