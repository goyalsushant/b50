function Dashboard() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded">
                    <h3>Total Sales</h3>
                    <p className="text-xl font-bold">100000</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h3>Orders</h3>
                    <p className="text-xl font-bold">320</p>

                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h3>Users</h3>
                    <p className="text-xl font-bold">150</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard