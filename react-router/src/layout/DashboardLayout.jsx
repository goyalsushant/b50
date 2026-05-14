import { Link, Outlet } from "react-router-dom"

function DashboardLayout() {
    return (
        <div>
            <aside>
                <h3>Dashboard</h3>
                <ul>
                    <li><Link to={'/dashboard'}>Home</Link></li>
                    <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                </ul>
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout