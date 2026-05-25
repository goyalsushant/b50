function SearchBar({ search, setSearch, fetchMeals }) {
    return (
        <div className="flex w-full p-3">
            <input type="text" name="meal" id="search" placeholder="Search Meals" value={search} onChange={(e) => setSearch(e.target.value)} />

            <button onClick={fetchMeals}>Search</button>
        </div>
    )
}

export default SearchBar