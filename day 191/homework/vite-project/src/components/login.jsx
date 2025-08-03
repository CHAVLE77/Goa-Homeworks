import React, { use, useState } from 'react'
import { Link } from 'react-router'
const Login = () => {
    const [nameValue,setNameValue] = useState('')
    const [passValue,setPassValue] = useState('')
    let nameVal = localStorage.getItem('name')
    let passVal = localStorage.getItem('pass')
    const [isLogged,setIsLogged] = useState(false)
    function handleCheck(){
        if(nameValue === nameVal && passValue === passVal){
            alert('Login successful')
            setIsLogged(true)
        }
    }

  return (
    <>
    <div className='w-[300px] mt-30 m-auto h-[248px] border'>
    <form className='flex flex-col gap-2 items-center'>
    <input onChange={(e)=>setNameValue(e.target.value)} type="text" className='w-[80%] mt-10 h-10 border p-2' placeholder='name'/>
    <input onChange={(e)=>setPassValue(e.target.value)} type="password" className='w-[80%] h-10 border p-2' placeholder='password'/>    
     {!isLogged && <button onClick={handleCheck} className='border w-30 h-12 mt-5 cursor-pointer hover:bg-black hover:text-white transition duration-[350ms]'>Submit</button>
}
{isLogged && <Link onClick={handleCheck} to={'/'} className='border text-center pt-[11px] w-30 h-12 mt-5 cursor-pointer hover:bg-black hover:text-white transition duration-[350ms]'>Submit</Link>}
    <Link to={'/signup'}>register</Link>
    </form>
    </div>
    </>
)
}

export default Login