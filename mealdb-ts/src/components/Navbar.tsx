import { useContext } from "react"
import { Link } from "react-router-dom"
import { MealContext } from "../context/MealContext"

function Navbar() {

    const { darkMode, toggleTheme } = useContext(MealContext)

    return (
        <nav className="navbar">
            <Link to='/'>
                <h2>Meal Finder</h2>
            </Link>

            <button onClick={toggleTheme}>{darkMode ? 'Light' : 'Dark'}</button>
        </nav>
    )
}

export default Navbar