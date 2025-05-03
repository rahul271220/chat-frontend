// 1. Import React hooks
import React, { createContext, useContext, useState, useEffect } from 'react';


// 2. Create a context object
const AuthContext = createContext();

// 3. Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // login status
  const [user, setUser] = useState(null); // store user info if needed

  // 4. Login function
  const login = (userData) => {
    console.log(userData);
    setIsAuthenticated(true);
    setUser(userData);
    console.log(user);
  };

  useEffect(() => {
    console.log("User updated:", user);
    localStorage.setItem('userDetail' ,JSON.stringify(user));
  }, [user]);
  

  // 5. Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  // 6. Provide values to all children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 7. Custom hook to easily use the context
export const useAuth = () => {
  return useContext(AuthContext);
};
