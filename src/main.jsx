// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import
import App from './App';
import './styles/global.css'; // Import your global styles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Wrap Router or App */}
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
);