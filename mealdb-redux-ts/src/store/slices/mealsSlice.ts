import { createSlice } from "@reduxjs/toolkit";

import { searchMeals } from "./mealsThunk";
import type { Meal } from "./mealTypes";


interface MealsState {
    meals: Meal[];
    loading: boolean;
    error: string | null;
}

const initialState: MealsState = {
    meals: [],
    loading: false,
    error: null,
};

const mealsSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchMeals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchMeals.fulfilled, (state, action) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(searchMeals.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch meals";
            });
    },
});

export default mealsSlice.reducer;