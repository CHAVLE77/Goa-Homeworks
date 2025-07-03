import React, { useEffect, useContext, useState } from 'react'
import { ColorContext } from '../App'
const Home = () => {
    const [count,setCount] = useState(0)
    const [click,setClick] = useState(false)
    let {color,setColor } = useContext(ColorContext)

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color]);


    useEffect(()=>{
        localStorage.setItem('count',count)
    },[count])
    
  return (
    <>
    <div className='flex justify-center items-center h-[600px] flex-col'>
    <p className={`text-5xl ${click && 'text-white'}`}>{count}</p>
    <div className='flex gap-3 mt-10'>
    <button onClick={()=>setCount(prev=>prev+1)} className='ml-1 bg-blue-400 px-8 rounded-lg hover:bg-blue-500 cursor-pointer py-3 text-white'>Increment</button>
    <button onClick={()=>setCount(prev=>prev-1)} className='ml-1 bg-blue-400 px-8 rounded-lg hover:bg-blue-500 cursor-pointer py-3 text-white'>Decrement</button>
    </div>
    </div>
    <button onClick={()=>{
          setClick(prev=>!prev)
          setColor(prev => prev === '#121212' ? '#ffffff' : '#121212')
    }} className={`absolute top-0 right-0 m-10 w-19 h-9 rounded-4xl shadow-md cursor-pointer ${click ? 'bg-[#202020]' : 'bg-gray-200'}`}>
        <div className={`w-8 h-8 rounded-2xl ${click ? 'bg-[#474646]' : 'bg-white'} transition duration-500  transform ${click && 'translate-x-10'}`}></div>
    </button>
    </>
)
}

export default Home