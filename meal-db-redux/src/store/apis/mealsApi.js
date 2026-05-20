import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
    reducerPath: 'mealsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.themealdb.com/api/json/v1/1/'
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.php'
        }),
        getMealsById: builder.query({
            query: (id) => `lookup.php?i=53220`
        })
    })
})

export const { useGetCategoriesQuery, useGetMealsByIdQuery } = mealsApi