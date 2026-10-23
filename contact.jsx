import React, { useState } from 'react';

function Contact({ setCurrentPage }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="section-header">
        <span style={{ color: '#DC143C', fontWeight: 700, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
          Contact &amp; Appointments
        </span>
        <h1 className="section-title" style={{ fontSize: '36px', marginTop: '10px' }}>
          Book an Appointment / Get in Touch
        </h1>
        <p className="section-subtitle">
          We are available 24 hours a day, 7 days a week for emergency medical care and outpatient consultations.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Hospital Locations</h3>
          
          <div className="contact-item">
            <h4>Nelson Hospital (Main Branch)</h4>
            <p>Plot no 32, near Spandan Hospital, Dhantoli, Nagpur, Maharashtra 440012</p>
            <p><strong>Phone:</strong> <a href="tel:+919518951959">+91 95189 51959</a></p>
          </div>

          <div className="contact-item">
            <h4>Nelson Luxe Mother &amp; Child Care</h4>
            <p>Central Avenue, Deshpande Layout, Adarsh Nagar, Nagpur, Maharashtra 440008</p>
            <p><strong>Phone:</strong> <a href="tel:+918669299990">+91 866 929 9990</a></p>
          </div>

          <div className="contact-item">
            <h4>Central Brain &amp; Spine Hospital</h4>
            <p>Plot no 32, 7th Floor, Dhantoli, Nagpur, Maharashtra 440012</p>
            <p><strong>Phone:</strong> <a href="tel:+919518951959">+91 95189 51959</a></p>
          </div>

          <div className="contact-item">
            <h4>General Inquiries &amp; Email</h4>
            <p><a href="mailto:info@nelsonhospitals.com">info@nelsonhospitals.com</a></p>
          </div>
        </div>

        <div className="contact-form-box">
          <h3>Book an OPD Consultation</h3>
          {submitted ? (
            <div style={{ padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '6px' }}>
              Thank you! Your appointment request has been submitted. Our hospital desk will call you back shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Patient Full Name</label>
                <input type="text" required placeholder="Enter full name" />
              </div>
              <div className="form-group">
                <label>Contact Phone Number</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label>Select Department</label>
                <select required defaultValue="">
                  <option value="" disabled>Choose Department</option>
                  <option value="trauma">Advance Trauma &amp; Joint Replacement</option>
                  <option value="neuro">Neurosciences &amp; Neurology</option>
                  <option value="women">Women Care &amp; Maternity</option>
                  <option value="child">Child Care &amp; Pediatrics</option>
                  <option value="general-surgery">General Surgery &amp; Laparoscopy</option>
                  <option value="ent">ENT &amp; Cochlear Implant</option>
                  <option value="other">Other Specialties</option>
                </select>
              </div>
              <div className="form-group">
                <label>Brief Medical Query / Symptoms</label>
                <textarea rows="3" placeholder="Describe symptoms or request specific doctor..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#DC143C', border: 'none', width: '100%' }}>
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
