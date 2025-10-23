import React, { useEffect } from 'react';
import { trackUserAction } from '../services/database.js';

const Analytics = () => {
  useEffect(() => {
    trackUserAction('visited_analytics');
  }, []);

  return (
    <div className="futuristic-main">
      <h2 className="section-title">📈 Analytics Avancés</h2>
      
      <div className="feature-grid">
        <div className="feature-card">
          <h4>📊 Statistiques Temps Réel</h4>
          <p>Surveillance en direct des performances et de l'engagement utilisateur.</p>
          <div style={{ marginTop: '15px', color: 'var(--accent)' }}>
            🔄 Données mises à jour en temps réel
          </div>
        </div>
        
        <div className="feature-card">
          <h4>👤 Comportement Utilisateur</h4>
          <p>Analyse approfondie des parcours et interactions des visiteurs.</p>
          <div style={{ marginTop: '15px', color: 'var(--primary)' }}>
            🎯 Heatmaps et parcours clics
          </div>
        </div>
        
        <div className="feature-card">
          <h4>🚀 Performance Technique</h4>
          <p>Métriques de vitesse, disponibilité et qualité de service.</p>
          <div style={{ marginTop: '15px', color: 'var(--secondary)' }}>
            ⚡ Temps de chargement optimisés
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <div className="feature-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h3>🎛️ Tableau de Bord Analytics</h3>
          <p style={{ marginBottom: '20px' }}>
            Interface complète de suivi et d'analyse des données utilisateurs.
          </p>
          
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '20px', 
            borderRadius: '10px',
            border: '1px solid var(--primary)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>1,247</div>
                <div style={{ fontSize: '0.9rem' }}>Visites Aujourd'hui</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--secondary)', fontWeight: 'bold' }}>3:45</div>
                <div style={{ fontSize: '0.9rem' }}>Durée Moyenne</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>68%</div>
                <div style={{ fontSize: '0.9rem' }}>Taux de Rebond</div>
              </div>
            </div>
            
            <div style={{ 
              height: '200px', 
              background: 'linear-gradient(180deg, rgba(0,240,255,0.1), rgba(255,0,255,0.1))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
              padding: '10px'
            }}>
              {[40, 60, 80, 65, 75, 90, 70].map((height, index) => (
                <div key={index} style={{
                  width: '30px',
                  height: `${height}%`,
                  background: 'linear-gradient(to top, var(--primary), var(--secondary))',
                  borderRadius: '5px 5px 0 0'
                }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
