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
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Breadcrumbs */}
      <Breadcrumbs currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Dynamic Page Content */}
      {renderPage()}

      {/* Pagination Component */}
      <div className="container">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
