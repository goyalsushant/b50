import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category, Meal } from "../slices/mealTypes";

interface MealResponse {
  meals: Meal[];
}

interface CategoryResponse {
  categories: Category[];
}

export const mealsApi = createApi({
  reducerPath: "mealsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),

  endpoints: (builder) => ({
    getMealById: builder.query<MealResponse, string>({
      query: (id) => `lookup.php?i=${id}`,
    }),

    getCategories: builder.query<CategoryResponse, void>({
      query: () => "categories.php",
    }),
  }),
});

export const {
  useGetMealByIdQuery,
  useGetCategoriesQuery,
} = mealsApi;