import React, { useState } from 'react'

const Index = () => {
    const [value,setValue] = useState('')
    const [div,setDiv] = useState([])
    const [redo,setRedo] = useState([])
    const handleClick = ()=>{
        if(value.length !==0){
            setDiv([...div,value])
        }
    }

    const handleUndo = ()=>{
        let last = div[div.length - 1]
        setDiv(div.slice(0,-1))
        setRedo([...redo,last])
    }
    const handleRedo = () => {
        let last = redo[redo.length - 1]
        setDiv([...div,last])
    }
  return (
    <>
    <input className='border m-2' onChange={(e)=>setValue(e.target.value)} type="text" placeholder='enter text' />
    <button onClick={handleClick} className='w-20 cursor-pointer h-7 bg-black text-white font-bold'>Enter</button>
    <div>
    <button onClick={handleUndo} className='m-2 border bg-red-500 hover:bg-red-600 text-white w-20 h-9 cursor-pointer'>undo</button>
    <button onClick={handleRedo} className='m-2 border bg-green-500 hover:bg-green-600 text-white w-20 h-9 cursor-pointer'>redo</button>
    </div>
    {div.map((el,index)=>(
        <p className='text-2xl m-2' key={index}>text:{el}</p>
    ))}
    </>
)
}

export default Index