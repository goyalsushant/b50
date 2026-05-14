import { Navigate } from "react-router-dom";
import { auth } from "../auth/Auth";

export default function Protected({ children, user }) {
    return (user ? children : <Navigate to={'/login'} replace />)
}
