import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../store/slices/postSlice"

function BlogForm() {
    const dispatch = useDispatch()

    const { users } = useSelector(state => state.users)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!title || !body || !userId) return

        const selectedUser = users.find(user => user.id === Number(userId))

        const newPost = {
            id: Date.now(),
            title,
            body,
            userId: Number(userId),
            author: selectedUser.name
        }

        dispatch(addPost(newPost))

        setTitle('')
        setBody('')
        setUserId('')
    }

    return (
        <form className="blog-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Write Your Post..." value={body} onChange={(e) => setBody(e.target.value)} />
            <select value={userId} onChange={(e) => setUserId(e.target.value)}>
                <option value="">Select Author</option>
                {
                    users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))
                }
            </select>

            <button type="submit">Add Post</button>
        </form>
    )
}

export default BlogForm