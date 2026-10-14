import React from 'react';

function Pagination({ currentPage, setCurrentPage }) {
  const pages = [
    { id: 'home', label: '1 (Home)' },
    { id: 'about', label: '2 (About)' },
    { id: 'contact', label: '3 (Contact)' }
  ];

  const handlePrev = () => {
    if (currentPage === 'about') setCurrentPage('home');
    if (currentPage === 'contact') setCurrentPage('about');
  };

  const handleNext = () => {
    if (currentPage === 'home') setCurrentPage('about');
    if (currentPage === 'about') setCurrentPage('contact');
  };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {/* Previous Button */}
        <li className={currentPage === 'home' ? 'disabled' : ''}>
          <a 
            href="#prev" 
            onClick={(e) => { e.preventDefault(); handlePrev(); }}
          >
            &laquo; Prev
          </a>
        </li>

        {/* Page Numbers */}
        {pages.map((p) => (
          <li key={p.id} className={currentPage === p.id ? 'active' : ''}>
            <a 
              href={`#${p.id}`} 
              onClick={(e) => { e.preventDefault(); setCurrentPage(p.id); }}
            >
              {p.label}
            </a>
          </li>
        ))}

        {/* Next Button */}
        <li className={currentPage === 'contact' ? 'disabled' : ''}>
          <a 
            href="#next" 
            onClick={(e) => { e.preventDefault(); handleNext(); }}
          >
            Next &raquo;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
