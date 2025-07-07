import React, { useState } from 'react'

const Todolist = () => {
    const [bool,setBool] = useState(false)
    const [value,setValue] = useState('')
    
    const handleDelete = ()=>{
        setBool(false)
        setValue('')
    }
    return (
    <>
    <input onChange={(e)=>setValue(e.target.value)} className='border m-2 h-9 p-2' type="text" placeholder='enter text'/>
    <button onClick={()=>setBool(true)} className='cursor-pointer m-2 w-20 h-9 border bg-black text-white font-bold'>Add</button>
    {bool && 
    <div className=' w-[70%] m-auto h-30 border'>
        <p className='m-5'>{value}</p>
        <button onClick={handleDelete} className='absolute w-20 h-9 bg-red-500 right-65 mt-2 cursor-pointer text-white font-bold'>Delete</button>
        </div>}
    </>
)
}

export default Todolist