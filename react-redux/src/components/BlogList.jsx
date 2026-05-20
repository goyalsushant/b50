import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPostsLoading, setPosts } from "../store/slices/postSlice"
import axios from "axios"
import { setUsers } from "../store/slices/userSlice"

function BlogList() {
    const dispatch = useDispatch()

    const { posts, loading } = useSelector(state => state.posts)

    const { users } = useSelector(state => state.users)

    useEffect(() => {
        fetchPosts()
        fetchUsers()
    }, [])

    const fetchPosts = async () => {
        dispatch(setPostsLoading(true))

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = response.data
        if (posts == null || posts.length == 0) {
            dispatch(setPosts(data))
        }

        dispatch(setPostsLoading(false))
    }

    const fetchUsers = async () => {
        dispatch(setPostsLoading(true))

        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = response.data

        dispatch(setUsers(data))

        dispatch(setPostsLoading(false))
    }

    const getAuthorName = (post) => {
        if (post.author) return post.author

        const user = users.find(user => user.id === post.userId)

        return user ? user.name : 'Unknown Author'
    }

    return (
        <div className="blog-list">
            <h2>Blog Posts</h2>

            {loading && <p>Loading Posts...</p>}

            {
                posts && posts.map(post => (
                    <div className="card" key={post.id}>
                        <h3>{post.title}</h3>

                        <small>By: {getAuthorName(post)}</small>

                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList