import React from 'react';
import { CONFIG } from '../config.js';

const Footer = () => {
  return (
    <footer className="futuristic-footer">
      <div className="contact-links">
        <a href={`https://t.me/${CONFIG.TELEGRAM}`} className="contact-link" target="_blank" rel="noopener noreferrer">
          <span>📱</span> Telegram: {CONFIG.TELEGRAM}
        </a>
        <a href={`mailto:${CONFIG.GMAIL}`} className="contact-link">
          <span>📧</span> Gmail: {CONFIG.GMAIL}
        </a>
        <a href={CONFIG.MINI_BOT_URL} className="contact-link" target="_blank" rel="noopener noreferrer">
          <span>🤖</span> Mini Bot
        </a>
      </div>
      
      <p style={{ marginTop: '20px', color: 'var(--primary)' }}>
        &copy; 2024 {CONFIG.SITE_NAME}. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
