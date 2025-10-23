import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config.js';
import { trackUserAction } from '../services/database.js';

const ChannelVerification = ({ onVerified }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('youtubeVerified') === 'true';
    setIsVerified(verified);
    if (verified) {
      onVerified();
    }
  }, [onVerified]);

  const handleVerification = () => {
    localStorage.setItem('youtubeVerified', 'true');
    setIsVerified(true);
    setShowSuccess(true);
    trackUserAction('youtube_channel_followed');
    
    setTimeout(() => {
      onVerified();
    }, 2000);
  };

  if (isVerified) return null;

  return (
    <div className="verification-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(5, 5, 16, 0.95)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div className="verification-content" style={{
        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 255, 0.1))',
        border: '2px solid var(--primary)',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        maxWidth: '500px',
        boxShadow: 'var(--neon-glow)'
      }}>
        <h2 style={{ color: 'var(--accent)', marginBottom: '20px' }}>
          🔔 ACCÈS CONDITIONNEL
        </h2>
        
        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
          Vous devez suivre la chaîne YouTube officielle avant d'accéder au site
        </p>
        
        <div style={{ marginBottom: '30px' }}>
          <a 
            href={CONFIG.YOUTUBE_CHANNEL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-futuristic"
            style={{ marginBottom: '15px' }}
          >
            📺 Suivre la Chaîne YouTube
          </a>
        </div>
        
        <button 
          onClick={handleVerification}
          className="btn-futuristic"
          disabled={showSuccess}
        >
          {showSuccess ? '✅ Accès Autorisé - Redirection...' : '🔓 J\'ai Suivi - Accéder au Site'}
        </button>
        
        {showSuccess && (
          <div style={{
            marginTop: '20px',
            color: 'var(--accent)',
            animation: 'pulse 2s infinite'
          }}>
            ✅ Vérification réussie! Accès autorisé...
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelVerification;
