import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Meal Finder</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/categories">
          Categories
        </Link>
      </div>
    </div>
  );
}