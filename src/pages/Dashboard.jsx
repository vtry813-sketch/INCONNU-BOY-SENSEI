import React, { useState, useEffect } from 'react';
import { trackUserAction, getAnalytics } from '../services/database.js';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    trackUserAction('visited_dashboard');
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await getAnalytics();
      setAnalytics(data);
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="futuristic-main">
        <h2 className="section-title">📊 Dashboard</h2>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <div className="pulse" style={{
            width: '50px',
            height: '50px',
            border: '3px solid var(--primary)',
            borderRadius: '50%',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '20px' }}>Chargement des données...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="futuristic-main">
      <h2 className="section-title">📊 Dashboard Analytics</h2>
      
      {analytics ? (
        <div className="feature-grid">
          <div className="feature-card">
            <h3>👥 Visites Total</h3>
            <p style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>
              {analytics.totalVisits}
            </p>
          </div>
          
          <div className="feature-card">
            <h3>🎯 Visiteurs Uniques</h3>
            <p style={{ fontSize: '2rem', color: 'var(--secondary)', fontWeight: 'bold' }}>
              {analytics.uniqueVisitors}
            </p>
          </div>
          
          <div className="feature-card">
            <h3>📈 Actions Populaires</h3>
            <div style={{ marginTop: '15px' }}>
              {analytics.popularActions.slice(0, 3).map((action, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                  padding: '5px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span>{action._id}</span>
                  <span style={{ color: 'var(--accent)' }}>{action.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--secondary)' }}>
          ❌ Impossible de charger les données analytics
        </div>
      )}
      
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <button onClick={loadAnalytics} className="btn-futuristic">
          🔄 Actualiser les Données
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
