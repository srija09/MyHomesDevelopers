import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/uploads/logo2.jpeg" alt="Logo" />
          </Link>
        </div>
        {/* Overlay for mobile nav */}
        {isOpen && <div className="mobile-nav-overlay" onClick={closeMenu}></div>}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/house-models" onClick={closeMenu}>House Models</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;