import React from 'react';

function Home({ setCurrentPage }) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Advocate Prakash Jaiswal</h1>
          <p className="hero-subtitle">Trusted Criminal Lawyer in Nagpur, Maharashtra</p>
          <p className="hero-description">
            Providing legal representation and defense for complex criminal cases. 
            Dedicated to justice, ethical legal practice, and protecting the rights of clients.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => setCurrentPage('about')}
            >
              About Me
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => setCurrentPage('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Areas of Practice</h2>
            <p className="section-subtitle">Legal services and criminal defense matters</p>
          </div>

          <div className="cards-grid">
            <div className="card">
              <h3>Criminal Defense</h3>
              <p>
                Defense against criminal charges, bail proceedings, and trial representation in court.
              </p>
            </div>

            <div className="card">
              <h3>Court Representation</h3>
              <p>
                Appearing and presenting arguments in Sessions Courts, District Courts, and High Court.
              </p>
            </div>

            <div className="card">
              <h3>Legal Advice</h3>
              <p>
                Providing clear legal counsel and strategic advice for individuals facing legal issues.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;