import React, { useContext, useEffect } from 'react'


import { Outlet } from 'react-router-dom'
import Navbar from './module/common/Navbar/Navbar'
import Footer from './module/common/Footer/Footer';
import { jwtDecode } from "jwt-decode";
// import { LogOut } from 'lucide-react';
// import {jwt_decode} from 'jwt-decode';
import { AuthContext } from './context/auth/AuthContext';
import { ToastContext } from './context/Toaster/ToastContext';
import axios from 'axios';
const apiurl = import.meta.env.VITE_API_URL;
// import default from './../tailwind.config';





 function Root ()  {
  const {logout,login} =useContext(AuthContext)
  const {showToast} =useContext(ToastContext)
  useEffect(()=>{
    reauthenticate()
  },[])

  const reauthenticate = () => {
    let token = localStorage.getItem('token');
    if (token) {
      let decode = jwtDecode(token);
      console.log(decode);
      if (decode?.exp > Math.floor(Date.now() / 1000)) {
        //authenticated
        getUserApi(token, decode)
      } else {
        //logout
        showToast({ show: true, title: 'Logout', message: 'Token Expired', type: 'error' })
        logout()
      }
    }

  }
 


  const getUserApi = (token, decode) => {
    axios.get(`${ apiurl}/api/users/${decode._id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log(res.data);
      showToast({ show: true, title: 'Welcome Back', message: 'Login Success', type: 'success' })
      login({ token, user: res.data })
    }).catch(err => {
      showToast({ show: true, title: 'Error', message: err.response?.data.error || 'Server Error', type: 'error' })
      console.log(err);
    })
  }

    return (
     <>
      <Navbar/>
      {/* the outlet here is a changing proprty */}
      <Outlet/>
      <Footer/>
     </>
    )
  }
  
  export default Root