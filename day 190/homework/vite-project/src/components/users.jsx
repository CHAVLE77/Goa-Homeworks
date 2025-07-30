import React, { useState } from 'react'
import { users } from './data'
import { Link } from 'react-router-dom'

const Users = () => {
    let [value,setValue] = useState('')
    let [info,setInfo] = useState(users)
    function handleFilter() {
       let filtered = users.filter(user=>user.name.toLowerCase().includes(value.toLowerCase()))
       setInfo(filtered)
    }
    return (
    <div>
    <div className='flex justify-center relative bottom-7 gap-4'>
        <input className='w-[400px] h-10 p-2 border rounded-lg' onChange={(e)=>setValue(e.target.value)} type="text" placeholder='Search By Name'/>
        <button onClick={handleFilter} className='w-25 h-10 border rounded-lg bg-neutral-500 text-white cursor-pointer'>Submit</button>
    </div>
      {info.map((el,_) => (
        <Link key={el.id} to={`/users/${el.id}`}>
          <div className='w-[70%] m-auto h-35 bg-neutral-500 p-4 my-2 text-white rounded'>
            <h1 className='font-bold text-xl'>{el.name}</h1>
            <p>ID: {el.id}</p>
            <p>{el.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Users
