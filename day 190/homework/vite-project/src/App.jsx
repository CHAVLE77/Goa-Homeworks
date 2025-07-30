import React from "react"
import Index from "./components"
import Users from "./components/users"
import Cards from "./components/cards"
import { Link } from "react-router"
function App() {
  return (
    <>
    <br />
    <Index />
    <Link to={'/frontend-mentor'} className="font-bold absolute right-10 top-7">Frontend Mentor</Link>
    <br />
    <br />
    <br />
    <Users/>      
    </>
  )
}

export default App
