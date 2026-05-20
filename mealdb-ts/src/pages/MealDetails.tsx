import { useEffect, useReducer } from "react"
import { useParams } from "react-router-dom"
import { initialState, mealReducer } from "../reducers/mealReducer"
import axios from "axios"

function MealDetails() {

    const { id } = useParams()

    const [state, dispatch] = useReducer(mealReducer, initialState)

    useEffect(() => {
        async function fetchMealDetails(): Promise<void> {

            dispatch({
                type: 'START'
            })

            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data = response.data
                dispatch({
                    type: 'SUCCESS',
                    payload: data.meals
                })
            }
            catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: 'Failed to fetch data for Meal.'
                })
            }
        }

        fetchMealDetails()
    }, [id])

    if (state.loading) return <h2>Loading Meal Data...</h2>
    if (state.error) return <h2>{state.error}</h2>

    const meal = state.meals[0]

    return (
        <>
            {
                meal && <div className="details">
                    <img src={meal.strMealThumb} alt="" />
                    <div className="content">
                        <h1>{meal.strMeal}</h1>

                        <p>
                            <strong>{meal.strCategory}</strong>
                        </p>

                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            }
        </>

    )
}

export default MealDetails