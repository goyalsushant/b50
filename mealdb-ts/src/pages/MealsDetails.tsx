import { useContext } from "react"
import { MealContext } from "../context/MealContext"

function MealsDetails() {
    const { selectedMeal } = useContext(MealContext)

    return (
        <>
            {
                selectedMeal && <div className="details">
                    <img src={selectedMeal.strMealThumb} alt="" />
                    <div className="content">
                        <h1>{selectedMeal.strMeal}</h1>

                        <p>
                            <strong>{selectedMeal.strCategory}</strong>
                        </p>

                        <p>{selectedMeal.strInstructions}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default MealsDetails