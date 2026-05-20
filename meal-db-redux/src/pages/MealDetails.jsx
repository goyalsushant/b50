import { useParams } from "react-router-dom"
import { mealsApi, useGetMealsByIdQuery } from "../store/apis/mealsApi"

function MealDetails() {
    const { id } = useParams()
    console.log(id, mealsApi)
    const { data, isLoading, isError, isFetching } = useGetMealsByIdQuery(id, {
        refetchOnMountOrArgChange: true,
        skip: !id
    })
    console.log(data)

    if (isLoading) return <p>Loading Meal Data...</p>
    if (isError) return <p>Error Fetching Meal Data...</p>
    if (isFetching) return <p>Loading Meal Data...</p>

    if(!data || data == undefined) return <p>Something Went Wrong...</p>

    const meal = data?.meals[0]
    return (
        <div className="details">
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
        </div>
    )
}

export default MealDetails