import { Link } from "react-router-dom"
import type { Meal } from "../types/meal"
import { useContext } from "react"
import { MealContext } from "../context/MealContext"

interface MealCardProps {
    meal: Meal
}

function MealCard({ meal }: MealCardProps) {

    const { selectMeal } = useContext(MealContext)

    return (
        <div className="meal-card">
            <img src={meal.strMealThumb} alt="" />

            <h3>{meal.strMeal}</h3>

            <Link to={`/meal/${meal.idMeal}`}>
                <button onClick={() => selectMeal(meal)}>View Details</button>
            </Link>
        </div>
    )
}

export default MealCard