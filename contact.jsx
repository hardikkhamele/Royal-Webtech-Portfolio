import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    Subject: '',   
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent to Advocate Prakash Jaiswal.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      Subject: '',
      message: ''
    });
  };

  return (
    <main className="main-content">
      <div className="container">

        <div className="section-header">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Advocate Prakash Jaiswal Office</p>
        </div>

        <div className="contact-grid">

          {/* Contact Details */}
          <div className="contact-info">
            <h3>Office Details</h3>

            <div className="contact-item">
              <h4>Address</h4>
              <p>
                Advocate Prakash Jaiswal,<br />
                Jaiswal Nivas, Gandhibagh Near Central Avenue,<br />
                Nagpur, Maharashtra, India.
              </p>
            </div>

            <div className="contact-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:adv.prakashjaiswalngp@jaiwallawfirm.com">
                  adv.prakashjaiswalngp@jaiwallawfirm.com
                </a>
              </p>
            </div>

            <div className="contact-item">
              <h4>Phone</h4>
              <p>+91-9371155111</p>
              <p>0712-2525252</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-box">
            <h3>Send Inquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
               
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Contact;
