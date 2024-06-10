import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // اطلاعات کاربر

  // چک کردن وضعیت ورود از طریق localStorage یا هر روش دیگر
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      // اطلاعات کاربر را از سرور دریافت و در متغیر user ذخیره کنید
      // مثال: axios.get('https://api.example.com/user', { headers: { Authorization: `Bearer ${token}` }})
      //   .then(response => {
      //     setUser(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching user data:', error);
      //   });
    }
  }, []);

  // توابعی برای ورود و خروج
  const login = () => {
    setIsAuthenticated(true);
    // در صورت نیاز، اطلاعات کاربر را از سرور دریافت و در متغیر user ذخیره کنید
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null); // حذف اطلاعات کاربر پس از خروج
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
