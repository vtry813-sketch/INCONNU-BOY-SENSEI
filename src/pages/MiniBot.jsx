import React, { useEffect } from 'react';
import { CONFIG } from '../config.js';
import { trackUserAction } from '../services/database.js';

const MiniBot = () => {
  useEffect(() => {
    trackUserAction('visited_minibot');
  }, []);

  const handleBotRedirect = () => {
    trackUserAction('clicked_minibot_link');
    window.open(CONFIG.MINI_BOT_URL, '_blank');
  };

  return (
    <div className="futuristic-main">
      <h2 className="section-title">🤖 Mini Bot</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          width: '120px',
          height: '120px',
          margin: '0 auto 30px',
          background: 'linear-gradient(45deg, var(--accent), var(--primary))',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          boxShadow: 'var(--neon-glow)',
          animation: 'pulse 2s infinite'
        }}>
          🤖
        </div>
        
        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>
          Accéder au Mini Bot
        </h3>
        <p style={{ marginBottom: '30px' }}>
          Notre assistant intelligent vous attend. Cliquez sur le bouton ci-dessous pour commencer.
        </p>
        
        <button onClick={handleBotRedirect} className="btn-futuristic" style={{ fontSize: '1.2rem' }}>
          🚀 Lancer le Mini Bot
        </button>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h4>💬 Chat Intelligent</h4>
          <p>Conversations naturelles avec intelligence artificielle avancée.</p>
        </div>
        
        <div className="feature-card">
          <h4>⚡ Réponses Rapides</h4>
          <p>Temps de réponse optimisé pour une expérience fluide.</p>
        </div>
        
        <div className="feature-card">
          <h4>🔧 Multi-Fonctions</h4>
          <p>Capacités variées adaptées à vos besoins spécifiques.</p>
        </div>
      </div>
    </div>
  );
};

export default MiniBot;
