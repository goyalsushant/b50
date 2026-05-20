import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import mealReducer from './slices/mealSlice'
import postReducer from './slices/postSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        // counter: counterReducer
        counter: counterReducer,
        meals: mealReducer,
        posts: postReducer,
        users: userReducer
    }
})