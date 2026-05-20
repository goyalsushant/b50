import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from './slices/mealSlice'
import { mealsApi } from "./apis/mealsApi";

export const store = configureStore({
    reducer: {
        meals: mealsReducer,
        [mealsApi.reducerPath]: mealsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mealsApi.middleware)
})