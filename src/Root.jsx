import React, { useContext, useEffect } from 'react'


import { Outlet } from 'react-router-dom'
import Navbar from './module/common/Navbar/Navbar'
import Footer from './module/common/Footer/Footer';
import { jwtDecode } from "jwt-decode";
// import { LogOut } from 'lucide-react';
import { AuthContext } from './context/auth/AuthContext';
import { ToastContext } from './context/Toaster/ToastContext';
import axios from 'axios';
const apiurl = import.meta.env.VITE_API_URL;
// import default from './../tailwind.config';





 function Root ()  {
  const {logout} =useContext(AuthContext)
  const {showToast} =useContext(ToastContext)
  useEffect(()=>{
    reauthenticate()
  },[])

  const reauthenticate =()=>{
    let token = localStorage.getItem('token')
    if(token){
      let decode = jwtDecode(token);
      console.log(decode);
      if(decode?.exp>Math.floor(Date.now() /1000)){
        // authenticate
        getUserApi(token,decode);
      }else{
        showToast({show:true,title:'logout',message:'token expired'})
        logout()
      }
    }
  }




  const getUserApi= (token,decode)=>{

    axios.get(`${apiurl}//api/users/${decode._id}`.then(res=>{

    console.log(res.data);


    }).catch(err=>{
      showToast({show:true,title:'Error' , message: err.response?.data.error||'server error'})
      console.log(err)
      
    }))
    
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