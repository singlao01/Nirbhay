import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/safetytips">Safety Tips</Link>
          <Link to="/about">About</Link>
        </div>


        <p className="footer-text">© 2025 Nirbhay. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
