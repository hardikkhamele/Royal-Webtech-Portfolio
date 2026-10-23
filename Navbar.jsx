import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ currentPage = 'home', setCurrentPage = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Track window scroll to slightly deepen backdrop on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, e) => {
    if (e) e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  // Chevron SVG icon
  const ChevronIcon = () => (
    <svg 
      className="nelson-chevron" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <header className={`nelson-navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nelson-navbar-container">
        
        {/* Logo */}
        <div 
          className="nelson-navbar-logo-wrap" 
          onClick={(e) => handleNavClick('home', e)}
          role="button"
          tabIndex={0}
          aria-label="Nelson Multispeciality Hospital"
        >
          <img 
            src="/Nelson logo Navbar.png" 
            alt="Nelson Multispeciality Hospital" 
            className="nelson-navbar-logo-img"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nelson-nav-menu">
          {/* Home */}
          <li className="nelson-nav-item">
            <a 
              href="#home" 
              className={`nelson-nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('home', e)}
            >
              Home
            </a>
          </li>

          {/* About Dropdown */}
          <li className="nelson-nav-item">
            <button 
              type="button"
              className={`nelson-nav-link ${currentPage.startsWith('about') ? 'active' : ''}`}
              aria-haspopup="true"
            >
              <span>About</span>
              <ChevronIcon />
            </button>
            <ul className="nelson-dropdown">
              <li className="nelson-dropdown-item">
                <a 
                  href="#about-us" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('about-us', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  About Us
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#our-infrastructure" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('our-infrastructure', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Our Infrastructure
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#our-doctors" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('our-doctors', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Our Doctors
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#our-inspiration" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('our-inspiration', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Our Inspiration
                </a>
              </li>
            </ul>
          </li>

          {/* Department Mega Dropdown */}
          <li className="nelson-nav-item">
            <button 
              type="button"
              className={`nelson-nav-link ${currentPage.startsWith('department') ? 'active' : ''}`}
              aria-haspopup="true"
            >
              <span>Department</span>
              <ChevronIcon />
            </button>
            <div className="nelson-dropdown nelson-mega-dropdown">
              <div className="nelson-mega-header">Clinical Specialties & Centers of Excellence</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-trauma" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-trauma', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Advance Trauma & Joint Replacement
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-neuro" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-neuro', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Neuroscience & Neurology
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-women-care" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-women-care', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Women Care & Maternity
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-child-care" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-child-care', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Child Care & Pediatrics
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-general-surgery" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-general-surgery', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    General Surgery & Laparoscopy
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-general-medicine" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-general-medicine', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    General Medicine & Critical Care (ICU)
                  </a>
                </li>
              </ul>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-ent" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-ent', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    ENT & Cochlear Implant
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-ophthalmology" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-ophthalmology', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Ophthalmology
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-gastro" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-gastro', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Gastroenterology
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-urosurgery" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-urosurgery', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Urosurgery & Nephrology
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-plastic-surgery" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-plastic-surgery', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Plastic Surgery & Cosmetology
                  </a>
                </li>
                <li className="nelson-dropdown-item">
                  <a 
                    href="#dept-oncology" 
                    className="nelson-dropdown-link"
                    onClick={(e) => handleNavClick('dept-oncology', e)}
                  >
                    <span className="nelson-dropdown-bullet"></span>
                    Oncology & Oncosurgery
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Empanelment's Dropdown */}
          <li className="nelson-nav-item">
            <button 
              type="button"
              className={`nelson-nav-link ${currentPage.startsWith('empanelment') ? 'active' : ''}`}
              aria-haspopup="true"
            >
              <span>Empanelment's</span>
              <ChevronIcon />
            </button>
            <ul className="nelson-dropdown">
              <li className="nelson-dropdown-item">
                <a 
                  href="#empanelment-insurance" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('insurance', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Insurance
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#empanelment-corporate" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('corporate-tie-up', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Corporate Tie up
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#empanelment-cleft" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('abmss-cleft', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  ABMSS CLEFT Project
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#empanelment-rbsk" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('rbsk-scheme', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  RBSK Scheme
                </a>
              </li>
            </ul>
          </li>

          {/* Our Hospitals Dropdown */}
          <li className="nelson-nav-item">
            <button 
              type="button"
              className={`nelson-nav-link ${currentPage.startsWith('hospitals') ? 'active' : ''}`}
              aria-haspopup="true"
            >
              <span>Our Hospitals</span>
              <ChevronIcon />
            </button>
            <ul className="nelson-dropdown">
              <li className="nelson-dropdown-item">
                <a 
                  href="#hospital-dhantoli" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('hospital-dhantoli', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Nelson Hospital (Dhantoli)
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#hospital-luxe" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('hospital-luxe', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Nelson Luxe Mother and Child Care
                </a>
              </li>
              <li className="nelson-dropdown-item">
                <a 
                  href="#hospital-neuro" 
                  className="nelson-dropdown-link"
                  onClick={(e) => handleNavClick('hospital-neuro', e)}
                >
                  <span className="nelson-dropdown-bullet"></span>
                  Central Brain & Spine Hospital
                </a>
              </li>
            </ul>
          </li>

          {/* Health Packages */}
          <li className="nelson-nav-item">
            <a 
              href="#health-packages" 
              className={`nelson-nav-link ${currentPage === 'health-packages' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('health-packages', e)}
            >
              Health Packages
            </a>
          </li>
        </ul>

        {/* Right Action Buttons */}
        <div className="nelson-navbar-actions">
          {/* Phone Call Button */}
          <a 
            href="tel:+919518951959" 
            className="nelson-action-btn nelson-phone-btn" 
            title="Call Us: +91 95189 51959"
            aria-label="Call Hospital"
          >
            <svg 
              className="nelson-action-icon" 
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>

          {/* Email Button */}
          <a 
            href="mailto:info@nelsonhospitals.com" 
            className="nelson-action-btn nelson-email-btn" 
            title="Email: info@nelsonhospitals.com"
            aria-label="Email Hospital"
          >
            <svg 
              className="nelson-action-icon" 
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>

          {/* NABH Accreditation Badge */}
          <a 
            href="#nabh" 
            className="nelson-nabh-link" 
            title="NABH Accredited Hospital"
            onClick={(e) => { e.preventDefault(); }}
          >
            <img 
              src="/nabh-logo.png" 
              alt="NABH Accredited" 
              className="nelson-nabh-badge"
            />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button" 
            className={`nelson-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="nelson-hamburger-line"></span>
            <span className="nelson-hamburger-line"></span>
            <span className="nelson-hamburger-line"></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <div className={`nelson-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nelson-mobile-list">
          {/* Home */}
          <li>
            <button 
              type="button" 
              className={`nelson-mobile-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('home', e)}
            >
              Home
            </button>
          </li>

          {/* About */}
          <li>
            <button 
              type="button" 
              className="nelson-mobile-link"
              onClick={() => toggleMobileDropdown('about')}
            >
              <span>About</span>
              <ChevronIcon />
            </button>
            {openMobileDropdown === 'about' && (
              <ul className="nelson-mobile-accordion">
                <li>
                  <a 
                    href="#about-us" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('about-us', e)}
                  >
                    • About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#our-infrastructure" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('our-infrastructure', e)}
                  >
                    • Our Infrastructure
                  </a>
                </li>
                <li>
                  <a 
                    href="#our-doctors" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('our-doctors', e)}
                  >
                    • Our Doctors
                  </a>
                </li>
                <li>
                  <a 
                    href="#our-inspiration" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('our-inspiration', e)}
                  >
                    • Our Inspiration
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Department */}
          <li>
            <button 
              type="button" 
              className="nelson-mobile-link"
              onClick={() => toggleMobileDropdown('department')}
            >
              <span>Department</span>
              <ChevronIcon />
            </button>
            {openMobileDropdown === 'department' && (
              <ul className="nelson-mobile-accordion">
                <li>
                  <a 
                    href="#dept-trauma" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-trauma', e)}
                  >
                    • Advance Trauma & Joint Replacement
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-neuro" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-neuro', e)}
                  >
                    • Neuroscience & Neurology
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-women-care" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-women-care', e)}
                  >
                    • Women Care & Maternity
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-child-care" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-child-care', e)}
                  >
                    • Child Care & Pediatrics
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-general-surgery" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-general-surgery', e)}
                  >
                    • General Surgery & Laparoscopy
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-ent" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-ent', e)}
                  >
                    • ENT & Cochlear Implant
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-ophthalmology" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-ophthalmology', e)}
                  >
                    • Ophthalmology
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-gastro" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-gastro', e)}
                  >
                    • Gastroenterology
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-urosurgery" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-urosurgery', e)}
                  >
                    • Urosurgery & Nephrology
                  </a>
                </li>
                <li>
                  <a 
                    href="#dept-plastic-surgery" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('dept-plastic-surgery', e)}
                  >
                    • Plastic Surgery & Cosmetology
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Empanelment's */}
          <li>
            <button 
              type="button" 
              className="nelson-mobile-link"
              onClick={() => toggleMobileDropdown('empanelment')}
            >
              <span>Empanelment's</span>
              <ChevronIcon />
            </button>
            {openMobileDropdown === 'empanelment' && (
              <ul className="nelson-mobile-accordion">
                <li>
                  <a 
                    href="#empanelment-insurance" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('insurance', e)}
                  >
                    • Insurance
                  </a>
                </li>
                <li>
                  <a 
                    href="#empanelment-corporate" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('corporate-tie-up', e)}
                  >
                    • Corporate Tie up
                  </a>
                </li>
                <li>
                  <a 
                    href="#empanelment-cleft" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('abmss-cleft', e)}
                  >
                    • ABMSS CLEFT Project
                  </a>
                </li>
                <li>
                  <a 
                    href="#empanelment-rbsk" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('rbsk-scheme', e)}
                  >
                    • RBSK Scheme
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Our Hospitals */}
          <li>
            <button 
              type="button" 
              className="nelson-mobile-link"
              onClick={() => toggleMobileDropdown('hospitals')}
            >
              <span>Our Hospitals</span>
              <ChevronIcon />
            </button>
            {openMobileDropdown === 'hospitals' && (
              <ul className="nelson-mobile-accordion">
                <li>
                  <a 
                    href="#hospital-dhantoli" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('hospital-dhantoli', e)}
                  >
                    • Nelson Hospital (Dhantoli)
                  </a>
                </li>
                <li>
                  <a 
                    href="#hospital-luxe" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('hospital-luxe', e)}
                  >
                    • Nelson Luxe Mother and Child Care
                  </a>
                </li>
                <li>
                  <a 
                    href="#hospital-neuro" 
                    className="nelson-mobile-accordion-link"
                    onClick={(e) => handleNavClick('hospital-neuro', e)}
                  >
                    • Central Brain & Spine Hospital
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Health Packages */}
          <li>
            <button 
              type="button" 
              className={`nelson-mobile-link ${currentPage === 'health-packages' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('health-packages', e)}
            >
              Health Packages
            </button>
          </li>
        </ul>

        {/* Quick action buttons in mobile menu */}
        <div className="nelson-mobile-actions-bottom">
          <a href="tel:+919518951959" className="nelson-mobile-action-pill phone">
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Us
          </a>
          <a href="mailto:info@nelsonhospitals.com" className="nelson-mobile-action-pill email">
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
