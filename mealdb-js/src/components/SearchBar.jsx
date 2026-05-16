function SearchBar({ search, setSearch, fetchMeals }) {
    return (
        <div>
            <input type="text" name="meal" id="search" placeholder="Search Meals" value={search} onChange={(e) => setSearch(e.target.value)} />

            <button onClick={fetchMeals}>Search</button>
        </div>
    )
}

export default SearchBar