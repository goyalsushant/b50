import type React from "react"

interface SearchBarProps {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    fetchMeals: () => void
}

function SearchBar({ search, setSearch, fetchMeals }: SearchBarProps) {
    return (
        <div className="search-box">
            <input type="text" name="meal" id="search" placeholder="Search Meals" value={search} onChange={(e) => setSearch(e.target.value)} />

            <button onClick={fetchMeals}>Search</button>
        </div>
    )
}

export default SearchBar