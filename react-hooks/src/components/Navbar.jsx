import { useAuth } from "../hooks/useAuth"

function Navbar() {

    const { user, isAuthenticated, logout, login } = useAuth()

    return (
        <nav>
            {
                isAuthenticated ? (
                    <>
                        <span>Welcome, {user.name}</span>
                        <button onClick={logout}>Logout</button>
                    </>

                ) :
                    (
                        <>
                            <span>Please login</span>
                            <button onClick={login}>Login</button>
                        </>
                    )
            }
        </nav>
    )
}

export default Navbar