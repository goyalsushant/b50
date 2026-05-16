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
}

export type MealAction = { type: 'START' } | { type: 'SUCCESS', payload: Meal[] } | { type: 'ERROR', payload: string }