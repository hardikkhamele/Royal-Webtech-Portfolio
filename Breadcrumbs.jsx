import React from 'react';

function Breadcrumbs({ currentPage, setCurrentPage }) {
  if (currentPage === 'home') {
    return null;
  }

  const getPageTitle = (page) => {
    switch (page) {
      case 'about-us': return 'About Us';
      case 'our-infrastructure': return 'Our Infrastructure';
      case 'our-doctors': return 'Our Doctors';
      case 'our-inspiration': return 'Our Inspiration';
      case 'dept-trauma': return 'Advance Trauma & Joint Replacement';
      case 'dept-neuro': return 'Neurosciences & Neurology';
      case 'dept-women-care': return 'Women Care & Maternity';
      case 'dept-child-care': return 'Child Care & Pediatrics';
      case 'health-packages': return 'Health Packages';
      case 'insurance': return 'Insurance Empanelments';
      case 'corporate-tie-up': return 'Corporate Tie Ups';
      case 'hospital-dhantoli': return 'Nelson Hospital (Dhantoli)';
      case 'hospital-luxe': return 'Nelson Luxe Mother and Child Care';
      case 'hospital-neuro': return 'Central Brain & Spine Hospital';
      case 'contact': return 'Contact Us';
      default: return page ? page.replace('-', ' ') : 'Hospital';
    }
  };

  return (
    <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
            >
              Home
            </a>
          </li>
          <li className="active">
            {getPageTitle(currentPage)}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Breadcrumbs;

