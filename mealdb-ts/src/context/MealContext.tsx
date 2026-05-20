import React, { createContext, useEffect, useReducer, useState, type ReactNode } from "react"
import type { Meal, MealAction, MealState } from "../types/meal"
import { mealReducer } from "./mealReducer"
import axios from "axios"

interface ContextType extends MealState {
    searchMeals: (
        text: string
    ) => Promise<void>

    selectMeal: (
        meal: Meal | null
    ) => void

    toggleTheme: () => void
}

interface ProviderProps {
    children: ReactNode
}

const initialState: MealState = {
    meals: [],
    loading: false,
    error: null,
    selectedMeal: null,
    darkMode: JSON.parse(localStorage.getItem('darkMode') || false)
}

export const MealContext = createContext<ContextType>({} as ContextType)

export const MealProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer<React.Reducer<MealState, MealAction>>(mealReducer, initialState)

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(state.darkMode))

        document.body.className = state.darkMode ? 'dark' : ''
    }, [state.darkMode])

    const searchMeals = async (text: string) => {
        try {
            dispatch({
                type: 'START'
            })

            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
            const data = response.data
            console.log(data)
            dispatch({
                type: 'SUCCESS',
                payload: data.meals || []
            })

        }
        catch (err) {
            dispatch({
                type: 'ERROR',
                payload: 'Failed to fetch meals'
            })
        }
    }

    const selectMeal = (meal: Meal | null) => {
        dispatch({
            type: 'SET_SELECTED_MEAL',
            payload: meal
        })
    }

    const toggleTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }

    const value = {
        ...state,
        searchMeals,
        selectMeal,
        toggleTheme
    }

    return (
        <MealContext.Provider value={value}>
            {children}
        </MealContext.Provider>
    )
}