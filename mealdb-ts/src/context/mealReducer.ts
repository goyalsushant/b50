import type { MealAction, MealState } from "../types/meal"

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

        case 'SET_SELECTED_MEAL':
            return {
                ...state,
                selectedMeal: action.payload
            }

        case 'TOGGLE_THEME':
            return {
                ...state,
                darkMode: !state.darkMode
            }

        default:
            return state
    }
}