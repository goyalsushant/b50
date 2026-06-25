import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../../types/types";
import { api } from "../../api/axios";

const initialState: AuthState = {
    user: null,
    loading: false
}

export const loginUser = createAsyncThunk('/auth/login', async (data: { email: string, password: string }) => {
    const res = await api.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    console.log('user', res.data)
    return res.data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer