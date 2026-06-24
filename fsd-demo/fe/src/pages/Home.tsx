import { useEffect } from "react"
import { fetchProducts } from "../store/slices/productSlice"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { Link } from "react-router-dom"
import SearchBar from '../components/SearchBar'
import FilterSidebar from "../components/FilterSidebar"

function Home() {

    const dispatch = useAppDispatch()

    const { products, loading } = useAppSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProducts('page=1&limit=12'))
    }, [])

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <SearchBar />
            <FilterSidebar />
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {
                                products.map((product) => (
                                    <Link to={`/product/${product.slug}`} key={product._id} className="bg-white p-3 rounded shadow hover:shadow-lg transition">
                                        <img
                                            src={product.images[0].url}
                                            alt={product.images[0].altText}
                                            className="h-40 w-full object-cover rounded"
                                        />
                                        <h3 className="mt-2 font-semibold">{product.name}</h3>
                                        <p className="text-green-600 font-bold">{product.price}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    )
            }
        </>
    )
}

export default Home