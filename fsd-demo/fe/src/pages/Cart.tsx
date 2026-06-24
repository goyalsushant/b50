import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks/reduxHooks"

function Cart() {

    const { items } = useAppSelector(state => state.cart)

    const total = items.reduce(
        (acc, item) => acc + (item.price * item.quantity), 0
    )

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Cart</h1>

            {
                items.length === 0 ?
                    (
                        <p>Your Cart is empty</p>
                    )
                    : (
                        <div className="space-y-3">
                            {items.map((item) => (
                                <div
                                    className="flex justify-between bg-white p-3 shadow rounded"
                                    key={item.productId}
                                >
                                    <div>
                                        {/* <img /> */}
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-gray-500">{item.quantity}</p>
                                        <p className="font-bold">{item.price}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="text-right text-xl font-bold"> Total: {total}</div>

                            <Link to={'/checkout'} className="inline-block bg-black text-white px-4 py-2 rounded">Checkout</Link>
                        </div>
                    )
            }
        </>
    )
}

export default Cart