import { useContext } from "react"
import { MealContext } from "../context/MealContext"
import MealCard from "../components/MealCard"

function HomeComponent() {

    const { meals, loading, error } = useContext(MealContext)
    console.log(meals)

    return (
        <>
            {loading && <h2>Loading Meal Details...</h2>}
            {error && <h2>{error}</h2>}

            <div className="container">
                {/* <SearchBar search={search} setSearch={setSearch} fetchMeals={fetchMealsData} /> */}

                {/* {state.loading && <h2>Loading Meals Data...</h2>}

                {state.error && <h2>{state.error}</h2>} */}

                <div className="meal-grid">
                    {
                        !loading && meals.length &&
                        meals.map(meal => (
                            <MealCard meal={meal} key={meal.idMeal} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomeComponent