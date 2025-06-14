import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // ✅ Correct import
import { useAuth } from '../context/authcontext';
import { useContext } from 'react';
import { SearchContext } from '../context/searchvaluecontext';


const Login = () => {
  const { setSearchValue, searchValue } = useContext(SearchContext);
    const { login } = useAuth();
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential); // ✅ Correct usage
    login(decoded);
    console.log('User Info:', decoded);
  };
  

  return (
    <div>
      {searchValue}
      <h2>Login</h2>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log('Login Failed')} />
    </div>
  );
};

export default Login;
