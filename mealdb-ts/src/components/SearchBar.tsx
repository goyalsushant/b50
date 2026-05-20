import type React from "react"
import { useContext, useEffect, useState } from "react"
import { MealContext } from "../context/MealContext"
import useDebounce from "../hooks/useDebounce"

interface SearchBarProps {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    fetchMeals: () => void
}

// function SearchBar({ search, setSearch, fetchMeals }: SearchBarProps) {
//     return (
//         <div className="search-box">
//             <input type="text" name="meal" id="search" placeholder="Search Meals" value={search} onChange={(e) => setSearch(e.target.value)} />

//             <button onClick={fetchMeals}>Search</button>
//         </div>
//     )
// }

function SearchBar() {

    const [text, setText] = useState('')
    const debouncedText = useDebounce(text)

    const { searchMeals } = useContext(MealContext)

    useEffect(()=>{
        if(debouncedText.trim()) {
            searchMeals(debouncedText)
        }
        else {
            searchMeals('')
        }
    }, [debouncedText])

    return (
        <div className="search-box">
            <input type="text" name="meal" id="search" placeholder="Search Meals" value={text} onChange={(e) => setText(e.target.value)} />

            {/* <button onClick={fetchMeals}>Search</button> */}
        </div>
    )
}

export default SearchBar