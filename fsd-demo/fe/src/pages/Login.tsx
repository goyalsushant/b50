import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { useState } from "react"
import { loginUser } from "../store/slices/authSlice"

function Login() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { loading } = useAppSelector(state => state.auth)

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()

        const res: any = await dispatch(loginUser(form))

        if (res.payload.token) {
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-grayt-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow w-96 space-y-4"
            >
                <h2 className="text-2xl font-bold">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="input"

                />

                <button
                    disabled={loading}
                    className="w-full bg-black text-white py-2 rounded"
                >
                    {loading ? "Logging In..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login