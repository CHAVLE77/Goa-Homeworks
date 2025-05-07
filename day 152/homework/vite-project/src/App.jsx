import React from "react"
import Input from "./input"
import Text from "./text"
import Elements from "./elements"
import Profile from "./profile"
import { useState } from 'react'
function App() {
  const [value,setValue] = useState('')
  let arr = ['first','sec','third','four','five']
   function func(e) {
    setValue(e.target.value)
  }
  return (
    <>
    {arr.map((el,index)=>[
      <h1 key={index}>{el}</h1>
    ])}
    <Text value = {value}/>
    <Input func = {func}/>
    <Elements />
    <Profile />
    </>
  )
}

export default App
