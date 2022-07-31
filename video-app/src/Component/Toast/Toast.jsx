import React from 'react'
import "./Toast.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Toast = () => {
  return (
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
  )
}

export default Toast