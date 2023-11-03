import React from 'react'
import { Navigate } from 'react-router-dom'

const BlockAuthRoutes = ({children}) => {
    // checking token or not only
    const token = !!localStorage.getItem('token');
    console.log(`here is a ${token}`);
  return (
    
    // yadi token xaina vanya jun route access vairaxa tyai jaa natra home ma ladey
    !token ? <>{children}</> : <Navigate to={"/"} />
  )
}

export default BlockAuthRoutes