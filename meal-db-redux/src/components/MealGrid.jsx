import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function MealGrid() {

    const { meals, loading } = useSelector(state => state.meals)
    const navigate = useNavigate()

    return (
        <div className="grid">
            {
                meals.map(meal => (
                    <div className="card" key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h3>{meal.strMeal}</h3>
                        <button onClick={() => navigate(`/meal/${meal.idMeal}`)}>View Details</button>
                    </div>
                ))
            }
        </div>
    )
}

export default MealGrid