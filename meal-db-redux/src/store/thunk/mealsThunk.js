import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchMeals = createAsyncThunk(
    'meals/searchMeals',
    async (query) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const data = response.data
        return data.meals || []
    }
)