import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [check,setCheck] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault()
  }

  useEffect(()=>{
    if(username.trim() && password.trim()){
        setCheck(true)
    }else{
        setCheck(false)
    }
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
  },[username,password])

  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center">შესვლა</h2>
        <input type="text" placeholder="მომხმარებლის სახელი" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border mb-3 rounded"
        />
        <input type="password" placeholder="პაროლი" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border mb-3 rounded"
        />
        {!check && <button disabled={!check} className='bg-gray-300 text-white cursor-not-allowed relative top-2 px-26 py-2 rounded'>შესვლა</button>}
        {check && <Link type="submit" to={'/home'} className='bg-blue-500 hover:bg-blue-600 cursor-pointer text-white relative top-2 px-26 py-2 rounded'>შესვლა</Link>}
      </div>
    </form>
  )
}

export default Login
