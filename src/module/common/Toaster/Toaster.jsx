import React, { useContext, useEffect, useState } from 'react'
import { ToastContext } from '../../../context/Toaster/ToastContext';

const Toaster = () => {

    const {type,title,message,show} =useContext(ToastContext)
    const [color,setcolor] = useState('blue')





    useEffect(()=>{
        if(type){
            if(type==="success"){
                setcolor('green')
            }
            else if(type=="error"){
                setcolor('red')
            }
            else if(type=="info"){
                setcolor('blue')
            }
        }
    },[type])


    const alertClasses = `bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded fixed top-0 right-0 z-20`;
  return (
       show&&<div className={alertClasses} role="alert">
    <strong className="font-bold mr-1">{title}</strong>
    <span className="block sm:inline">{message}</span>
    <span className="absolute  button-0   right-0 px-4 py-3">
        {/* <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg> */}
    </span>
</div>
  )
}

export default Toaster