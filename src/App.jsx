import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { AuthProvider } from './Context/AuthContext'


export default function App() {
  let router = useRoutes(routes)
  return (
    <AuthProvider>
      <div className=' font-Dana'>
        {router}
      </div>
    </AuthProvider>
  )
}
