// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit"

const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        loading: false,
        error: null
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setMeals: (state, action) => {
            state.meals = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {setError, setLoading, setMeals} = mealSlice.actions

export default mealSlice.reducer