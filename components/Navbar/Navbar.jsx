import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Richycandeveloper
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li className="navbar-item">
            <a href="#social-media" className="navbar-link" onClick={toggleMenu}>
              Social Media
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
