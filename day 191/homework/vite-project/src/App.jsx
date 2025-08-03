import React from "react"
import Login from "./components/login"
import Signup from "./components/signup"
import { Link } from "react-router"
function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === "true"
  const name = localStorage.getItem('name')
  return (
    <>
    
    {isLoggedIn && 
    <div className="flex justify-center gap-5">
    <Link to={'/login'}>Logout</Link> 
    <b>Hello {name}</b>
    </div>}
    {!isLoggedIn && <div className="flex justify-center gap-5">
    <Link to={'/login'}>Login</Link>
    <Link to={'/signup'}>Sign Up</Link>
    </div>}
    </>
  )
}

export default App
