import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo-link">
          <h1 className="logo">🛡️ Nirbhay</h1>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/contacts" className="nav-item">Contacts</Link>
          <Link to="/safetytips" className="nav-item">Safety Tips</Link>
          <Link to="/location" className="nav-item">Location</Link>
          <Link to="/login" className="nav-item nav-login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;