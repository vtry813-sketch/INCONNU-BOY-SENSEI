import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config.js';

const Header = () => {
  return (
    <header className="futuristic-header">
      <div className="header-glow"></div>
      <h1 className="site-title">{CONFIG.SITE_NAME}</h1>
      <p className="site-subtitle">FUTURISTIC TECHNOLOGY PLATFORM</p>
      
      <nav className="futuristic-nav">
        <Link to="/" className="nav-button">Accueil</Link>
        <Link to="/dashboard" className="nav-button">Dashboard</Link>
        <Link to="/api" className="nav-button">API</Link>
        <Link to="/welcome" className="nav-button">Welcome</Link>
        <Link to="/minibot" className="nav-button">Mini Bot</Link>
        <Link to="/analytics" className="nav-button">Analytics</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
