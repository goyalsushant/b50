import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* <div className="max-w-6xl mx-auto p-4">{children}</div> */}
            <div className="max-w-6xl mx-auto p-4 container">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout