import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./mealSlice";

const savedPosts = JSON.parse(
    localStorage.getItem('custom_posts')
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: savedPosts,
        loading: false
    },
    reducers: {
        setPosts: (state, action) => {
            console.log(action.payload)
            state.posts = action.payload
        },
        setPostsLoading: (state, action) => {
            state.loading = action.payload
        },
        addPost: (state, action) => {
            state.posts.unshift(action.payload)
            localStorage.setItem('custom_posts', JSON.stringify(state.posts))
        }
    }
})

export const {setPostsLoading, setPosts, addPost} = postSlice.actions

export default postSlice.reducer