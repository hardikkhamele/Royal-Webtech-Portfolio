import React from 'react';

function About({ setCurrentPage }) {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="section-header">
        <span style={{ color: '#DC143C', fontWeight: 700, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
          About Nelson Multispeciality Hospital
        </span>
        <h1 className="section-title" style={{ fontSize: '36px', marginTop: '10px' }}>
          Central India’s Landmark Healthcare Institution
        </h1>
        <p className="section-subtitle">
          Dedicated to compassionate care, advanced medical technology, and clinical excellence.
        </p>
      </div>

      <div className="about-box">
        <p>
          Nelson Multispeciality Hospital is a full-fledged tertiary and quaternary care hospital established in Dhantoli, Nagpur. 
          With state-of-the-art diagnostic and therapeutic facilities, Nelson Hospital provides international standard healthcare at affordable costs.
        </p>
        <p>
          Our specialized centers encompass Advanced Trauma &amp; Joint Replacement, Neurosciences, Nelson Luxe Mother &amp; Child Care, 
          Pediatric Surgery, Laparoscopic Surgery, and 24x7 Critical Care.
        </p>
        <div className="bar-box">
          <strong>NABH Accredited Hospital:</strong> Upholding the highest patient safety and clinical care benchmarks in Central India.
        </div>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3>24x7 Emergency Care</h3>
          <p>Equipped with Level 1 trauma resuscitation, ultra-modern ambulance services, and round-the-clock emergency doctors.</p>
        </div>
        <div className="card">
          <h3>World-Class Infrastructure</h3>
          <p>Advanced modular laminar flow operation theatres, high-precision imaging, Level III NICU, and dedicated ICUs.</p>
        </div>
        <div className="card">
          <h3>Distinguished Specialists</h3>
          <p>Over 100+ highly qualified medical consultants, senior surgeons, and dedicated healthcare staff.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
