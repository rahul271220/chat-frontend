// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext.js'
import { loginContext } from '../context/loginContext.js';
import { useContext } from 'react';

function ProtectedRoute({ children }){
  const { isLogin } = useContext(loginContext);

  return isLogin ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
