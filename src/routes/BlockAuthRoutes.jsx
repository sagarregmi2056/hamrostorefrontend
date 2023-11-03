import React from 'react'
import { Navigate } from 'react-router-dom'

const BlockAuthRoutes = ({Children}) => {
    // checking token or not only
    const token = !!localStorage.getItem('token')
  return (
    // yadi token xaina vanya jun route access vairaxa tyai jaa natra home ma ladey
    !token ? <>{Children}</> : <Navigate to={"/"}/>
  )
}

export default BlockAuthRoutes