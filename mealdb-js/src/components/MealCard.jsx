import { Link } from "react-router-dom"

function MealCard({ meal }) {
    return (
        <div className="rounded-2xl">
            <img src={meal.strMealThumb} alt="" className="w-full h-52 object-cover" />

            <h3 className="text-xl font-bold mb-2">{meal.strMeal}</h3>

            <Link to={`/meal/${meal.idMeal}`}>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2">View Details</button>
            </Link>
        </div>
    )
}

export default MealCard