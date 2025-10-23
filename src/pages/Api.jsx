import React, { useEffect } from 'react';
import { trackUserAction } from '../services/database.js';

const Api = () => {
  useEffect(() => {
    trackUserAction('visited_api');
  }, []);

  return (
    <div className="futuristic-main">
      <h2 className="section-title">🔌 API Services</h2>
      
      <div className="feature-grid">
        <div className="feature-card">
          <h3>🔄 API REST</h3>
          <p>Interfaces de programmation pour l'intégration de services.</p>
          <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontFamily: 'monospace' }}>
            GET /api/v1/users<br/>
            POST /api/v1/analytics<br/>
            PUT /api/v1/settings
          </div>
        </div>
        
        <div className="feature-card">
          <h3>📡 WebSocket</h3>
          <p>Connexions temps réel pour des mises à jour instantanées.</p>
          <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontFamily: 'monospace' }}>
            ws://api.inconnu-boy-sensei.com/real-time
          </div>
        </div>
        
        <div className="feature-card">
          <h3>🔐 Authentification</h3>
          <p>Système sécurisé d'authentification JWT.</p>
          <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontFamily: 'monospace' }}>
            Authorization: Bearer &lt;token&gt;
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <div className="feature-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3>🚧 API en Développement</h3>
          <p>Nos APIs sont actuellement en cours de développement. Revenez bientôt pour découvrir nos nouvelles fonctionnalités!</p>
          <div style={{ marginTop: '20px', color: 'var(--accent)' }}>
            ⏳ Disponible Prochainement...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
