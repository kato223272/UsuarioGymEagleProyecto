import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="nav-container">
        <div className="logo">Gimnasio XYZ</div>
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Clases</a></li>
            <li><a href="#">Horarios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
