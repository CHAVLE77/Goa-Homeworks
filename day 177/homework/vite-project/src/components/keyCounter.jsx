import React, { useEffect, useState,useRef } from 'react'

const KeyCounter = () => {
    const [isFocused,setIsFocused] = useState(false)
    const [count,setCount] = useState(0)
    let countRef = useRef(count)

    useEffect(()=>{
        countRef.current = count
        console.log(countRef.current)
    },[count])

    useEffect(()=>{
        const handleCheck = ()=>{
            if(isFocused){
                setCount(prev=>prev+1)
            }
        }
        document.addEventListener('keydown',handleCheck)
        return () => document.removeEventListener('keydown',handleCheck)
    },[isFocused])
  return (
    <>
    <p>{count}</p>
    <input className='border' type="text" onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)} placeholder='enter any things'/>
    <button className='border block m-2 cursor-pointer' onClick={()=>console.log(count)}>Click</button>
    </>
)
}

export default KeyCounter