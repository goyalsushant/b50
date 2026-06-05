console.log('A')
console.log('B')
console.log('C')

// const promise = new Promise((resolve, reject) => {

//     reject('Promise Resolved')
// })

// console.log(promise)

// new Promise((resolve, reject) => {
//     resolve('Promise Resolved')
// })
// .then(data => console.log('then',data))
// .catch(err => console.log('err', err))
// .finally(() => console.log('It will execute every time'))

async function performTask() {
    try {
        const user = await getUserData(id)
        const orders = await getOrderData(user.id)
    }
    catch (err) {
        console.log(err)
    }
}
