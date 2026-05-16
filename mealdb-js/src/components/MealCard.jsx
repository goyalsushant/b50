import { Link } from "react-router-dom"

function MealCard({ meal }) {
    return (
        <div>
            <img src={meal.strMealThumb} alt="" />

            <h3>{meal.strMeal}</h3>

            <Link to={`/meal/${meal.idMeal}`}>
                <button>View Details</button>
            </Link>
        </div>
    )
}

export default MealCard