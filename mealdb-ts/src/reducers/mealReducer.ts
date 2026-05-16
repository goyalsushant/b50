import type { MealAction, MealState } from "../types/meal";

export const initialState: MealState = {
    meals: [],
    loading: false,
    error: null
}

export const mealReducer = (state: MealState, action: MealAction): MealState => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                loading: true,
                error: null
            }

        case "SUCCESS":
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