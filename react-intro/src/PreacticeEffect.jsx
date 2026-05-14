import { useEffect, useState } from "react"

const products = [
    'Laptop',
    'Phone',
    'Tablet',
    'Charger',
    'Bag',
    'Laptop Sleeve',
]

function SearchBarWithEffect() {

    const [query, setQuery] = useState('')

    const [filteredProducts, setProducts] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect called')
        const filteredData = products.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        setProducts(filteredData)
    }, [query, count])

    return (
        <>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            {
                filteredProducts.map((item, key) => (
                    <p key={key}>{item}</p>
                ))
            }
        </>
    )

}

export default SearchBarWithEffect