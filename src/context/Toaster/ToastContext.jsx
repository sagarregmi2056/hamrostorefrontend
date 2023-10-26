import { createContext } from "react"

export const ToastContext = createContext({

    // constructur jasari use garau 
   show:false,
   title:'',
   message:'',
   type:'',
   showToast:()=>{}

})