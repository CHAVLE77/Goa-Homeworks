import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './components/index.jsx'
import Settings from './components/settings.jsx'
import Contact from './components/contact.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Result from './components/result.jsx'
let router = createBrowserRouter([
  {path:'/',Component:App},
  {path:'/settings',Component:Settings},
  {path:'/contact',Component:Contact},
  {path:'/users/:id',Component:Result}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
