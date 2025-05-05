import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
name: '',
email: '',
message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({name: '', email: '', message: '' });
  };

  return (
    <div className='contact'>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Our Contact Information</h2>
          
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9090909090</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>contact@movieflix.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Address</h3>
              <p>123 Cinema Street,Hyderabad</p>
            </div>
          </div>
          
        
          </div>
        </div>
      </div>
      </div>
 
  );
};

export default ContactUs;