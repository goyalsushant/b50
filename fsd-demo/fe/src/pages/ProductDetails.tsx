import { useParams } from "react-router-dom"
import { useAppDispatch } from "../hooks/reduxHooks"
import { useEffect, useState } from "react"
import { api } from "../api/axios"
import { addToCart } from "../store/slices/cartSlice"

function ProductDetails() {

    const { slug } = useParams()
    const dispatch = useAppDispatch()
    const [product, setProduct] = useState<any>(null)

    useEffect(() => {
        api.get(`/products/${slug}`).then(res => setProduct(res.data))
    }, [slug])

    if (!product) {
        return <div className="animate-pulse h-96 bg-gray-200"></div>
    }
    { console.log(product) }

    return (
        <>
            {
                product && <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="bg-gray-100 rounded-xl overflow-hidden">
                        <img
                            src={product[0].images[0].url}
                            alt={product[0].images[0].altText}
                            className="w-full h-[450px] object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">{product[0].name}</h1>
                        <p className="text-gray-600 mt-3">{product[0].description}</p>
                        <p className="text-green-600 mt-5 text-2xl font-bold">₹ {product[0].price}</p>

                        <button
                            onClick={() => dispatch(
                                addToCart({
                                    productId: product[0]._id,
                                    name: product[0].name,
                                    price: product[0].price,
                                    quantity: 1
                                })
                            )}
                            className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                        >Add To Cart</button>

                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetails