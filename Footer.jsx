import React from 'react';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* About Summary */}
        <div className="footer-col">
          <h4>Advocate Prakash Jaiswal</h4>
          <p>
            Renowned criminal lawyer based in Nagpur, Maharashtra. 
            Providing legal counsel and courtroom representation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p><strong>Address:</strong> Jaiswal Nivas, Near Central Avenue, Nagpur, Maharashtra, India.</p>
          <p><strong>Phone:</strong> +91-9371155111, 0712-2525252</p>
          <p><strong>Email:</strong> adv.prakashjaiswal@jaiwallawfirm.com</p>

          {/* Social Links */}
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Advocate Prakash Jaiswal Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
