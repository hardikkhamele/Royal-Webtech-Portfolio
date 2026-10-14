import React from 'react';

function Breadcrumbs({ currentPage, setCurrentPage }) {
  return (
    <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
      <div className="container">
        <ul className="breadcrumb">
          {currentPage === 'home' ? (
            <li className="active">Home</li>
          ) : (
            <>
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
                >
                  Home
                </a>
              </li>
              <li className="active">
                {currentPage === 'about' ? 'About' : 'Contact'}
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
