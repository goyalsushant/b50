import { useEffect, useState } from "react"
import { fetchProducts } from "../store/slices/productSlice"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { Link } from "react-router-dom"
import SearchBar from '../components/SearchBar'
import FilterSidebar from "../components/FilterSidebar"

function Home() {

    const dispatch = useAppDispatch()

    const { products, loading } = useAppSelector(state => state.product)

    const [page, setPage] = useState(1)
    const limit = 12

    useEffect(() => {
        dispatch(fetchProducts(`page=${page}&limit=${limit}`))
    }, [page, dispatch])

    const handleNext = () => setPage((prev) => prev + 1)

    const handlePrevious = () => setPage(prev => (prev > 1 ? prev - 1 : 1))

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <SearchBar />
            <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mt-6">
                <div className="md:col-span-1">
                    <FilterSidebar />
                </div>
                <div className="md:col-span-3">
                    {
                        loading ? (
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    Array(8).fill(0).map((_: any, i: any) => (
                                        <div key={i} className="h-64 bg-gray-200 animate-pulse rounded"></div>
                                    ))
                                }
                            </div>
                        )
                            :
                            (
                                <>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                        {
                                            products.map((product) => (
                                                <Link
                                                    to={`/product/${product.slug}`}
                                                    key={product._id}
                                                    className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden group"
                                                >
                                                    <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                                                        <img
                                                            src={product.images[0].url}
                                                            alt={product.images[0].altText}
                                                            className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                                                        />
                                                    </div>

                                                    <div className="p-3">
                                                        <h3 className="font-medium text-gray-800 line-clamp-2">{product.name}</h3>
                                                        <p className="text-green-600 font-bold mt-1">₹{" "}{product.price}</p>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>

                                    <div className="flex justify-center items-center gap-4 mt-8">
                                        <button
                                            onClick={handlePrevious}
                                            disabled={page == 1}
                                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                                        >
                                            Prev
                                        </button>
                                        <span className="font-medium">{page}</span>
                                        <button
                                            onClick={handleNext}
                                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default Home