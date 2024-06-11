import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { AuthProvider } from './Context/AuthContext'
import { ThemeProvider } from '@mui/material/styles';
import theme from './them';


export default function App() {
  let router = useRoutes(routes)
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className=' font-Dana'>
          {router}
        </div>
      </ThemeProvider>

    </AuthProvider>
  )
}
