import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Login from './pages/login';
import ProtectedRoute from './pages/protectedroutes';
import Dashboard from './pages/dashboard';
import NotFound from './pages/notfound';

const App = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/');
  }
  return (
    <div className="custom-container">
      <div className="p-4 bg-blue-500 text-white">
        <h1 className="text-2xl">Welcome to my React app styled with Tailwind CSS!</h1>
        <button onClick={navigateToLogin}>Login</button>
        <p>Start building with Tailwind CSS now.</p>
      </div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Only accessible at root */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
    </div>
  );
};

export default App;
