import React, { useEffect } from 'react';
import { trackUserAction } from '../services/database.js';

const Welcome = () => {
  useEffect(() => {
    trackUserAction('visited_welcome');
  }, []);

  return (
    <div className="futuristic-main">
      <h2 className="section-title">👋 Page de Bienvenue</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          width: '150px',
          height: '150px',
          margin: '0 auto 30px',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          boxShadow: 'var(--neon-glow)'
        }}>
          🎯
        </div>
        
        <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>
          Bienvenue sur {CONFIG.SITE_NAME}
        </h3>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Plateforme technologique avancée dédiée au développement innovant 
          et aux solutions futuristes. Explorez nos services et découvrez 
          l'avenir de la technologie.
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h4>🎯 Notre Mission</h4>
          <p>Révolutionner l'expérience utilisateur avec des technologies de pointe.</p>
        </div>
        
        <div className="feature-card">
          <h4>⚡ Performance</h4>
          <p>Optimisation maximale pour des temps de chargement ultra-rapides.</p>
        </div>
        
        <div className="feature-card">
          <h4>🔒 Sécurité</h4>
          <p>Protection avancée des données et confidentialité garantie.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="/dashboard" className="btn-futuristic">
          Commencer l'Exploration 🚀
        </a>
      </div>
    </div>
  );
};

export default Welcome;
