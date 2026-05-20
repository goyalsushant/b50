import { createSlice } from "@reduxjs/toolkit";
import { searchMeals } from "../thunk/mealsThunk";

const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchMeals.pending, (state) => {
                state.loading = true
            })
            .addCase(searchMeals.fulfilled, (state, action) => {
                state.loading = false
                state.meals = action.payload
            })
            .addCase(searchMeals.rejected, (state) => {
                state.loading = false
                state.error = 'Error fetching meals...'
            })
    }
})

export default mealSlice.reducer