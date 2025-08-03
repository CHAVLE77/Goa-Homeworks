import React, { useState } from 'react'
import { Link } from 'react-router'

const Signup = () => {
  const [nameVal,setNameVal] = useState('')
  const [passVal,setPassVal] = useState('')
  const [descVal,setDescVal] = useState('')

  function handleCheck() {
    if(nameVal.trim() && passVal.trim() && descVal.trim()){
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('name',nameVal)
      localStorage.setItem('pass',passVal)
    }else{
      localStorage.setItem('isLoggedIn','false')
    }
  }
  const isLoggedIn = localStorage.getItem('isLoggedIn') === "true"

  return (
    <>
    <div className='w-[300px] mt-10 m-auto h-[450px] border'>
    <form className='flex flex-col gap-2 items-center'>
    <input onChange={(e)=>setNameVal(e.target.value)} type="text" className='w-[80%] mt-10 h-10 border p-2' placeholder='name'/>
    <input onChange={(e)=>setPassVal(e.target.value)} type="password" className='w-[80%] h-10 border p-2' placeholder='password'/>
    <div className='flex gap-2'>
    <label htmlFor="male">male</label>
    <input type="radio" id='male'/>
    
    </div>
    <div className='flex gap-2'> 
    <label htmlFor="female">female</label>
    <input type="radio" id='female'/>
    </div>
    <textarea onChange={(e)=>setDescVal(e.target.value)} className='border mt-5' rows="5" cols="30" placeholder="description..."></textarea>
    {!isLoggedIn && <button onClick={handleCheck} className='border w-30 h-12 mt-5 cursor-pointer hover:bg-black hover:text-white transition duration-[350ms]'>Submit</button>
}
    {isLoggedIn && <Link onClick={handleCheck} to={'/login'} className='border text-center pt-[11px] w-30 h-12 mt-5 cursor-pointer hover:bg-black hover:text-white transition duration-[350ms]'>Submit</Link>}
    </form>
    </div>
    </>
  )
}

export default Signup