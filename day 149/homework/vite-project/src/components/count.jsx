import React, { use } from 'react'
import { useState } from 'react'
 const Count = () => {
  const [count,setCount] = useState(0)
  const [text,setText] = useState(true)
  function click(){
    setCount((e) =>e+1)
  }
  function change(){
    setText(el=>!el)
  }
    return (
    <>
    <p className='cursor-pointer' onClick={click}>count: {text ? count : 0}</p>
    <button onClick={change} className='w-20 h-7 cursor-pointer border'>{text ? 'ON' : 'OFF'}</button>
    </>
  )
}

export default Count
