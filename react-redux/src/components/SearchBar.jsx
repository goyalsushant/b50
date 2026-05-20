import { useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoading, setMeals } from "../store/slices/mealSlice";
import axios from "axios";

function SearchBar() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const searchMeals = async() => {
        try {
            dispatch(setLoading(true))
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
            const data = response.data
            dispatch(setMeals(data.meals))
            dispatch(setError(null))
        }
        catch(err) {
            dispatch(setError('Failed to fetch meal details.'))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search Meals" value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={searchMeals}>Search</button>
        </div>
    )
}

export default SearchBar