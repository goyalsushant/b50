import { useState } from "react"
import { useAppDispatch } from "../hooks/reduxHooks"
import { fetchProducts } from "../store/slices/productSlice"

function FilterSidebar() {
    const dispatch = useAppDispatch()
    const [price, setPrice] = useState(1000)

    const applyFilter = () => {
        dispatch(fetchProducts(`price[lte]=${price}`))
    }

    return (
        <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold mb-2">Filters</h3>

            <label htmlFor="">Max Price</label>
            <input
                type="range"
                min={100}
                max={100000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))} />

            <p>{price}</p>

            <button
                onClick={applyFilter}
                className="bg-black text-white px-3 py-1 mt-2 rounded"
            >
                Apply
            </button>
        </div>
    )
}

export default FilterSidebar