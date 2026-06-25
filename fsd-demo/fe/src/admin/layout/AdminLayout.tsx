import { Link, Outlet } from "react-router-dom"

function AdminLayout() {
    return (
        <div className="flex min-h-screen">
            <aside className="w-60 bg-black text-white p-4">
                <h2 className="text-xl font-bold mb-4">Admin Panel</h2>

                <nav
                    className="space-y-2 flex flex-col gap-4"
                >
                    <Link to={'/admin'}>Dashboard</Link>
                    <Link to={'/admin/products'}>Products</Link>
                    <Link to={'/admin/orders'}>Orders</Link>
                    <Link to={'/admin/users'}>Users</Link>
                </nav>
            </aside>
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout