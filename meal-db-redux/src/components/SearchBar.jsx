import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchMeals } from "../store/thunk/mealsThunk"

function SearchBar() {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    return (
        <div className="search">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Search Meals" />

            <button onClick={() => dispatch(searchMeals(text))}>Search</button>
        </div>
    )
}

export default SearchBar