import React from 'react';
import './Footer.css';

function Footer({ setCurrentPage = () => {} }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page, e) => {
    if (e) e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    scrollToTop();
  };

  return (
    <footer className="nelson-footer-wrapper">
      
      {/* Back to Top */}
      <div className="nelson-back-to-top-bar">
        <button 
          type="button" 
          className="nelson-btt-btn" 
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <svg className="nelson-btt-icon" viewBox="0 0 24 24">
            <polyline points="18 15 12 9 6 15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back to Top</span>
        </button>
      </div>

      {/* Main Footer Container */}
      <div className="nelson-footer-main">
        <div className="nelson-footer-inner">
          
          {/* Top Row: Logo & Badges */}
          <div className="nelson-footer-top-row">
            {/* Logo */}
            <a 
              href="#home" 
              className="nelson-footer-logo-link" 
              onClick={(e) => handleLinkClick('home', e)}
              title="Nelson Multispeciality Hospital"
            >
              <img 
                src="/nelson-logo.png" 
                alt="Nelson Hospital" 
                className="nelson-footer-logo-img" 
              />
            </a>

            {/* Badges: Ambulance, Pharmacy, NABH */}
            <div className="nelson-footer-badges">
              {/* 24/7 Ambulance */}
              <a href="tel:+919518951959" className="nelson-badge-card nelson-badge-ambulance">
                <span className="nelson-badge-icon-circle">
                  <svg className="nelson-badge-svg" viewBox="0 0 24 24">
                    <path d="M20 10h-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h2v-4l-2-2zm-13 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-7-5H8V9H6V7h2V5h2v2h2v2h-2v3z"/>
                  </svg>
                </span>
                <span className="nelson-badge-title">24/7 Ambulance</span>
              </a>

              {/* 24/7 Pharmacy */}
              <a href="tel:+919518951959" className="nelson-badge-card nelson-badge-pharmacy">
                <span className="nelson-badge-icon-circle">
                  <svg className="nelson-badge-svg" viewBox="0 0 24 24">
                    <path d="M6 3h12v2H6zm11 3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 8h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"/>
                  </svg>
                </span>
                <span className="nelson-badge-title">24/7 Pharmacy</span>
              </a>

              {/* NABH Logo Badge */}
              <div className="nelson-badge-nabh-wrap" title="NABH Accredited Hospital">
                <img 
                  src="/nabh-logo.png" 
                  alt="NABH Accredited" 
                  className="nelson-badge-nabh-img" 
                />
              </div>
            </div>
          </div>

          {/* 3 Columns Grid */}
          <div className="nelson-footer-grid">

            {/* Column 1: Menu, About, Empanelments, Departments */}
            <div className="nelson-footer-col">
              
              {/* Menu */}
              <div className="nelson-footer-section-block">
                <h3 className="nelson-footer-heading">Menu</h3>
                <ul className="nelson-footer-links-list">
                  <li><a href="#home" className="nelson-footer-link" onClick={(e) => handleLinkClick('home', e)}>Home</a></li>
                  <li><a href="#about-us" className="nelson-footer-link" onClick={(e) => handleLinkClick('about-us', e)}>About Us</a></li>
                  <li><a href="#contact" className="nelson-footer-link" onClick={(e) => handleLinkClick('contact', e)}>Contact Us</a></li>
                  <li><a href="#health-packages" className="nelson-footer-link" onClick={(e) => handleLinkClick('health-packages', e)}>Health Packages</a></li>
                  <li><a href="#blogs" className="nelson-footer-link" onClick={(e) => handleLinkClick('blogs', e)}>Blogs</a></li>
                  <li><a href="#our-hospital" className="nelson-footer-link" onClick={(e) => handleLinkClick('hospital-dhantoli', e)}>Our Hospital</a></li>
                  <li><a href="#pregnancy-health-desk" className="nelson-footer-link" onClick={(e) => handleLinkClick('pregnancy-desk', e)}>Pregnancy Health Desk</a></li>
                  <li><a href="#gallery" className="nelson-footer-link" onClick={(e) => handleLinkClick('gallery', e)}>Gallery</a></li>
                </ul>
              </div>

              {/* About */}
              <div className="nelson-footer-section-block">
                <h3 className="nelson-footer-heading">About</h3>
                <ul className="nelson-footer-links-list">
                  <li><a href="#about-nelson" className="nelson-footer-link" onClick={(e) => handleLinkClick('about-us', e)}>About Nelson</a></li>
                  <li><a href="#our-infrastructure" className="nelson-footer-link" onClick={(e) => handleLinkClick('our-infrastructure', e)}>Our Infrastructure</a></li>
                  <li><a href="#our-doctors" className="nelson-footer-link" onClick={(e) => handleLinkClick('our-doctors', e)}>Our Doctors</a></li>
                  <li><a href="#our-inspiration" className="nelson-footer-link" onClick={(e) => handleLinkClick('our-inspiration', e)}>Our Inspiration</a></li>
                  <li><a href="#our-management" className="nelson-footer-link" onClick={(e) => handleLinkClick('our-management', e)}>Our Management</a></li>
                  <li><a href="#accreditations" className="nelson-footer-link" onClick={(e) => handleLinkClick('accreditations', e)}>Accreditations and Achievements</a></li>
                </ul>
              </div>

              {/* Empanelment's */}
              <div className="nelson-footer-section-block">
                <h3 className="nelson-footer-heading">Empanelment's</h3>
                <ul className="nelson-footer-links-list">
                  <li><a href="#insurance-companies" className="nelson-footer-link" onClick={(e) => handleLinkClick('insurance', e)}>Insurance Companies</a></li>
                  <li><a href="#corporate-tie-ups" className="nelson-footer-link" onClick={(e) => handleLinkClick('corporate-tie-up', e)}>Corporate Tie Ups</a></li>
                  <li><a href="#abmss-cleft" className="nelson-footer-link" onClick={(e) => handleLinkClick('abmss-cleft', e)}>ABMSS CLEFT Project</a></li>
                  <li><a href="#rbsk-scheme" className="nelson-footer-link" onClick={(e) => handleLinkClick('rbsk-scheme', e)}>RBSK Scheme</a></li>
                </ul>
              </div>

              {/* Our Department's */}
              <div className="nelson-footer-section-block">
                <h3 className="nelson-footer-heading">Our Department's</h3>
                <ul className="nelson-footer-links-list">
                  <li><a href="#dept-gynaecology" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-women-care', e)}>Gynaecology</a></li>
                  <li><a href="#dept-pediatric" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-child-care', e)}>Pediatric</a></li>
                  <li><a href="#dept-neuroscience" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-neuro', e)}>Neuroscience</a></li>
                </ul>
              </div>

            </div>

            {/* Column 2: Quick Links & Best in Nagpur */}
            <div className="nelson-footer-col">
              
              {/* Quick Links */}
              <div className="nelson-footer-section-block">
                <h3 className="nelson-footer-heading">Quick Links</h3>
                <ul className="nelson-footer-links-list">
                  <li><a href="#brain-spine" className="nelson-footer-link" onClick={(e) => handleLinkClick('hospital-neuro', e)}>Brain and Spine care hospital</a></li>
                  <li><a href="#mother-child" className="nelson-footer-link" onClick={(e) => handleLinkClick('hospital-luxe', e)}>Mother and Child Hospital</a></li>
                  <li><a href="#best-pediatrician" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-child-care', e)}>Best Pediatrician in Nagpur</a></li>
                  <li><a href="#gynaecology-hospital" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-women-care', e)}>Gynaecology Hospital in Nagpur</a></li>
                  <li><a href="#best-neurologist" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-neuro', e)}>Best Neurologist in Nagpur</a></li>
                  <li><a href="#pregnancy-care" className="nelson-footer-link" onClick={(e) => handleLinkClick('hospital-luxe', e)}>Pregnancy Care Hospital in Nagpur</a></li>
                  <li><a href="#quicklink-more" className="nelson-footer-link" onClick={(e) => handleLinkClick('quicklinks', e)} style={{ color: '#DC143C', fontWeight: 600 }}>View More →</a></li>
                </ul>
              </div>

              {/* Best in Nagpur */}
              <div className="nelson-footer-section-block">
                <h3 className="nelson-footer-heading">Best in Nagpur</h3>
                <ul className="nelson-footer-links-list">
                  <li><a href="#best-brain-hospital" className="nelson-footer-link" onClick={(e) => handleLinkClick('hospital-neuro', e)}>Best Brain Hospital in Nagpur</a></li>
                  <li><a href="#best-neurosurgery" className="nelson-footer-link" onClick={(e) => handleLinkClick('hospital-neuro', e)}>Best Neuro Surgery Hospital in Nagpur</a></li>
                  <li><a href="#best-gynecologists" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-women-care', e)}>Best gynecologists in Nagpur</a></li>
                  <li><a href="#best-pediatrician-nagpur" className="nelson-footer-link" onClick={(e) => handleLinkClick('dept-child-care', e)}>Best Pediatrician in Nagpur</a></li>
                  <li><a href="#best-multispeciality" className="nelson-footer-link" onClick={(e) => handleLinkClick('about-us', e)}>Best Multispeciality Hospital in India</a></li>
                </ul>
              </div>

            </div>

            {/* Column 3: Our Hospitals, Locations, Contact & Social */}
            <div className="nelson-footer-col">
              <h3 className="nelson-footer-heading">Our Hospitals</h3>

              {/* Location 1: Nelson Hospital Dhantoli */}
              <div className="nelson-hospital-location-card">
                <div className="nelson-location-tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Dhantoli</span>
                </div>
                <div className="nelson-hospital-branch-name">Nelson Hospital</div>
                <div className="nelson-hospital-branch-address">
                  Plot no 32, near Spandan Hospital, Dhantoli Nagpur, Maharashtra 440012
                </div>
                <a href="tel:+919518951959" className="nelson-hospital-phone-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>9518951959</span>
                </a>
              </div>

              {/* Location 2: Central Brain & Spine Hospital */}
              <div className="nelson-hospital-location-card">
                <div className="nelson-location-tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Dhantoli</span>
                </div>
                <div className="nelson-hospital-branch-name">Central Brain &amp; Spine Hospital</div>
                <div className="nelson-hospital-branch-address">
                  Plot no 32, 7th floor, near Spandan Hospital, Dhantoli Nagpur, Maharashtra 440012
                </div>
                <a href="tel:+919518951959" className="nelson-hospital-phone-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>9518951959</span>
                </a>
              </div>

              {/* Location 3: Nelson Luxe Mother & Child Care */}
              <div className="nelson-hospital-location-card">
                <div className="nelson-location-tag">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Deshpande Layout</span>
                </div>
                <div className="nelson-hospital-branch-name">Nelson Luxe Mother &amp; Child Care Hospital</div>
                <div className="nelson-hospital-branch-address">
                  Central Avenue, Deshpande Layout, Adarsh Nagar, Nagpur, Maharashtra 440008
                </div>
                <a href="tel:+918669299990" className="nelson-hospital-phone-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>866 929 9990</span>
                </a>
              </div>

              {/* Email */}
              <div className="nelson-footer-email-row">
                <a href="mailto:info@nelsonhospitals.com" className="nelson-footer-email-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>info@nelsonhospitals.com</span>
                </a>
              </div>

              {/* Follow Us on Social */}
              <div className="nelson-footer-section-block">
                <div className="nelson-social-heading">Follow Us on</div>
                <div className="nelson-social-row">
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/nelsonmultispecialiesthospitals" 
                    target="_blank" 
                    rel="noreferrer"
                    className="nelson-social-icon-btn"
                    title="Facebook"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3h1.8l.3-2.1h-2.1V9.8c0-.6.2-1 1-1h1.1V6.9c-.2 0-.9-.1-1.7-.1-1.7 0-2.8 1-2.8 2.9v1.6h-1.8v2.1h1.8v5.3h2.7z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/nelsonhospital/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="nelson-social-icon-btn"
                    title="Instagram"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/nelsonhospitals/?viewAsMember=true" 
                    target="_blank" 
                    rel="noreferrer"
                    className="nelson-social-icon-btn"
                    title="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1v6.2h-2.7V9.8h2.6v1.2c.4-.6 1.1-1.4 2.5-1.4 1.8 0 3.2 1.2 3.2 3.8v5.1h-2.6zM6.9 8.5c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6zm1.3 10V9.8H5.6v8.7h2.6z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/channel/UCz0KAi2aHcpcXO8EWZCzWBw" 
                    target="_blank" 
                    rel="noreferrer"
                    className="nelson-social-icon-btn"
                    title="YouTube"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Floating Bird Mascot at bottom right */}
          <div className="nelson-footer-mascot-wrap" title="Dr. Nelsa - Nelson Hospital">
            <img 
              src="/dr_nelsa-img-1.png" 
              alt="Dr Nelsa Mascot" 
              className="nelson-footer-mascot-img" 
            />
          </div>

        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="nelson-footer-bottom-bar">
        <div className="nelson-footer-bottom-inner">
          <p>© {new Date().getFullYear()} All rights reserved by SMD HOSPITALS PRIVATE LIMITED</p>
          <p>Designed and Developed by Zappcode Innovations Pvt. Ltd.</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
