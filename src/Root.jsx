import React from 'react'


import { Outlet } from 'react-router-dom'
import Navbar from './module/common/Navbar/Navbar'
import Footer from './module/common/Footer/Footer';





const Root = () => {
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