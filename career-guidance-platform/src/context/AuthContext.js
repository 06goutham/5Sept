import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'student' or 'admin'

  const login = (userData, role) => {
    setUser(userData);
    setUserRole(role);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('userRole', role);
  };

  const logout = () => {
    setUser(null);
    setUserRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
  };

  const value = {
    user,
    isAuthenticated,
    userRole,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
