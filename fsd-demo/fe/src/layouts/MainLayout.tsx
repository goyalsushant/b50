import Navbar from "../components/Navbar"

function MainLayout({ children }: any) {
    return (
        <div className="">
            <Navbar />
            <div className="max-w-6xl mx-auto p-4">{children}</div>
        </div>
    )
}

export default MainLayout