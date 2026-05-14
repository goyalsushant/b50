import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function UserSearch() {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')

    const debounced = useDebounce(query, 3000)

    useEffect(() => {
        async function fetchUsers() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }

        fetchUsers()
    }, [])

    // do something
    const filteredUsers = useMemo(() => {
        return users.filter(user => user.name.toLowerCase().includes(debounced.toLowerCase()))
    }, [users, debounced])

    return (
        <>
            <h2>User Search</h2>

            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />

            {
                // display the filtered users
                filteredUsers.map(user => (
                    <div key={user.id}>
                        {user.name}
                    </div>
                ))
            }
        </>
    )
}

export default UserSearch