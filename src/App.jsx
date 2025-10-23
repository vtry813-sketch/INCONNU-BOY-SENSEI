import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connectDB } from './services/database.js';
import ChannelVerification from './components/ChannelVerification.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Api from './pages/Api.jsx';
import Welcome from './pages/Welcome.jsx';
import MiniBot from './pages/MiniBot.jsx';
import Contact from './pages/Contact.jsx';
import Analytics from './pages/Analytics.jsx';
import './styles/Futuristic.css';

function App() {
  const [dbConnected, setDbConnected] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await connectDB();
        setDbConnected(true);
      } catch (error) {
        console.error('Failed to connect to database:', error);
      }
    };

    initializeApp();
  }, []);

  const handleVerification = () => {
    setAccessGranted(true);
  };

  if (!accessGranted) {
    return <ChannelVerification onVerified={handleVerification} />;
  }

  return (
    <Router>
      <div className="futuristic-container">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/api" element={<Api />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/minibot" element={<MiniBot />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        
        <Footer />
        
        {!dbConnected && (
          <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgba(255,50,50,0.9)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '0.9rem'
          }}>
            ⚠️ Base de données hors ligne
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
