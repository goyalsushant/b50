import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ProductState } from "../../types/types";
import { api } from "../../api/axios";

const initialState: ProductState = {
    products: [],
    loading: false
}

export const fetchProdcuts = createAsyncThunk('/products/fetch', async (query: string) => {
    const res = await api.get(`/products?${query}`)
    return res.data.products
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProdcuts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProdcuts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
    }
})

export default productSlice.reducer