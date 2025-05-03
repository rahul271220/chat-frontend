import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // ✅ Correct import
import { useAuth } from '../context/authcontext';


const Login = () => {

    const { login } = useAuth();
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential); // ✅ Correct usage
    login(decoded);
    console.log('User Info:', decoded);
  };

  return (
    <div>
      <h2>Login</h2>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log('Login Failed')} />
    </div>
  );
};

export default Login;
