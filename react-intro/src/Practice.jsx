import { useState } from "react"

function SearchBar() {

    const [query, setQuery] = useState('')

    const products = [
        'Laptop',
        'Phone',
        'Tablet',
        'Charger',
        'Bag',
        'Laptop Sleeve',
    ]

    const filteredData = products.filter((item) => item.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            {
                filteredData.map((item, key) => (
                    <p key={key}>{item}</p>
                ))
            }
        </>
    )

}

export default SearchBar