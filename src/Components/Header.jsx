import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="headerName">
        <h2>Yasin Ali</h2>
      </div>

      <nav className={`header-tags ${menuOpen ? "open" : ""}`}>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
