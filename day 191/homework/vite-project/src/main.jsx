import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
let router = createBrowserRouter([
  {path:'/',Component:App},
  {path:'/login',Component:Login},
  {path:'/signup',Component:Signup}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
