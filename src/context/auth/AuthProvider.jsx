import React, { useState } from 'react'
import {AuthContext} from './AuthContext'



// after setting up everything we gonna use it on main function
const AuthProvider = ({children}) => {

    const [isAutheticated,setAuthenticated] = useState(false);
    const [user,setuser]= useState(null);

    const login =(userData)=>{
        localStorage.setItem("token",userData.token)
        setAuthenticated(true);
        setuser(userData.user);

    }
    
    const logout =(userData)=>{
        localStorage.removeItem("token",userData.token)
        setAuthenticated(true);
        setuser(null);
        
    }

    const updatevalue = {
        isAutheticated,
        user,
        login,
        logout
    }
  return (
   <AuthContext.provider value={updatevalue}>

   {children}


   </AuthContext.provider>
  )
}

export default AuthProvider