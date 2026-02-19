import { useState } from 'react';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <i className="fas fa-fish"></i>
          <h1>Shiva <span>Aqua Solutions</span></h1>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setMenuActive(!menuActive)}>
          <i className="fas fa-bars"></i>
        </button>
        
        <nav>
          <ul className={menuActive ? 'active' : ''}>
            <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuActive(false)}>Services</a></li>
            <li><a href="#products" onClick={() => setMenuActive(false)}>Products</a></li>
            <li><a href="#network" onClick={() => setMenuActive(false)}>Network</a></li>
            <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
