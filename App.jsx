import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import Home from './Home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Pagination from './Pagination.jsx';
import Footer from './Footer.jsx';
import './style.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home setCurrentPage={setCurrentPage} />;
    } else if (currentPage.startsWith('about') || currentPage.startsWith('dept') || currentPage.startsWith('hospital') || currentPage.startsWith('insurance') || currentPage.startsWith('corporate') || currentPage.startsWith('rbsk') || currentPage.startsWith('abmss')) {
      return <About setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'contact' || currentPage === 'health-packages') {
      return <Contact setCurrentPage={setCurrentPage} />;
    } else {
      return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Breadcrumbs (Hidden on Home) */}
      <Breadcrumbs currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Dynamic Page Content */}
      <div className="page-content-wrapper">
        {renderPage()}
      </div>

      {/* Pagination Component */}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
