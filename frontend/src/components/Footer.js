import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
            {/* About Section */}
            <div className="footer-section">
          <h3>MovieFlix</h3>
          <p>Your ultimate destination for the latest movies, showtimes, and bookings.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MovieFlix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
