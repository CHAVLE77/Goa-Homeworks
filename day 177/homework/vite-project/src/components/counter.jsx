import React, { useEffect, useState,useRef } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    let someRef = useRef(count)

    useEffect(()=>{
        someRef.current = count
    },[count])
    useEffect(()=>{
        const handleCount = ()=>{
            setCount(prev=>prev+1)
            console.log(someRef.current)
        }
        window.addEventListener('click',handleCount)
        return ()=> window.removeEventListener('click',handleCount)
    },[])
  return (
    <>
    <p>{count}</p>
    </>
)
}

export default Counter