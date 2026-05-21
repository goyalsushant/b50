import { createAsyncThunk } from "@reduxjs/toolkit";

import type { Meal } from "./mealTypes";
import axios from "axios";

interface MealResponse {
    meals: Meal[];
}

export const searchMeals = createAsyncThunk<
    Meal[],
    string
>(
    "meals/searchMeals",
    async (query) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data: MealResponse = response.data;
        return data.meals || [];
    }
);