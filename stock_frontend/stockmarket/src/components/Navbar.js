import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Stock</Link> {/* Logo redirects to Home */}
      </div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/budget">Budget</Link></li>
        <li><Link to="/learn">Learn</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;