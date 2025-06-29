import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const handleCount = ()=>{
            setCount(prev=>prev+1)
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