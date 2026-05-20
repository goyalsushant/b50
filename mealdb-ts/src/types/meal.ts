export interface Meal {
    idMeal: string
    strMeal: string
    strMealThumb: string
    strCategory: string
    strArea: string
    strInstructions: string
    strYoutube: string
}

export interface MealState {
    meals: Meal[]
    loading: boolean
    error: string | null
    selectedMeal?: Meal | null
    darkMode?: boolean
}

export type MealAction =
    | { type: 'START' }
    | { type: 'SUCCESS', payload: Meal[] }
    | { type: 'ERROR', payload: string }
    | { type: 'SET_SELECTED_MEAL', payload: Meal | null }
    | { type: 'TOGGLE_THEME' }