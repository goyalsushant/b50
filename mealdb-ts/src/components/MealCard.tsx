import { Link } from "react-router-dom"
import type { Meal } from "../types/meal"

interface MealCardProps {
    meal: Meal
}

function MealCard({ meal }: MealCardProps) {
    return (
        <div className="meal-card">
            <img src={meal.strMealThumb} alt="" />

            <h3>{meal.strMeal}</h3>

            <Link to={`/meal/${meal.idMeal}`}>
                <button>View Details</button>
            </Link>
        </div>
    )
}

export default MealCard