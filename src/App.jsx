// src/App.js
import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { AuthProvider } from './Context/AuthContext'
import { CartProvider } from './Context/CartContext'
import { ThemeProvider } from '@mui/material/styles';
import theme from './them';

export default function App() {
  let router = useRoutes(routes)
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <div className='font-Dana'>
            {router}
          </div>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  )
}
