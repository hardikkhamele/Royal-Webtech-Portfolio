import React from 'react';

function About() {
  return (
    <main className="main-content">
      <div className="container">
        
        <div className="section-header">
          <h1 className="section-title">About Advocate Prakash Jaiswal</h1>
          <p className="section-subtitle">Criminal Lawyer in Nagpur, Maharashtra</p>
        </div>

        {/* Bio Box */}
        <div className="about-box">
          <p>
            Advocate Prakash Jaiswal is a renowned criminal lawyer based in Nagpur, Maharashtra. 
            With years of experience in handling complex criminal cases, he has built a reputation for his dedication, 
            expertise, and commitment to justice. His practice covers a wide range of criminal law matters, including defense 
            against criminal charges, legal representation in court, and providing legal advice to clients.
          </p>

          <div className="bar-box">
            <strong>Bar Association Membership:</strong> Member of the Bar Association, Advocate Prakash Jaiswal is known 
            for his ethical approach to legal practice and his unwavering support for his clients.
          </div>
        </div>

        {/* Key Highlights */}
        <div className="section-header">
          <h2 className="section-title">Legal Practice Highlights</h2>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h3>Defense Against Charges</h3>
            <p>
              Dedicated defense strategy for complex criminal cases and trial representation.
            </p>
          </div>

          <div className="card">
            <h3>Court Representation</h3>
            <p>
              Representing clients across all levels of criminal courts with an ethical approach.
            </p>
          </div>

          <div className="card">
            <h3>Legal Consultation</h3>
            <p>
              Providing practical advice and guidance for clients and their families.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default About;


