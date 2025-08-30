import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Load current user from localStorage on initial load
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const register = useCallback((fullName, email, password) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user) => user.email === email)) {
      return { success: false, message: 'Email already registered.' };
    }
    const newUser = { id: Date.now(), fullName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, message: 'Registration successful!' };
  }, []);

  const login = useCallback((email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true, message: 'Logged in successfully!' };
    } else {
      return { success: false, message: 'Invalid email or password.' };
    }
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  }, []);

  const checkEmailExists = useCallback((email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some((user) => user.email === email);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        checkEmailExists,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 