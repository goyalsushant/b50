import { useState } from "react"
import { api } from "../api/axios"
import { useAppSelector } from "../hooks/reduxHooks"

function Checkout() {

    const [form, setForm] = useState({})
    const { items } = useAppSelector(state => state.cart)

    console.log(items)

    const totalAmount = items.reduce(
        (acc, item) => acc + (item.price * item.quantity), 0
    )

    const handleChange = (e: any) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        api.post(`/orders`, {
            items,
            shippingAddress: form,
            totalAmount
        }, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhM2JkZDQzNWJjY2RjNWZjMDZmMmE5NCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MjMwODQxNCwiZXhwIjoxNzgyMzk0ODE0fQ.IEU4I7qlXaWeEZZUuW4ly3n1j7lHhtBCMRbIqtioGPU`
            }
        })
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-5 shadow rounded">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            <form className="space-y-3" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Full Name" name="fullname" onChange={handleChange} />
                <input type="text" className="input" placeholder="Address" name="address" onChange={handleChange} />
                <input type="text" className="input" placeholder="City" name="city" onChange={handleChange} />
                <input type="text" className="input" placeholder="Phone" name="phone" onChange={handleChange} />
                <select name="" id="" className="input">
                    <option>COD</option>
                    <option>Card</option>
                    <option>UPI</option>
                </select>

                <button className="w-full bg-black text-white py-2 rounded">Place Order</button>
            </form>
        </div>
    )
}

export default Checkout