import { useState } from "react"

function ProductModal({ onClose, product }: any) {

    const [form, setForm] = useState({
        name: product?.name || '',
        price: product?.price || 0,
        stock: product?.stock || 0
    })

    const submit = async () => {
        if (product) {
            // call the update product api
        }
        else {
            // create prodcut api
        }

        onClose()
    }

    return (
        <div
            className="fixed inset-0 bg-black/40 flex justify-center items-center"
        >
            <div className="bg-white p-6 rounded w-96">
                <h2 className="text-xl font-bold mb-3">
                    {product ? 'Edit Product' : 'Add Product'}
                </h2>

                <input
                    type="text"
                    className="input mb-2"
                    placeholder="Product Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type="text"
                    className="input mb-2"
                    placeholder="Product Price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                />
                <input
                    type="text"
                    className="input mb-2"
                    placeholder="Product Stock"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
                />

                <div
                    className="flex justify-end gap-2"
                >
                    <button
                        onClick={submit}
                        className="bg-black text-white px-3 py-1"
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal