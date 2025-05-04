import React from "react"
import { useState } from "react"
import UserList from "./components/userList"
import Users from "./components/users"
function App() {
  const [arr,setArr] = useState([])

  return (
    <>
      <UserList callback = {() => setArr(['user1','user2','user3','user4'])}/>
      <Users text={arr}/>
    </>
  )
}

export default App
