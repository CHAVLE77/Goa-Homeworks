import React, { useEffect, useState,useRef } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    const [check,setCheck] = useState('')
    let prevRef = useRef(null)
    useEffect(()=>{
        if(prevRef.current < count){
            setCheck('up')
        }else if(prevRef.current > count){
            setCheck('down')
        }
        prevRef.current = count 
    },[count])
  return (
    <>
    <p>useState:{count}</p>
    <p>useRef:{prevRef.current}</p>
    <p>{check}</p>
    <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
    <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>

    </>
)
}

export default Counter