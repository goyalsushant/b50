import { useParams } from "react-router-dom";
import { useGetMealByIdQuery } from "../store/apis/mealsApi";

export default function MealDetails() {
    const { id } = useParams<{ id: string }>();
    const {
        data,
        isLoading,
        error,
    } = useGetMealByIdQuery(id || "", {
        skip: !id,
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return <h2>Loading meal...</h2>;
    }

    if (error) {
        return <h2>Error loading meal</h2>;
    }

    if (!data?.meals?.length) {
        return <h2>No meal found</h2>;
    }

    const meal = data.meals[0];

    return (
        <div className="details">
            <h1>{meal.strMeal}</h1>
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
            />
            <h3>
                Category: {meal.strCategory}
            </h3>
            <h3>
                Area: {meal.strArea}
            </h3>
            <p>{meal.strInstructions}</p>

            {meal.strYoutube && (
                <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noreferrer"
                >
                    Watch Recipe Video
                </a>
            )}
        </div>
    );
}