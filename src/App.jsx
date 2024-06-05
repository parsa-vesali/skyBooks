import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  let router = useRoutes(routes)
  return (
    <div className=' font-Dana'>
      {router}
    </div>
  )
}
