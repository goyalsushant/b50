import { configureStore } from "@reduxjs/toolkit";
import { mealsApi } from "./apis/mealsApi";
import mealsReducer from './slices/mealsSlice'

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    [mealsApi.reducerPath]: mealsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;