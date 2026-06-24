import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"

function Navbar() {

    const { items } = useAppSelector(state => state.cart)

    return (
        <nav className="bg-black text-white px-6 py-3 flex justify-between">
            <Link to={'/'} className='font-bold text-xl'>Shop</Link>

            <div className="flex gap-5 items-center">
                <Link to='/'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/cart'>Cart {items.length}</Link>
                <Link to='/login' className="bg-white text-black px-3 py-1 rounded">Login</Link>
            </div>
        </nav>
    )

}

export default Navbar