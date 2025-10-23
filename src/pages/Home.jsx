import React, { useEffect } from 'react';
import { trackUserAction } from '../services/database.js';

const Home = () => {
  useEffect(() => {
    trackUserAction('visited_home');
  }, []);

  return (
    <div className="futuristic-main">
      <h1 className="section-title">🚀 BIENVENUE SUR {CONFIG.SITE_NAME}</h1>
      
      <div className="feature-grid">
        <div className="feature-card floating">
          <h3>🤖 Intelligence Artificielle</h3>
          <p>Technologies avancées d'IA et de machine learning pour des solutions innovantes.</p>
        </div>
        
        <div className="feature-card floating" style={{animationDelay: '0.5s'}}>
          <h3>🔧 Développement Web</h3>
          <p>Création de sites web modernes et applications avec les dernières technologies.</p>
        </div>
        
        <div className="feature-card floating" style={{animationDelay: '1s'}}>
          <h3>📊 Analytics en Temps Réel</h3>
          <p>Suivi et analyse des données en temps réel avec MongoDB.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>
          Technologies Utilisées
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <span style={{ padding: '10px 20px', background: 'rgba(0,240,255,0.1)', borderRadius: '20px', border: '1px solid var(--primary)' }}>
            React
          </span>
          <span style={{ padding: '10px 20px', background: 'rgba(255,0,255,0.1)', borderRadius: '20px', border: '1px solid var(--secondary)' }}>
            MongoDB
          </span>
          <span style={{ padding: '10px 20px', background: 'rgba(0,255,136,0.1)', borderRadius: '20px', border: '1px solid var(--accent)' }}>
            Node.js
          </span>
          <span style={{ padding: '10px 20px', background: 'rgba(0,240,255,0.1)', borderRadius: '20px', border: '1px solid var(--primary)' }}>
            CSS3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
