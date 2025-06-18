import React,{use, useState,useRef} from 'react'

const Comparison = () => {
    const [render,setRender] = useState(0)
    const [useCount,setUseCount] = useState(0)
    let count = 0
    let countRef = useRef(0)
  return (
    <>
    <p>{count}</p>
    <button className='border m-2 cursor-pointer' onClick={()=>count+=1}>click</button><br />
    <button className='border m-2 cursor-pointer' onClick={()=>console.log(count)}>console</button><br />
    <button className='border m-2 cursor-pointer' onClick={()=>setRender(prev=>prev+1)}>render</button>

    <p>{count}</p>
    <button className='border m-2 cursor-pointer' onClick={()=>countRef.current+=1}>click</button><br />
    <button className='border m-2 cursor-pointer' onClick={()=>console.log(countRef)}>console</button><br />
    <button className='border m-2 cursor-pointer' onClick={()=>setRender(countRef.current+=1)}>render</button>

    <p>{useCount}</p>
    <button className='border m-2 cursor-pointer' onClick={()=>setUseCount(prev=>prev+1)}>click</button><br />
    <button className='border m-2 cursor-pointer' onClick={()=>console.log(useCount)}>console</button><br />
    <button className='border m-2 cursor-pointer' onClick={()=>setUseCount(prev=>prev+1)}>render</button>
    </>
)
}

export default Comparison