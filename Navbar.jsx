import React from 'react';

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div 
          className="logo" 
          onClick={() => setCurrentPage('home')}
        >
          Advocate Prakash Jaiswal
        </div>
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className={currentPage === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={currentPage === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={currentPage === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
