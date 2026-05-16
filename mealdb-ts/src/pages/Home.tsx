import { useEffect, useReducer, useState } from "react"
import { initialState, mealReducer } from "../reducers/mealReducer"
import SearchBar from "../components/SearchBar"
import MealCard from "../components/MealCard"
import axios from "axios"

function Home() {

    const [search, setSearch] = useState<string>('')

    const [state, dispatch] = useReducer(mealReducer, initialState)

    async function fetchMealsData(): Promise<void> {
        dispatch({ type: 'START' })

        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = response.data

            dispatch({
                type: 'SUCCESS',
                payload: data.meals || []
            })
        }
        catch (err) {
            dispatch({
                type: 'ERROR',
                payload: 'Something went wrong...'
            })
        }
    }

    useEffect(() => {
        fetchMealsData()
    }, [])

    return (
        <div className="container">
            <SearchBar search={search} setSearch={setSearch} fetchMeals={fetchMealsData} />

            {state.loading && <h2>Loading Meals Data...</h2>}

            {state.error && <h2>{state.error}</h2>}

            <div className="meal-grid">
                {
                    !state.loading &&
                    state.meals.map(meal => (
                        <MealCard meal={meal} key={meal.idMeal}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home