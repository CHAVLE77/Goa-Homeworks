import React from "react"
import { useState } from "react"
import Profilecard from "./components/profilecard"
import Avatar from "./components/avatar"
import Name from "./components/name"
import Desc from "./components/desc"
import Productlist from "./components/productlist"
import Userstatus from "./components/userstatus"
import Studentcard from "./components/studentcard"
function App() {
  const [str,setStr] = useState("")

function func(e){
    setStr(e.target.value)
  } 

  let arr = [{ id: 1, name: 'Laptop', price: 1200, inStock: true }]
  return (
    <>
    <Profilecard avatar={<Avatar />} name1={<Name />} desc = {<Desc />}/>
    <Productlist product = {arr}/>
    <Userstatus loggedIn = {str}/>
    <Studentcard />
    <input onChange={func} className='border m-5 p-1' type="text" placeholder='are you logged in?'/>
    </>
  )
}

export default App





