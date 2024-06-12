// AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
import Swal from 'sweetalert2';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userInfo = localStorage.getItem('user');
    if (token && userInfo) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const login = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    Swal.fire({
      title: 'آیا مطمئنید که می‌خواهید خارج شوید؟',
      text: 'شما در حال خروج از حساب کاربری خود هستید',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله، خارج شو',
      cancelButtonText: 'لغو'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
        
        Swal.fire({
          title: 'خروج انجام شد',
          text: 'شما با موفقیت خارج شدید',
          icon: 'success',
          confirmButtonText: 'باشه'
        });
      }
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
