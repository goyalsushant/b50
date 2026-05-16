export const initialState = {
    meals: [],
    loading: false,
    error: null
}

export const mealReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                loading: true,
                error: null
            }

        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                meals: action.payload
            }

        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}