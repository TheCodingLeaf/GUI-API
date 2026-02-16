import { NavLink } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact</NavLink>
          </li>
           <li className="nav-item">
            <NavLink to="/products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Products</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};