// src/pages/Contact/Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import ContactForm from '../../components/ContactForm/ContactForm';
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact NCR | Healthy Energy Supplements</title>
        <meta 
          name="description" 
          content="Have questions about our products? Contact NCR Healthy Energy for inquiries and feedback." 
        />
      </Helmet>

      <main className="contact-page">
        <section className="contact-header">
          <h1>Contact Us</h1>
          <p>Have a question or feedback for us? Feel free to reach out. We'd love to hear from you.</p>
        </section>

        <section className="contact-content">
          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been submitted successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <ContactForm onSubmit={handleSubmit} />
            )}
          </div>

          <div className="contact-info-container">
            <h2>Our Details</h2>
            <div className="contact-info-item">
              <FaPhone className="contact-icon" />
              <span>+91 9963662332</span>
            </div>
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <span>ncrnaturalproteinsupplements@gmail.com</span>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <address>
                Kaveri Nagar, 2nd Main Road,<br />
                MV Extension, Hoskote,<br />
                Bangalore - 562114
              </address>
            </div>
            
            <div className="social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;