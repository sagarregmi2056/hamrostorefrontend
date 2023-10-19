import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



import Root from './Root.jsx'
import Home from './module/Home/Home.jsx'
import Signup from './module/auth/signup/Signup.jsx'



const router = createBrowserRouter([

  {
    path:'/',
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'signup',
        element: <Signup/>
      },
      // {
      //   path:'about',
      //   element:<About/>
      // },
      // {
      //   path:'contact',
      //   element:<Contact/>
      // },

      // {
      //   path: "userprofile/:userid",
      //   element: <Userprofile/>
      // },

      // {

      //   loader:githubinfoloader,
      //   path: "github",
      //   element: <Github/>,
       


      // },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
