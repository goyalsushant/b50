import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { logout } from "../store/slices/authSlice"

function Navbar() {

    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.cart)
    const { user } = useAppSelector(state => state.auth)

    const totalItems = items.reduce(
        (total, item) => total + item.quantity, 0
    )

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className="bg-black text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to={'/'} className='font-bold text-2xl tracking-wide'>Shop</Link>

                <div className="flex gap-6 items-center">
                    <Link to='/' className="hover:text-gray-300 transition">Home</Link>
                    <Link to='/orders' className="hover:text-gray-300 transition">Orders</Link>
                    <Link to='/cart' className="relative hover:text-gray-300 transition">
                        Cart
                        {
                            items.length > 0 && (
                                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 flex items-center justify-center rounded-full px-1">
                                    {totalItems}
                                </span>
                            )
                        }
                    </Link>
                    {
                        user && user.role === 'admin' && (
                            <Link to='/admin' className="hover:text-gray-300 transition">Admin Panel</Link>
                        )
                    }
                    {
                        user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-300">
                                    Hi, {user.name}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm font-medium transition"
                                >
                                    Logout
                                </button>
                            </div>
                        )
                            : (
                                <Link
                                    to='/login'
                                    className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                                >
                                    Login</Link>
                            )
                    }
                </div>
            </div>
        </nav>
    )

}

export default Navbar