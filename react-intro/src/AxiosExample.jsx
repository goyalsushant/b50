// import { Axios } from "axios"
import axios from "axios"
import { useEffect, useState } from "react"

function AxiosExample() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // await axios.get('https://jsonplaceholder.typicode.com/posts')
        // fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.data)
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(response => setPosts(response.data))
        async function callApi() {
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // setPosts(response.data)
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: 'First Post',
                // body: 'Data sent via React Axios'
            })

            console.log(response)
        }
        callApi()
    }, [])
    console.log(posts)
    return (
        <>
            {
                posts.map(post => (
                    // {post}
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </>
    )
}

export default AxiosExample