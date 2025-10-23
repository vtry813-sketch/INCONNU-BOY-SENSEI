import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config.js';
import { trackUserAction } from '../services/database.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    trackUserAction('visited_contact');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackUserAction('contact_form_submitted', formData);
    alert('Message envoyé! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="futuristic-main">
      <h2 className="section-title">📞 Contact</h2>
      
      <div className="feature-grid">
        <div className="feature-card">
          <h3>📱 Contact Direct</h3>
          <div style={{ marginTop: '20px' }}>
            <a 
              href={`https://t.me/${CONFIG.TELEGRAM}`} 
              className="contact-link"
              style={{ display: 'block', marginBottom: '15px', textAlign: 'center' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram: {CONFIG.TELEGRAM}
            </a>
            
            <a 
              href={`mailto:${CONFIG.GMAIL}`}
              className="contact-link"
              style={{ display: 'block', marginBottom: '15px', textAlign: 'center' }}
            >
              Email: {CONFIG.GMAIL}
            </a>
          </div>
        </div>
        
        <div className="feature-card">
          <h3>📧 Formulaire de Contact</h3>
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid var(--primary)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid var(--primary)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid var(--primary)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>
            
            <button type="submit" className="btn-futuristic" style={{ width: '100%' }}>
              📤 Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
