import React from "react";
import ReactDOM from "react-dom/client";
// import Root from './Root.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root.jsx";
import Home from "./module/Home/Home.jsx";
import Signup from "./module/auth/signup/Signup.jsx";
import Signin from "./module/auth/signin/Signin.jsx";
import AuthProvider from "./context/auth/AuthProvider.jsx";
import Toaster from "./module/common/Toaster/Toaster.jsx";
import Toastprovider from "./context/Toaster/Toastprovider.jsx";
import About from "./module/About/About.jsx";
import Contact from "./module/Contact/Contact.jsx";
import BlockAuthRoutes from "./routes/BlockAuthRoutes.jsx";
import Dashboard from "./module/admin/Dashboard/Dashboard.jsx";
import Users from "./module/admin/Users/Users.jsx";

// import { LogIn } from 'lucide-react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: (
          <BlockAuthRoutes>
            {" "}
            <Signup />
          </BlockAuthRoutes>
        ),
      },

      {
        path: "signin",
        element: (
          <BlockAuthRoutes>
            <Signin />
          </BlockAuthRoutes>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "admin",
        element: <Dashboard />,
        children: [
          {
            path: "dashboard",
            element: <Home />,
          },
          {
            path: "users",
            element: <Users />,
          },
        ],
      },

      // {
      //   path: "userprofile/:userid",
      //   element: <Userprofile/>
      // },

      // {

      //   loader:githubinfoloader,
      //   path: "github",
      //   element: <Github/>,

      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toastprovider>
      <AuthProvider>
        <Toaster />
        {/* <BlockAuthRoutes>
  <RouterProvider router={router} />
  </BlockAuthRoutes> */}

        <RouterProvider router={router} />
      </AuthProvider>
    </Toastprovider>
    {/* <App /> */}
  </React.StrictMode>
);
