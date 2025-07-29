import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Error from './components/error.jsx'
import Index from './components/index.jsx'

const router = createBrowserRouter([
  {path:'/',Component:App},
  {path:'/error',Component:Error},
  {path:'/index',Component:Index}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
