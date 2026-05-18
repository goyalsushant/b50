import { useAuth } from "../hooks/useAuth";

function Profile() {
    const { user } = useAuth()
    console.log(user)
    return (

        <div>
            {
                user && <>
                    <h2>Profile:</h2>
                    <p>Email: {user.email}</p></>
            }

        </div>
    )
}

export default Profile