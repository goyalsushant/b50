// function add(a: number, b: number) {
//     return a + b
// }

// add(parseInt('10'), 20)

// let varA: number | string

type OrderStatus = 'pending' | 'delivered' | 'cancelled' | 'placed'

type Order = {
    status: OrderStatus
    id: string
}

function updateOrderDetails(order: Order) {
    order.status = 'rejected'
}

// type Role = 'admin' | 'user'
// function access(role: Role) {
// 	if(role === 'admin') {
// 		return 'Full Access'
// 	}
// 	return 'Limited Access'
// }

// access('guest')