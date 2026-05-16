import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/'>
                <h2>Meal Finder</h2>
            </Link>
        </nav>
    )
}

export default Navbar