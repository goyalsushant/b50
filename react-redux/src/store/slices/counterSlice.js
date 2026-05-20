import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByCount: (state, action) => {
            state.value += action.payload
        },
        decrementByCount: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const { increment, decrement, incrementByCount, decrementByCount } = counterSlice.actions

export default counterSlice.reducer