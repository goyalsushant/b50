import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { searchMeals } from "../store/slices/mealsThunk";

export default function SearchBar() {
    const [text, setText] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search meals..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => dispatch(searchMeals(text))}
            >
                Search
            </button>
        </div>
    );
}