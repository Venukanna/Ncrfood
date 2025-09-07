// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">NCR Healthy Energy</h3>
          <p className="footer-text">Fuel Your Body Right with our natural protein bars and supplements</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/products" className="footer-link">Products</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Info</h3>
          <address className="contact-info">
            <p className="contact-item">
              <i className="fas fa-phone contact-icon"></i> +91 7601095128
            </p>
            <p className="contact-item">
              <i className="fas fa-envelope contact-icon"></i> ncrnaturalproteinsupplements@gmail.com
            </p>
            <p className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i> Kaveri Nagar, 2nd Main Road, MV Extension, Hoskote, Bangalore - 562114
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
          <Link to="/terms" className="legal-link">Terms & Conditions</Link>
          <Link to="/shipping" className="legal-link">Shipping Policy</Link>
          <Link to="/refund" className="legal-link">Refund Policy</Link>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} NCR Healthy Energy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;