import { useSelector } from "react-redux"

function Home() {

    const { meals, loading, error } = useSelector(state => state.meals)


    return (
        <div>
            {loading && <h2>Loading Data...</h2>}
            {error && <h2>{error}</h2>}

            <div className="meal-grid">
                {
                    meals?.map(meal => (
                        <div key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
                            <h3>{meal.strMeal}</h3>
                            {/* View Details button */}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Home