function SearchBar({ search, setSearch, fetchMeals }) {
    return (
        <div className="flex w-full p-3 border">
            <input
                type="text"
                name="meal"
                id="search"
                placeholder="Search Meals"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                className="flex-1 px-4 py-2 outline-none text-gray-700 rounded-xl"
                />

            <button onClick={fetchMeals}>Search</button>
        </div>
    )
}

export default SearchBar