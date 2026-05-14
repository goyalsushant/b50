import { useNavigate } from "react-router-dom"

function Contact() {

    const navigate = useNavigate()

    return (
        <>
            Welcome to the React Routing (Contact Page)

            <button onClick={() => navigate('/', {replace: true})}>Go to home page</button>
        </>
    )
}

export default Contact