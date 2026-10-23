import React, { useState, useEffect } from 'react';

function Home({ setCurrentPage }) {
  const words = ['नेल्सन हॉस्पिटल', 'Nelson Hospital', 'Leading Care in Central India'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timer;

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const delta = isDeleting ? 40 : 90;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <>
      {/* Hero Section matching Nelson Hospital Landing Page */}
      <section className="nelson-hero">
        <video 
          className="nelson-hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/baby.png"
        >
          <source src="https://nelsonhospitals.com/wp-content/uploads/2026/06/website-video-1-1.mp4" type="video/mp4" />
        </video>
        <div className="nelson-hero-overlay"></div>

        <div className="nelson-hero-content">
          <h1 className="nelson-hero-title">
            <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </h1>
          <p className="nelson-hero-subtitle">
            Central India's Premier Multispeciality Healthcare & Research Destination
          </p>
        </div>

        {/* 3 Quick Action Cards at the Bottom of Hero */}
        <div className="nelson-hero-bar-wrap">
          <div className="nelson-hero-bar">
            <button 
              className="nelson-hero-btn light-btn"
              onClick={() => setCurrentPage('contact')}
            >
              <span>Book Appointment</span>
              <svg className="btn-arrow" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>

            <button 
              className="nelson-hero-btn pink-btn"
              onClick={() => setCurrentPage('health-packages')}
            >
              <span>Health Packages</span>
              <svg className="btn-arrow" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>

            <button 
              className="nelson-hero-btn light-btn"
              onClick={() => setCurrentPage('hospital-dhantoli')}
            >
              <span>Our Hospitals</span>
              <svg className="btn-arrow" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dr. Nelsa Mascot floating on bottom right */}
        <div className="nelson-floating-mascot" title="Hello, I am Dr. Nelsa!">
          <img src="/dr_nelsa-img-1.png" alt="Dr Nelsa Mascot" />
        </div>
      </section>

      {/* Hospital Key Specialties */}
      <main className="main-content">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#DC143C', fontWeight: 700, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1.5px' }}>
              Centers of Excellence
            </span>
            <h2 className="section-title" style={{ fontSize: '32px', marginTop: '8px' }}>
              World-Class Clinical Care & Specialities
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
              Advanced healthcare delivered with compassion, modern infrastructure, and NABH-accredited medical standards.
            </p>
          </div>

          <div className="cards-grid">
            <div className="card specialty-card">
              <div className="specialty-badge">Emergency & ICU</div>
              <h3>Advanced Trauma & Joint Replacement</h3>
              <p>
                24x7 emergency polytrauma care, robotic knee and hip replacements, arthroscopy, and complex fracture management.
              </p>
            </div>

            <div className="card specialty-card">
              <div className="specialty-badge">Neuroscience</div>
              <h3>Neurosciences & Neurosurgery</h3>
              <p>
                Comprehensive brain and spine surgery, stroke management, neuro-intensive care, and advanced rehabilitation.
              </p>
            </div>

            <div className="card specialty-card">
              <div className="specialty-badge">Mother & Child</div>
              <h3>Nelson Luxe Mother & Child Care</h3>
              <p>
                High-risk obstetrics, painless deliveries, Level III NICU, pediatric surgery, and holistic neonatal support.
              </p>
            </div>

            <div className="card specialty-card">
              <div className="specialty-badge">Surgical Care</div>
              <h3>General & Laparoscopic Surgery</h3>
              <p>
                Minimally invasive keyhole surgeries, hernia repairs, gastrointestinal procedures with fast recovery times.
              </p>
            </div>

            <div className="card specialty-card">
              <div className="specialty-badge">Speciality</div>
              <h3>ENT & Cochlear Implant Center</h3>
              <p>
                Microscopic ear surgery, speech therapy, sinusitis care, and certified pediatric cochlear implants.
              </p>
            </div>

            <div className="card specialty-card">
              <div className="specialty-badge">Diagnostics</div>
              <h3>Pathology & Radiology (24/7)</h3>
              <p>
                Cutting-edge multi-slice CT, high-definition ultrasound, digital X-ray, and automated diagnostic pathology.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
