import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../hooks/reduxHooks"

function AdminRoute({ children }: any) {
    const { user } = useAppSelector(state => state.auth)

    if (user?.role !== 'admin') {
        return <Navigate to={'/'} />
    }

    return children
}

export default AdminRoute