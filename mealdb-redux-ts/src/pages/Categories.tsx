import { useGetCategoriesQuery } from "../store/apis/mealsApi";

export default function Categories() {
    const { data, isLoading } = useGetCategoriesQuery();
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="categories">
            {data?.categories.map((category) => (
                <div
                    key={category.idCategory}
                    className="category-card"
                >
                    <img
                        src={category.strCategoryThumb}
                        alt={category.strCategory}
                    />

                    <h3>{category.strCategory}</h3>
                </div>
            ))}
        </div>
    );
}