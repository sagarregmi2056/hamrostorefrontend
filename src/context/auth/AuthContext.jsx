// we have there two file to make a global variable yaha chai hami defination dinxau  flobal varible ko





// flow of state change
// global->isauth,user

// Router
// App
// Navbar----->reflection 

// Footer 
// outlet
//  homepage 
// signup 
// login --------->login state change


import { createContext } from "react"
// import { Router } from "react-router-dom"
// import App from "../../App"

export const AuthContext = createContext({

    // constructur jasari use garau 
    isAuthenticated: false,
    user:null,

    // functional change haru k k xan ta 

    login:()=>{

    },

    logout:()=>{

    }

})