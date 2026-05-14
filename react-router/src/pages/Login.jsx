import { useNavigate } from "react-router-dom"
import { authReducer, initialState } from "../auth/auth"
import { useReducer } from "react"

function Login({ dispatch }) {

    const navigate = useNavigate()

    // const [state, dispatch] = useReducer(authReducer, initialState)
    const handleLogin = () => {
        dispatch({
            type: 'LOGIN',
        })
        navigate('/dashboard', { replace: true })
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login