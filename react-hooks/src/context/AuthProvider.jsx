import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) setUser(JSON.parse(storedUser))
        setLoading(false)
    }, [])

    const login = (userData) => {
        setUser({
            name: 'Alex',
            email: 'alex@example.com'
        })
        localStorage.setItem('user', JSON.stringify({
            name: 'Alex',
            email: 'alex@example.com'
        }))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider