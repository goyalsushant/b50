import { useGetCategoriesQuery } from "../store/apis/mealsApi"

function Categories() {

    const { data, isLoading } = useGetCategoriesQuery()

    if (isLoading) return <p>Loading Data...</p>

    return (
        <div className="categories">
            {
                data.categories.map(category => (
                    <div key={category.idCategory}>
                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                        <h3>{category.strCategory}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Categories