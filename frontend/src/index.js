// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import { AuthProvider } from './context/authcontext.js';
import App from './App';  // Importing default export from App.js
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/searchvaluecontext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="378151057788-vrrj0qj230eencv931ivslcfdo88a821.apps.googleusercontent.com">
    <React.StrictMode>
      <AuthProvider>
      <SearchProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </SearchProvider>
      </AuthProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
