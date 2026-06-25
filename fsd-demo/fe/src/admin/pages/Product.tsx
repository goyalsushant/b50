import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { fetchProducts } from "../../store/slices/productSlice"
import ProductModal from "../components/ProductModal"

function Products() {

    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.product)

    const [open, setOpen] = useState(false)
    const [editProduct, setEditProduct] = useState<any>(null)

    useEffect(() => {
        dispatch(fetchProducts('limit=500'))
    }, [])

    return (
        <>
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold">Manage Products</h1>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Add Product
                </button>
            </div>
            <table className="w-full bg-white shadow rounded">
                <thead>
                    <tr className="border-b">
                        <th className="py-3">Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr
                                key={product._id}
                                className="text-center border-b"
                            >
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>

                                <td className="space-x-4 py-3">
                                    <button 
                                        onClick={() => {
                                            setEditProduct(product)
                                            setOpen(true)
                                        }}
                                        className="bg-black text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 rounded px-2 py-1 text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                open && (
                    <ProductModal
                        onClose={
                            () => {
                                setOpen(false)
                                setEditProduct(null)
                            }
                        }
                        product={editProduct}
                    />
                )
            }
        </>
    )
}
export default Products