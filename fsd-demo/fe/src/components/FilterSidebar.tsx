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
        <div className="p-5 bg-white shadow rounded-xl shadow-sm border border-gray-200 sticky top-4">
            <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-800">Filters</h3>
                <p className="text-s text-gray-500">Refine your product search</p>
            </div>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="font-medium text-gray-700">Max Price</label>
                        <span className="bg-black text-white text-sm px-3 py-1 rounded-full">₹ {price.toLocaleString()}</span>
                    </div>

                    <input
                        type="range"
                        min={100}
                        max={100000}
                        value={price}
                        step={100}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full accent-black cursor-pointer"
                    />

                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹ 100</span>
                        <span>₹ 100000</span>
                    </div>
                </div>

                <button
                    onClick={applyFilter}
                    className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2.5 mt-2 rounded-lg transition duration-200"
                >
                    Apply
                </button>
            </div>
        </div>
    )
}

export default FilterSidebar