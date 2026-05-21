import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";

export default function MealGrid() {
    const navigate = useNavigate();

    const { meals, loading } = useSelector(
        (state: RootState) => state.meals
    );

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="grid">
            {meals.map((meal) => (
                <div
                    key={meal.idMeal}
                    className="card"
                    onClick={() =>
                        navigate(`/meal/${meal.idMeal}`)
                    }
                >
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />
                    <h3>{meal.strMeal}</h3>
                </div>
            ))}
        </div>
    );
}