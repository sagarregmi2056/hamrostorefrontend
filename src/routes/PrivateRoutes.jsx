import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({Children}) => {
    const token = !!localStorage.getItem('token')
    return (
      // yadi token xaina vanya jun route access vairaxa tyai jaa natra home ma ladey
      token ? <>{Children}</> : <Navigate to={"/signin"}/>
    )
}

export default PrivateRoutes