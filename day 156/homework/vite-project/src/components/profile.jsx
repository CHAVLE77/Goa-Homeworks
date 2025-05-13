import React from 'react'
import users from './Data'
import { useState } from 'react'
 const Profile = () => {
    const [check,setCheck] = useState(false)
  return (
    <>
    {users.map((el)=>(
        <div className='border-2 m-auto text-center mt-5 w-90 h-100'>
            <p className='text-2xl'>{el.name}</p>
            <p className='text-2xl'>{el.age}</p>
            <button onClick={() => setCheck(!check)} className='border w-20 h-7 cursor-pointer'>{check ? 'following' : 'follow'}</button>
        </div>
    ))}
    </>
  )
}

export default Profile